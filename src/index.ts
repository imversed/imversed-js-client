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
