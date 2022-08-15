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

export * as auth from './auth'
export * as authz from './authz'
export * as bank from './bank'
export * as crisis from './crisis'
export * as currency from './currency'
export * as distribution from './distribution'
export * as evidence from './evidence'
export * as evm from './evm'
export * as feegrant from './feegrant'
export * as feemarket from './feemarket'
export * as gov from './gov'
export * as ibc_transfer from './ibc-transfer'
export * as ibc_accounts_controller from './ibc-accounts-controller'
export * as ibc_accounts_host from './ibc-accounts-host'
export * as ibc_channel from './ibc-channel'
export * as ibc_client from './ibc-client'
export * as ibc_connection from './ibc-connection'
export * as mint from './mint'
export * as nft from './nft'
export * as params from './params'
export * as pools from './pools'
export * as slashing from './slashing'
export * as staking from './staking'
export * as tendermint from './tendermint'
export * as tx from './tx'
export * as upgrade from './upgrade'
export * as vesting from './vesting'
