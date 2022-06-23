import { expect } from "chai"

export function assertTx(res) {
    expect(res.code, res.rawLog || 'tx returns code ' + res.code).to.be.eq(0)
    expect(res.transactionHash).to.not.be.empty
    expect(res.gasWanted).to.be.gt(0)
    expect(res.gasUsed).to.be.gt(0)
}
