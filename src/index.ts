import { makeCosmoshubPath } from "@cosmjs/amino"
import { DirectSecp256k1HdWallet, OfflineDirectSigner } from "@cosmjs/proto-signing"
import {ethToEthermint, ETH} from '@tharsis/address-converter';
import { generateEndpointAccount } from '@tharsis/provider';
import * as HDWallet from "ethereum-hdwallet";
import {bech32} from "bech32";


const prefix = "imv"

export async function loadWallet(mnemonic: string): Promise<IWallet> {

    const wallet = HDWallet.fromMnemonic(mnemonic)

    const address = wallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString("hex")

    const data = ETH.decoder("0x" + address)
    const res = bech32.encode("imv", bech32.toWords(data))

    const hdPath = makeCosmoshubPath(0)
    const pwall = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      hdPaths: [hdPath],
      prefix
    })

    return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        hdPaths: [hdPath],
        prefix
    })
}

export async function createWallet(password?: string): Promise<IWallet> {
    const hdPath = await makeCosmoshubPath(0)
    return DirectSecp256k1HdWallet.generate(24, {
        bip39Password: password,
        hdPaths: [hdPath],
        prefix
    })
}

export async function restoreWallet(serializedWallet: string, password?: string): Promise<IWallet> {
    return DirectSecp256k1HdWallet.deserialize(serializedWallet, password)
}

export class IWallet extends DirectSecp256k1HdWallet {}

import * as auth from "./auth"
import * as bank from "./bank"
import * as crisis from "./crisis"
import * as currency from "./currency"
import * as distribution from "./distribution"
import * as evidence from "./evidence"
import * as feegrant from "./feegrant"
import * as gov from "./gov"
import * as ibc_transfer from "./ibc-go-transfer"
import * as nft from "./nft"
import * as pools from "./pools"
import * as slashing from "./slashing"
import * as staking from "./staking"
import * as vesting from "./vesting"

export {
    auth,
    bank,
    crisis,
    currency,
    distribution,
    evidence,
    feegrant,
    gov,
    ibc_transfer,
    nft,
    pools,
    slashing,
    staking,
    vesting
}
