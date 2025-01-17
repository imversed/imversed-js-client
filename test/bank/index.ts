import { expect } from "chai"
import { bank, loadWallet } from "../../src"
import { qAddr, mnemonic, denom, txAddr } from "../utils/env"

const { txClient, queryClient } = bank

describe("Bank", () => {
  it("sends tokens", async () => {
    const wallet = await loadWallet(mnemonic)
    const [account] = await wallet.getAccounts()

    const tx = await txClient(wallet, { addr:  txAddr})

    const msg = tx.msgSend({
      amount: [{
        amount: "1000",
        denom
      }],
      toAddress: "imv1j7q2njaxtf92e7dnksaa3za9wan2teanqmu07l",
      fromAddress: account.address
    })

    const response = await tx.signAndBroadcast([msg], {
      fee: {
        amount: [{
          amount: "1500000",
          denom
        }],
        gas: "200000"
      }
    })

    expect(response.code).to.be.eq(0)
  })

  it("can query balances", async () => {
    const wallet = await loadWallet(mnemonic)
    const [account] = await wallet.getAccounts()
    const q = await queryClient({ addr: qAddr })
    const resp = await q.queryBalance(account.address, { denom })

    expect(+resp.data.balance.amount).to.be.gt(1000)
  })

})
