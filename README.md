# imversed-js-client

Javascript and Typescript client library for [Inversed](https://imversed.com).

# Usage

Add package with a preferred package manager. For example:

    yarn add @imversed/js-client

Use queries for retrieving data from imversed:
```ts
import { nft } from '@imversed/js-client'
import { NftBaseNFT } from '@imversed/js-client/lib/nft/rest'

const { queryClient } = nft

async function getNft(denomId: string, nftId: string): Promise<NftBaseNFT> {
    const q = await queryClient({ addr: 'https://query-endpoint-test.imversed.com '})

    const res = await q.queryNft(denomId, nftId)

    return res.data.nft
}
```

Use transactions (TXs) to put some data in Inmversed:

```ts
import { loadWallet, nft } from '@imversed/js-client'

const { txClient } = nft

const mnemonic = "proof fish fun burden differ screen miss vanish three report stereo bamboo purpose doll random blur prepare attack gallery lawn raven glove quantum blade"

async function mintNFT(denomId: string, nftId: string, name: string, uri: string, data: any) {
    const wallet = await loadWallet(mnemonic)
    const [account] = await wallet.getAccounts()
    const tx = await txClient(wallet, { addr: 'https://tx-endpoint-test.imversed.com'})

    const msg = tx.msgMintNFT({
        id: nftId,
        denomId,
        name,
        uri,
        data,
        sender: account.address,
        recipient: account.address
    })

    return tx.signAndBroadcast([msg], {
        fee: {
            amount: [{
                amount: '200',
                denom: 'nimv'
            }],
            gas: '200000'
        }
    })
}
```
