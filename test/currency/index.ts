import { assertTx } from "../utils/utils"
import { loadWallet, currency, bank } from "../../lib"
import { expect } from "chai"
import * as Faker from "faker"

const { txClient } = currency

const txAddr = process.env.IMVERSED_TX_ADDR || "https://tx-endpoint-test.imversed.com:443"
const qAddr = process.env.IMVERSED_QUERY_ADDR || "https://query-endpoint-test.imversed.com"
const mnemonic = process.env.IMVERSED_WALLET_MNEMONIC || "invalid mnemonic"

describe("currency", () => {
  describe("txs", () => {
    it("issue denom and mint some tokens", async () => {
      const wallet = await loadWallet(mnemonic)
      const [account] = await wallet.getAccounts()
      const tx = await txClient(wallet, { addr: txAddr })
      const denom = Faker.lorem.word()
      const issueMessage = tx.msgIssue({
        sender: account.address,
        denom,
        icon: ""
      })

      const resIssue = await tx.signAndBroadcast([issueMessage], {
        fee: {
          amount: [{
            amount: "200",
            denom: "aimv"
          }],
          gas: "200000"
        }
      })

      assertTx(resIssue)

      const mintMessage = tx.msgMint({
        sender: account.address,
        coin: {
          amount: "10000000",
          denom
        }
      })

      const resMint = await tx.signAndBroadcast([mintMessage], {
        fee: {
          amount: [{
            amount: "20000",
            denom: "aimv"
          }],
          gas: "2000000"
        }
      })

      assertTx(resMint)

      const q = await bank.queryClient({ addr: qAddr })
      const {data} = await q.queryBalance(account.address, {denom})
      expect(data.balance.amount).to.be.eq("10000000")
    })
  })
})
