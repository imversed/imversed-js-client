const txAddr = process.env.IMVERSED_TX_ADDR || 'https://rpc-test.imversed.network:443'
const qAddr = process.env.IMVERSED_QUERY_ADDR || 'https://rest-test.imversed.network:443'
const mnemonic = process.env.IMVERSED_WALLET_MNEMONIC || 'month all deliver flower party keep minor salon much cross kiss indoor true high goat vehicle hazard age round cage toy choose lottery nice'
const address = process.env.IMVERSED_WALLET_ADDRESS || 'imv1lcy3fhm3kx52n6fr49sjtr56f9u4azpvwy5rre'
const denom = process.env.IMVERSED_BASE_DENOM || 'aimv'
const pubKey = process.env.IMVERSED_WALLET_PUBKEY || 'A0WJjUArjFrjIePaDZOEpIHSaiHj2Q54iic7+BJvjkxQ'

export { txAddr, qAddr, mnemonic, denom, pubKey, address }
