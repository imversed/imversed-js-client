const txAddr = process.env.IMVERSED_TX_ADDR || 'https://rpc-test.imversed.network:443'
const qAddr = process.env.IMVERSED_QUERY_ADDR || 'https://rest-test.imversed.network:443'
const mnemonic = process.env.IMVERSED_WALLET_MNEMONIC || 'month all deliver flower party keep minor salon much cross kiss indoor true high goat vehicle hazard age round cage toy choose lottery nice'
const address = process.env.IMVERSED_WALLET_ADDRESS || 'imv1lcy3fhm3kx52n6fr49sjtr56f9u4azpvwy5rre'
const denom = process.env.IMVERSED_BASE_DENOM || 'aimv'
const pubKey = process.env.IMVERSED_WALLET_PUBKEY || 'A0WJjUArjFrjIePaDZOEpIHSaiHj2Q54iic7+BJvjkxQ'


// const txAddr = process.env.IMVERSED_TX_ADDR || 'http://localhost:26657'
// const qAddr = process.env.IMVERSED_QUERY_ADDR || 'http://localhost:1317'
// const mnemonic = 'select unhappy emotion sponsor color neither enjoy injury silly pattern lawn rhythm nominee route assist middle advance husband disease love trophy flash mimic execute'
// const address = 'imv1la7kfmwhm2z7q226zku3rlmcpxa5p6m3r9c6z7'
// const denom = process.env.IMVERSED_BASE_DENOM || 'aimv'
// const pubKey = process.env.IMVERSED_WALLET_PUBKEY || 'A0WJjUArjFrjIePaDZOEpIHSaiHj2Q54iic7+BJvjkxQ'
//


export { txAddr, qAddr, mnemonic, denom, pubKey, address }
