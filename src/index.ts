import { makeCosmoshubPath } from "@cosmjs/amino"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"

const prefix = 'imv'

export async function loadWallet(mnemonic: string) {
    const hdPath = makeCosmoshubPath(0)
    return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        hdPaths: [hdPath],
        prefix: prefix
    })
}

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