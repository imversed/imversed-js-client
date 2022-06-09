import { expect } from "chai"
import { assertTx } from "../utils/utils"
import { loadWallet, pools, currency } from "../../lib"
import * as Faker from "faker"

const { queryClient, txClient } = pools

const txAddr = process.env.IMVERSED_TX_ADDR || "https://tx-endpoint-test.imversed.com:443"
const qAddr = process.env.IMVERSED_QUERY_ADDR || "https://query-endpoint-test.imversed.com"
const mnemonic = process.env.IMVERSED_WALLET_MNEMONIC || "invalid mnemonic"

describe("pools module", () => {
    describe("queries", () => {
        it("num pools", async () => {
            const q = await queryClient({ addr: qAddr })

            const res = await q.queryNumPools()

            expect(res.data.numPools).to.be.eq(parseInt(res.data.numPools).toString())
        })
    })

    describe("txs", () => {
        it("create pool", async () => {
            const wallet = await loadWallet(mnemonic)
            const [account] = await wallet.getAccounts()
          const currencyTx = await currency.txClient(wallet, { addr: txAddr })

          const tx = await txClient(wallet, { addr: txAddr })

          // setup currency
          const denom = Faker.lorem.word()

          const issueMessage = currencyTx.msgIssue({
            sender: account.address,
            denom,
            icon: ""
          })

          const resIssue = await currencyTx.signAndBroadcast([issueMessage], {
            fee: {
              amount: [{
                amount: "200",
                denom: "aimv"
              }],
              gas: "200000"
            }
          })

          assertTx(resIssue)

          const mintMessage = currencyTx.msgMint({
            sender: account.address,
            coin: {
              amount: "10000000",
              denom
            }
          })

          const resMint = await currencyTx.signAndBroadcast([mintMessage], {
            fee: {
              amount: [{
                amount: "20000",
                denom: "aimv"
              }],
              gas: "2000000"
            }
          })

          assertTx(resMint)
            // test pools
            const swapFee = 0.001
            const exitFee = 0.001

            const msg = tx.msgCreatePool({
                sender: account.address,
                poolParams: {
                    swapFee: Math.floor(swapFee * 10 ** 18).toString(),
                    exitFee: Math.floor(exitFee * 10 ** 18).toString(),
                    smoothWeightChangeParams: undefined
                },
                poolAssets: [
                    {
                        token: {
                            denom: "aimv",
                            amount: "1000000"
                        },
                        weight: "1"
                    },
                    {
                        token: {
                            denom,
                            amount: "1000000"
                        },
                        weight: "1"
                    },
                ],

            })

            const res = await tx.signAndBroadcast([msg], {
                fee: {
                    amount: [{
                        amount: "20000",
                        denom: "aimv"
                    }],
                    gas: "200000"
                }
            })

            assertTx(res)
        })
    })
})
