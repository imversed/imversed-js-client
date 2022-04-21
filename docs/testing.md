## Prepare

Install dependecies by yarn:
```
yarn
```

Add `.env` to root project folder and put some vars like:
```
IMVERSED_TX_ADDR=http://127.0.0.1:26657
IMVERSED_QUERY_ADDR=http://127.0.0.1:1317
IMVERSED_WALLET_MNEMONIC=""
```
## Local Imversed

Install starport

Checkout from repo

Serve local

    starport chain serve --reset-once

Copy alice mnemonic to `.env` in `IMVERSED_WALLET_MNEMONIC` env var

Issue and mint `vmin` token

```
imversedd tx currency issue vmin "" --from $(imversedd keys show -a alice) --yes --fees 20000nimv
imversedd tx currency mint 100000000000vmin --from $(imversedd keys show -a alice) --yes --fees 1020000nimv --gas 10200000
imversedd q bank balances $(imversedd keys show -a alice)
```

## Run tests

```
yarn test
```