// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@imversed/stargate"
import { SigningStargateClient } from "@imversed/stargate"
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@imversed/proto-signing"
import { Api } from "./rest"
import { MsgSwapExactAmountOut } from "./types/pools/v1beta1/tx"
import { MsgJoinPool } from "./types/pools/v1beta1/tx"
import { MsgJoinSwapShareAmountOut } from "./types/pools/v1beta1/tx"
import { MsgSwapExactAmountIn } from "./types/pools/v1beta1/tx"
import { MsgExitSwapExternAmountOut } from "./types/pools/v1beta1/tx"
import { MsgExitPool } from "./types/pools/v1beta1/tx"
import { MsgCreatePool } from "./types/pools/v1beta1/tx"
import { MsgJoinSwapExternAmountIn } from "./types/pools/v1beta1/tx"
import { MsgExitSwapShareAmountIn } from "./types/pools/v1beta1/tx"

const types = [
  ["/imversed.pools.v1beta1.MsgSwapExactAmountOut", MsgSwapExactAmountOut],
  ["/imversed.pools.v1beta1.MsgJoinPool", MsgJoinPool],
  ["/imversed.pools.v1beta1.MsgJoinSwapShareAmountOut", MsgJoinSwapShareAmountOut],
  ["/imversed.pools.v1beta1.MsgSwapExactAmountIn", MsgSwapExactAmountIn],
  ["/imversed.pools.v1beta1.MsgExitSwapExternAmountOut", MsgExitSwapExternAmountOut],
  ["/imversed.pools.v1beta1.MsgExitPool", MsgExitPool],
  ["/imversed.pools.v1beta1.MsgCreatePool", MsgCreatePool],
  ["/imversed.pools.v1beta1.MsgJoinSwapExternAmountIn", MsgJoinSwapExternAmountIn],
  ["/imversed.pools.v1beta1.MsgExitSwapShareAmountIn", MsgExitSwapShareAmountIn],

]
export const MissingWalletError = new Error("wallet is required")

export const registry = new Registry(types as any)

const defaultFee = {
  amount: [],
  gas: "200000",
}

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError
  let client
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry })
  } else {
    client = await SigningStargateClient.offline( wallet, { registry })
  }
  const { address } = (await wallet.getAccounts())[0]

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee, memo),
    msgSwapExactAmountOut: (data: MsgSwapExactAmountOut): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgSwapExactAmountOut", value: MsgSwapExactAmountOut.fromPartial( data ) }),
    msgJoinPool: (data: MsgJoinPool): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgJoinPool", value: MsgJoinPool.fromPartial( data ) }),
    msgJoinSwapShareAmountOut: (data: MsgJoinSwapShareAmountOut): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgJoinSwapShareAmountOut", value: MsgJoinSwapShareAmountOut.fromPartial( data ) }),
    msgSwapExactAmountIn: (data: MsgSwapExactAmountIn): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgSwapExactAmountIn", value: MsgSwapExactAmountIn.fromPartial( data ) }),
    msgExitSwapExternAmountOut: (data: MsgExitSwapExternAmountOut): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgExitSwapExternAmountOut", value: MsgExitSwapExternAmountOut.fromPartial( data ) }),
    msgExitPool: (data: MsgExitPool): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgExitPool", value: MsgExitPool.fromPartial( data ) }),
    msgCreatePool: (data: MsgCreatePool): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgCreatePool", value: MsgCreatePool.fromPartial( data ) }),
    msgJoinSwapExternAmountIn: (data: MsgJoinSwapExternAmountIn): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgJoinSwapExternAmountIn", value: MsgJoinSwapExternAmountIn.fromPartial( data ) }),
    msgExitSwapShareAmountIn: (data: MsgExitSwapShareAmountIn): EncodeObject => ({ typeUrl: "/imversed.pools.v1beta1.MsgExitSwapShareAmountIn", value: MsgExitSwapShareAmountIn.fromPartial( data ) }),

  }
}

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr })
}

export {
  txClient,
  queryClient,
}
