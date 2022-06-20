import { expect } from "chai"
import {convertAddress, loadWallet} from "../../src/"
import { pubKey, mnemonic, address as addressExpected } from "../utils/env"

import { toBase64 } from "@imversed/encoding"

describe("Wallet", () => {
    it("can be recovered from mnemonic", async () => {
        const wallet = await loadWallet(mnemonic)
        const [account] = await wallet.getAccounts()

        expect(account.address).to.be.eq(addressExpected)
        expect(toBase64(account.pubkey)).to.be.eq(pubKey)
    })
})

describe("Converter addresses EVM <=> IMV",  () => {
  const testCases = [
    {
      imvAddress:"imv1jyc8jnxjeynktsvvpx8uvkpa5hmup0lym2taxg",
      evmAddress:"0x9130794Cd2C92765c18C098FC6583dA5f7c0bfE4"
    },
    {
      imvAddress:"imv1hhj4v356u4vv30g8779p68c6h9udhwwdrcytrr",
      evmAddress:"0xBdE556469aE558c8BD07F78A1D1F1Ab978dBb9cd"
    }
  ]

  it("should convert correctly imv => eth  ", () => {
    testCases.forEach(test => {
      const {imvAddress, evmAddress} = test
      expect(convertAddress(imvAddress)).to.be.eq(evmAddress.toLowerCase())
    })
  })

  it("should convert correctly eth => imv  ", () => {
    testCases.forEach(test => {
      const {imvAddress, evmAddress} = test
      expect(convertAddress(evmAddress)).to.be.eq(imvAddress)
    })
  })
})
