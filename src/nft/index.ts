// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import { Api } from './rest'
import {
    MsgBurnNFT,
    MsgEditNFT,
    MsgIssueDenom,
    MsgMintNFT,
    MsgTransferDenom,
    MsgTransferNFT
} from './types/nft/tx'

const types = [
    ['/imversed.nft.MsgBurnNFT', MsgBurnNFT],
    ['/imversed.nft.MsgEditNFT', MsgEditNFT],
    ['/imversed.nft.MsgTransferDenom', MsgTransferDenom],
    ['/imversed.nft.MsgIssueDenom', MsgIssueDenom],
    ['/imversed.nft.MsgTransferNFT', MsgTransferNFT],
    ['/imversed.nft.MsgMintNFT', MsgMintNFT]
]
export const MissingWalletError = new Error('wallet is required')

const registry = new Registry(types as any)

const defaultFee = {
    amount: [],
    gas: '200000'
}

interface TxClientOptions {
    addr: string
}

interface SignAndBroadcastOptions {
    fee: StdFee
    memo?: string
}

const txClient = async (
    wallet: OfflineSigner,
    { addr: addr }: TxClientOptions = { addr: 'http://localhost:26657' }
) => {
    if (!wallet) { throw MissingWalletError }

    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry })
    const { address } = (await wallet.getAccounts())[0]

    return {
        signAndBroadcast: (
            msgs: EncodeObject[],
            { fee, memo }: SignAndBroadcastOptions = {
                fee: defaultFee,
                memo: ''
            }
        ) => client.signAndBroadcast(address, msgs, fee, memo),
        msgBurnNFT: (data: MsgBurnNFT): EncodeObject => ({
            typeUrl: '/imversed.nft.MsgBurnNFT',
            value: data
        }),
        msgEditNFT: (data: MsgEditNFT): EncodeObject => ({
            typeUrl: '/imversed.nft.MsgEditNFT',
            value: data
        }),
        msgTransferDenom: (data: MsgTransferDenom): EncodeObject => ({
            typeUrl: '/imversed.nft.MsgTransferDenom',
            value: data
        }),
        msgIssueDenom: (data: MsgIssueDenom): EncodeObject => ({
            typeUrl: '/imversed.nft.MsgIssueDenom',
            value: data
        }),
        msgTransferNFT: (data: MsgTransferNFT): EncodeObject => ({
            typeUrl: '/imversed.nft.MsgTransferNFT',
            value: data
        }),
        msgMintNFT: (data: MsgMintNFT): EncodeObject => ({
            typeUrl: '/imversed.nft.MsgMintNFT',
            value: data
        })
    }
}

interface QueryClientOptions {
    addr: string
}

const queryClient = async (
    { addr: addr }: QueryClientOptions = { addr: 'http://localhost:1317' }
) => {
    return new Api({ baseUrl: addr })
}

export { txClient, queryClient }
