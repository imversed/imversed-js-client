import { loadWallet, nft } from "../../lib"
import { assertTx } from "../utils/utils"
import * as faker from "faker"

const { txClient } = nft

const txAddr = process.env.IMVERSED_TX_ADDR || "https://tx-endpoint-test.imversed.com:443"
const mnemonic = process.env.IMVERSED_WALLET_MNEMONIC || "invalid mnemonic"

describe("NFT module", () => {
    describe("txs", () => {
        it("issue denom", async () => {
            const wallet = await loadWallet(mnemonic)
            const [account] = await wallet.getAccounts()
            const tx = await txClient(wallet, { addr: txAddr })

            const msg = tx.msgIssueDenom({
                id: faker.random.alpha({count: 3, upcase: false}) + faker.random.alphaNumeric(7),
                name: "Test Denom",
                schema: "",
                sender: account.address,
                symbol: "TST123",
                mintRestricted: false,
                updateRestricted: true,
                oracleUrl: "",
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
