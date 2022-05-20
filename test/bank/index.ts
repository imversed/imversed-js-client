import { expect } from 'chai'
import { bank, loadWallet, createWallet, restoreWallet } from '../../src'
import { qAddr, mnemonic, denom } from '../lib/env'

describe('Bank', () => {
    it('can query balances', async () => {
        const wallet = await loadWallet(mnemonic)
        const [account] = await wallet.getAccounts()
        const q = await bank.queryClient({ addr: qAddr })
        const resp =  await q.queryBalance(account.address, denom)

        expect(resp.data.balance.amount).to.be.eql(parseInt(resp.data.balance.amount))
        expect(parseInt(resp.data.balance.amount)).to.be.gt(0)
    })
    it('queries', () => {
    })
})