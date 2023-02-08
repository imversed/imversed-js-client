// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@imversed/stargate"
import { SigningStargateClient } from "@imversed/stargate"
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@imversed/proto-signing"
import { Api } from "./rest"
import { MsgConvertERC20 } from "./types/erc20/v1/tx"
import { MsgConvertCoin } from "./types/erc20/v1/tx"
import { MsgRegisterERC20 } from "./types/erc20/v1/tx"
import { MsgRegisterCoin } from "./types/erc20/v1/tx"
import { MsgUpdateTokenPairERC20 } from "./types/erc20/v1/tx"
import { MsgToggleTokenRelay } from "./types/erc20/v1/tx"

const types = [
  ["/imversed.erc20.v1.MsgConvertERC20", MsgConvertERC20],
  ["/imversed.erc20.v1.MsgConvertCoin", MsgConvertCoin],
  ["/imversed.erc20.v1.MsgRegisterERC20", MsgRegisterERC20],
  ["/imversed.erc20.v1.MsgRegisterCoin", MsgRegisterCoin],
  ["/imversed.erc20.v1.MsgUpdateTokenPairERC20", MsgUpdateTokenPairERC20],
  ["/imversed.erc20.v1.MsgToggleTokenRelay", MsgToggleTokenRelay],

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
    msgConvertERC20: (data: MsgConvertERC20): EncodeObject => ({ typeUrl: "/imversed.erc20.v1.MsgConvertERC20", value: MsgConvertERC20.fromPartial( data ) }),
    msgConvertCoin: (data: MsgConvertCoin): EncodeObject => ({ typeUrl: "/imversed.erc20.v1.MsgConvertCoin", value: MsgConvertCoin.fromPartial( data ) }),
    msgRegisterERC20: (data: MsgRegisterERC20): EncodeObject => ({ typeUrl: "/imversed.erc20.v1.MsgRegisterERC20", value: MsgRegisterERC20.fromPartial( data ) }),
    msgRegisterCoin: (data: MsgRegisterCoin): EncodeObject => ({ typeUrl: "/imversed.erc20.v1.MsgRegisterCoin", value: MsgRegisterCoin.fromPartial( data ) }),
    msgUpdateTokenPairERC20: (data: MsgUpdateTokenPairERC20): EncodeObject => ({ typeUrl: "/imversed.erc20.v1.MsgUpdateTokenPairERC20", value: MsgUpdateTokenPairERC20.fromPartial( data ) }),
    msgToggleTokenRelay: (data: MsgToggleTokenRelay): EncodeObject => ({ typeUrl: "/imversed.erc20.v1.MsgToggleTokenRelay", value: MsgToggleTokenRelay.fromPartial( data ) }),

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
