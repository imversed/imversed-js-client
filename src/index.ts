import { HdPath, Slip10RawIndex } from "@imversed/crypto"
import { DirectSecp256k1HdWallet, OfflineDirectSigner } from "@imversed/proto-signing"

const prefix = 'imv'

const hdPath: HdPath = [
    Slip10RawIndex.hardened(44),
    Slip10RawIndex.hardened(60),
    Slip10RawIndex.hardened(0),
    Slip10RawIndex.normal(0),
    Slip10RawIndex.normal(0)
]

export async function loadWallet(mnemonic: string): Promise<IWallet> {
    return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        hdPaths: [hdPath],
        prefix: prefix
    })
}

export async function createWallet(password?: string): Promise<IWallet> {
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

import * as auth from './auth'
import * as bank from './bank'
import * as crisis from './crisis'
import * as currency from './currency'
import * as distribution from './distribution'
import * as evidence from './evidence'
import * as feegrant from './feegrant'
import * as gov from './gov'
import * as ibc_transfer from './ibc-go-transfer'
import * as nft from './nft'
import * as pools from './pools'
import * as slashing from './slashing'
import * as staking from './staking'
import * as vesting from './vesting'

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
