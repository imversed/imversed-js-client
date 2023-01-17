// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@imversed/stargate"
import { SigningStargateClient } from "@imversed/stargate"
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@imversed/proto-signing"
import { Api } from "./rest"
import { MsgRenameVerse } from "./types/xverse/tx"
import { MsgRemoveAssetFromVerse } from "./types/xverse/tx"
import { MsgAddAssetToVerse } from "./types/xverse/tx"
import { MsgCreateVerse } from "./types/xverse/tx"

const types = [
  ["/imversed.xverse.MsgRenameVerse", MsgRenameVerse],
  ["/imversed.xverse.MsgRemoveAssetFromVerse", MsgRemoveAssetFromVerse],
  ["/imversed.xverse.MsgAddAssetToVerse", MsgAddAssetToVerse],
  ["/imversed.xverse.MsgCreateVerse", MsgCreateVerse],

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
    msgRenameVerse: (data: MsgRenameVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgRenameVerse", value: MsgRenameVerse.fromPartial( data ) }),
    msgRemoveAssetFromVerse: (data: MsgRemoveAssetFromVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgRemoveAssetFromVerse", value: MsgRemoveAssetFromVerse.fromPartial( data ) }),
    msgAddAssetToVerse: (data: MsgAddAssetToVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgAddAssetToVerse", value: MsgAddAssetToVerse.fromPartial( data ) }),
    msgCreateVerse: (data: MsgCreateVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgCreateVerse", value: MsgCreateVerse.fromPartial( data ) }),

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
