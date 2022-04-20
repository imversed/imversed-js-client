import { loadWallet, nft } from '../../lib'
import { expect } from 'chai'

const { txClient, queryClient } = nft

const txAddr = process.env.IMVERSED_TX_ADDR || 'https://tx-endpoint-test.imversed.com:443'
const qAddr = process.env.IMVERSED_QUERY_ADDR || 'https://query-endpoint-test.imversed.com'
const mnemonic = process.env.IMVERSED_WALLET_MNEMONIC || 'invalid mnemonic'

describe('NFT module',() => {
    describe('txs', () => {
        it('issue denom', async () => {
            const wallet = await loadWallet(mnemonic)
            const [account] = await wallet.getAccounts()
            const tx = await txClient(wallet, { addr: txAddr })

            const msg = tx.msgIssueDenom({
                id: 'test123',
                name: 'Test Denom',
                schema: '',
                sender: account.address,
                symbol: 'TST123',
                mintRestricted: false,
                updateRestricted: true,
                oracleUrl: '',
            })

            const res = await tx.signAndBroadcast([msg], {
                fee: {
                    amount: [{
                        amount: '200',
                        denom: 'nimv'
                    }],
                    gas: '200000'
                }
            })

            expect(res.transactionHash).to.not.be.empty
        })
    })
})