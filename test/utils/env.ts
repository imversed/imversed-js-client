const txAddr = process.env.IMVERSED_TX_ADDR || 'https://tx-endpoint-test.imversed.com:443'
const qAddr = process.env.IMVERSED_QUERY_ADDR || 'https://query-endpoint-test.imversed.com'
const mnemonic = process.env.IMVERSED_WALLET_MNEMONIC || 'invalid mnemonic'
const address = process.env.IMVERSED_WALLET_ADDRESS || '<undefined>'
const denom = process.env.IMVERSED_BASE_DENOM || 'aimv'
const pubKey = process.env.IMVERSED_WALLET_PUBKEY || '<undefined>'

export { txAddr, qAddr, mnemonic, denom, pubKey, address }
