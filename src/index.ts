import { HdPath, Slip10RawIndex } from "@imversed/crypto"
import { DirectSecp256k1HdWallet } from "@imversed/proto-signing"
import {toHex, fromHex, toBech32, fromBech32} from "@imversed/encoding"

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
        prefix
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

export function convertAddress(address: string): string {
  if (/^0x[a-fA-F0-9]{40}$/g.test(address)) {
    const evmAddrWithoutHexPrefix = address.replace(/^(-)?0x/i, '$1')
    const evmAddressBytes = fromHex(evmAddrWithoutHexPrefix)
    return toBech32(prefix, evmAddressBytes)
  }

   if (/^imv/g.test(address)) {
    const {data: bytesBech32} = fromBech32(address)
    const bytesBech32ToHex = toHex(bytesBech32)
     return `0x${bytesBech32ToHex}`
  }
  throw new Error("unsupported type of address")
}

export class IWallet extends DirectSecp256k1HdWallet {}

import * as auth from './auth'
import * as authz from './authz'
import * as bank from './bank'
import * as crisis from './crisis'
import * as currency from './currency'
import * as distribution from './distribution'
import * as erc20 from './erc20'
import * as evidence from './evidence'
import * as evm from './evm'
import * as feegrant from './feegrant'
import * as feemarket from './feemarket'
import * as gov from './gov'
import * as infr from './infr'
import * as mint from './mint'
import * as params from './params'
import * as pools from './pools'
import * as slashing from './slashing'
import * as staking from './staking'
import * as tendermint from './tendermint'
import * as tx from './tx'
import * as upgrade from './upgrade'
import * as vesting from './vesting'
import * as xverse from './xverse'

export {
    auth,
    authz,
    bank,
    crisis,
    currency,
    distribution,
    erc20,
    evidence,
    evm,
    feegrant,
    feemarket,
    gov,
    infr,
    mint,
    params,
    pools,
    slashing,
    staking,
    tendermint,
    tx,
    upgrade,
    vesting,
    xverse
}
