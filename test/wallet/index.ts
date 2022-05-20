import { expect } from "chai"
import { loadWallet } from "../../src/"
import { pubKey, mnemonic, address as addressExpected } from '../lib/env'

import { toBase64 } from "@cosmjs/encoding"

describe('Wallet', () => {
    it('can be recovered from mnemonic', async () => {
        const wallet = await loadWallet(mnemonic)
        const [account] = await wallet.getAccounts()

        expect(account.address).to.be.eq(addressExpected)
        expect(toBase64(account.pubkey)).to.be.eq(pubKey)
    })
})