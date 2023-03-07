import { expect } from 'chai'
import { loadWallet } from '../../src'
import { qAddr, mnemonic, mnemonic2, denom, txAddr, pubKey } from '../utils/env'
import { xverse } from '../../lib'
import * as faker from 'faker'
import { Secp256k1HdWallet } from "@imversed/amino";
import * as stargete from '@imversed/stargate'
import { SigningStargateClient, AminoTypes } from '@imversed/stargate'
import {createXverseAminoConverters, registry} from '../../src/xverse'
import { AminoMsg, StdFee } from '@imversed/amino/build/signdoc'
import * as protoSign from '@imversed/proto-signing'
import { serializeSignDoc } from '@imversed/amino'
import { Any } from 'cosmjs-types/google/protobuf/any'
import { EncodeObject } from '@imversed/proto-signing/build/registry'
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing'
import {HdPath, Slip10RawIndex} from "@imversed/crypto";
import {decodeTxRaw, makeAuthInfoBytes} from "@imversed/proto-signing";
import {AuthInfo, TxRaw} from "../../lib/tx/types/cosmos/tx/v1beta1/tx";

const encoding = require('@imversed/encoding')
const long_1 = require('long')

const tx3 = require('cosmjs-types/cosmos/tx/v1beta1/tx')

const { txClient, queryClient } = xverse

describe('Xverse', () => {
  it('create verse', async () => {
    const wallet = await loadWallet(mnemonic)
    const [account] = await wallet.getAccounts()
    const q = await queryClient({ addr: qAddr })
    const { data: dataStart } = await q.queryVerseAll()

    const versesCountStart = dataStart.pagination.total

    const tx = await txClient(wallet, { addr: txAddr })

    const createMessage = tx.msgCreateVerse({
      sender: account.address,
      icon: '',
      description: 'some verse'
    })

    const createRes = await tx.signAndBroadcast([createMessage], {
      fee: {
        amount: [{
          amount: '150000000',
          denom
        }],
        gas: '200000'
      }
    })
    expect(createRes.code).to.be.eq(0)

    const { data } = await q.queryVerseAll()
    const versesCountFin = data.pagination.total
    expect(+versesCountFin).to.be.gt(+versesCountStart)
  })

  it('create verse direct sign', async () => {
    const wallet = await loadWallet(mnemonic)
    const [account] = await wallet.getAccounts()
    const q = await queryClient({ addr: qAddr })
    const tx = await txClient(wallet, { addr: txAddr })
    const { data } = await q.queryVerseAll()
    const verseToAddAsset = faker.random.arrayElement(data.verse.filter(v => v.owner === account.address))
    const someContractId = '0xaFbCB330Cb235CBda761Efd22bf16c62ea0E1f0b'

    const client = await SigningStargateClient.connectWithSigner('https://rpc-test.imversed.network', wallet, { registry })

    const createMessage = tx.msgCreateVerse({
      sender: account.address,
      icon: '',
      description: 'some verse'
    })
    // console.log('addAssetMessage', addAssetMessage)

    const fee = {
      amount: [{
        amount: '15000000',
        denom
      }],
      gas: '2000000'
    }

    const { accountNumber, sequence } = await client.getSequence(account.address)
    let pubkey = protoSign.encodePubkey({
      type: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
      value: 'A0WJjUArjFrjIePaDZOEpIHSaiHj2Q54iic7+BJvjkxQ'
    })
    // console.log("pubkey", pubkey)

    const signedTx = await client
      .sign(account.address, [createMessage],
        fee,
        mnemonic
      )
    // const txBodyBytes = registry.encode(addAssetMessage)
    const txBodyBytes = signedTx.bodyBytes

    const authInfoBytes1 = protoSign.makeAuthInfoBytes([{ pubkey, sequence }], fee.amount, 200000)

    const signDoc1 = protoSign.makeSignDoc(txBodyBytes, authInfoBytes1, 'imversed_5555558-1', accountNumber)
    const { signature } = await wallet.signDirect(account.address, signDoc1, pubkey.typeUrl)

    const txR = {
      authInfoBytes: authInfoBytes1,
      bodyBytes: txBodyBytes,
      signatures: [encoding.fromBase64(signature.signature)]
    }

    console.log('txR', txR)

    const resp = await client.broadcastTx(tx3.TxRaw.encode(txR).finish())
    console.log('resp')
    console.log(resp)
  })

  it('rename verse', async () => {
    const wallet = await loadWallet(mnemonic)
    const [account] = await wallet.getAccounts()
    const q = await queryClient({ addr: qAddr })
    const tx = await txClient(wallet, { addr: txAddr })

    const { data } = await q.queryVerseAll()

    const verseToRename = faker.random.arrayElement(data.verse.filter(v => v.owner === account.address))

    // rename verse
    const newVerseName = faker.lorem.word(8)
    const renameMessage = tx.msgRenameVerse(
      {
        sender: account.address,
        verseCreator: account.address,
        verseOldName: verseToRename.name,
        verseNewName: newVerseName
      }
    )

    const renameRes = await tx.signAndBroadcast([renameMessage], {
      fee: {
        amount: [{
          amount: '15000000000',
          denom
        }],
        gas: '2000000'
      }
    })
    expect(renameRes.code).to.be.eq(0)

    const { data: renameResponse } = await q.queryVerse(newVerseName)

    expect(renameResponse.verse).to.have.all.keys(['name', 'owner', 'description', 'icon', 'smart_contracts', 'oracle', 'authenticated_keys'])
  })

  it.only('add asset bu js-client', async () => {
    const hdPath: HdPath = [
      Slip10RawIndex.hardened(44),
      Slip10RawIndex.hardened(60),
      Slip10RawIndex.hardened(0),
      Slip10RawIndex.normal(0),
      Slip10RawIndex.normal(0)
    ]

    const aminoWallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'imv', hdPaths: [hdPath]})
    const aminoWallet2 = await Secp256k1HdWallet.fromMnemonic(mnemonic2, { prefix: 'imv', hdPaths: [hdPath]})

    const [aminoAccount] = await aminoWallet.getAccounts()
    const [aminoAccount2] = await aminoWallet2.getAccounts()

    const tx = await txClient(aminoWallet, { addr: txAddr })
    // const { data } = await q.queryVerseAll()
    // const verseToAddAsset = faker.random.arrayElement(data.verse.filter(v => v.owner === account.address))
    const someContractHash = '0x1F9DC2e245081DeA326ab7E1793Ad909251044bd'

    const aminoTypes = new AminoTypes(createXverseAminoConverters())
    const client = await SigningStargateClient.connectWithSigner('http://localhost:26657', aminoWallet, { registry, aminoTypes })

    const client2 = await SigningStargateClient.connectWithSigner('http://localhost:26657', aminoWallet2, { registry, aminoTypes })

    const addAssetMessage = tx.msgAddAssetToVerse(
      {
        sender: aminoAccount.address,
        verseName: "52fdfc07-2182-454f-963f-5f0f9a621d72",
        assetType: 'contract',
        assetId: someContractHash,
        assetCreator: "0xadce8D6f528f796BbD450737fa89674A5615360c",
        verseCreator: aminoAccount.address
      }
    )
    // console.log('addAssetMessage', addAssetMessage)

    const fee = {
      amount: [{
        amount: '15000000',
        denom
      }],
      gas: '2000000'
    }

    const response1 = await client.sign(aminoAccount.address, [addAssetMessage], fee, "")

    const response2 = await client2.sign(aminoAccount2.address, [addAssetMessage], fee, "")

    const byteTx = tx3.TxRaw.encode(response1).finish()
    const decodedTxRaw = decodeTxRaw(byteTx)

    const byteTx2 = tx3.TxRaw.encode(response2).finish()
    const decodedTxRaw2 = decodeTxRaw(byteTx2)

    const pairedSignatures = [
      decodedTxRaw.signatures[0],
      decodedTxRaw2.signatures[0]
    ]


    const resTx = TxRaw.fromPartial({
      authInfoBytes: makeAuthInfoBytes([
        { pubkey: decodedTxRaw.authInfo.signerInfos[0].publicKey,
        sequence: decodedTxRaw.authInfo.signerInfos[0].sequence.toNumber() },

        { pubkey: decodedTxRaw2.authInfo.signerInfos[0].publicKey,
        sequence: decodedTxRaw2.authInfo.signerInfos[0].sequence.toNumber() }
      ], decodedTxRaw.authInfo.fee.amount, decodedTxRaw.authInfo.fee.gasLimit.toNumber(), 127), // 127=SIGN_LEGACY_AMINO_JSON
      bodyBytes: response1.bodyBytes,
      signatures: pairedSignatures
    });

    console.log("signedTx to json", tx3.TxRaw.toJSON(resTx))

    const byteSignedTx = tx3.TxRaw.encode(resTx).finish()

    const response = await client.broadcastTx(byteSignedTx)

    console.log(response)

    // const { accountNumber, sequence } = await client.getSequence(account.address)
    // let pubkey = protoSign.encodePubkey({
    //   type: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
    //   value: 'A0WJjUArjFrjIePaDZOEpIHSaiHj2Q54iic7+BJvjkxQ'
    // })
    // // console.log("pubkey", pubkey)
    //
    // const signedTx = await client
    //   .sign(account.address, [addAssetMessage],
    //     fee,
    //     mnemonic
    //   )
    //
    // // const txBodyBytes = registry.encode(addAssetMessage)
    // const txBodyBytes = signedTx.bodyBytes
    //
    // const authInfoBytes1 = protoSign.makeAuthInfoBytes([{ pubkey, sequence }], fee.amount, 200000)
    // // console.log('authInfoBytes', authInfoBytes1)
    // // console.log("signedTx", signedTx)
    // // console.log("signedTx to json",tx3.TxRaw.toJSON(signedTx))
    //
    // const signDoc1 = protoSign.makeSignDoc(txBodyBytes, authInfoBytes1, 'imversed_5555558-1', accountNumber)
    // const { signature } = await wallet.signDirect(account.address, signDoc1, pubkey.typeUrl)
    //
    // const authInfoBytes2 = protoSign.makeAuthInfoBytes([
    //   { pubkey, sequence },
    //   {
    //     pubkey,
    //     sequence: sequence + 1
    //   }
    // ], fee.amount, 200000)
    // // let hash = try! signDoc.serializedData().sha256()
    // // let signature = try! ECDSA.compactsign(hash, privateKey: keys.private)
    // // partialRawTx.signatures.append(signature)
    //
    // const signDoc2 = protoSign.makeSignDoc(txBodyBytes, authInfoBytes2, 'imversed_5555558-1', accountNumber)
    // const { signature: signature2 } = await wallet.signDirect(account.address, signDoc2, pubkey.typeUrl)
    //
    // const txR = {
    //   authInfoBytes: authInfoBytes2,
    //   bodyBytes: txBodyBytes,
    //   signatures: [encoding.fromBase64(signature.signature), encoding.fromBase64(signature2.signature)]
    //   // signatures: [signature.signature, signature2.signature]
    //
    // }
    //
    // console.log('txR', txR)
    //
    // const resp = await client.broadcastTx(tx3.TxRaw.encode(txR).finish())
    // console.log('resp')
    // console.log(resp)
  })
})
