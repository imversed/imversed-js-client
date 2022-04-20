import { expect } from 'chai'
import { loadWallet, pools } from '../../lib'

const { queryClient, txClient } = pools

const txAddr = process.env.IMVERSED_TX_ADDR || 'https://tx-endpoint-test.imversed.com:443'
const qAddr = process.env.IMVERSED_QUERY_ADDR || 'https://query-endpoint-test.imversed.com'
const mnemonic = process.env.IMVERSED_WALLET_MNEMONIC || 'invalid mnemonic'

describe('pools module', () => {
    describe('queries', () => {
        it('num pools', async () => {
            const q = await queryClient({ addr: qAddr })

            const res = await q.queryNumPools()

            expect(res.data.numPools).to.be.eq(parseInt(res.data.numPools).toString())
        })
    })

    describe('txs', () => {
        it('create pool', async () => {
            const wallet = await loadWallet(mnemonic)
            const [account] = await wallet.getAccounts()
            const tx = await txClient(wallet, { addr: txAddr })

            const msg = tx.msgCreatePool({
                sender: account.address,
                poolParams: {
                    swapFee: '1',
                    exitFee: '1',
                    smoothWeightChangeParams: undefined
                },
                poolAssets: [
                    {
                        token: {
                            denom: 'nimv',
                            amount: '1000000'
                        },
                        weight: '1'
                    },
                    {
                        token: {
                            denom: 'vmin',
                            amount: '1000000'
                        },
                        weight: '1'
                    },
                ],
            
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

            // expect(res.transactionHash).to.be.empty
        })
    })
})