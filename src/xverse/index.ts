import { SigningStargateClient, AminoConverters, StdFee } from "@imversed/stargate"
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@imversed/proto-signing"
import { Api } from "./rest"
import { MsgAddAssetToVerse } from "./types/xverse/tx"
import { MsgDeauthorizeKeyToVerse } from "./types/xverse/tx"
import { MsgRenameVerse } from "./types/xverse/tx"
import { MsgAddOracleToVerse } from "./types/xverse/tx"
import { MsgCreateVerse } from "./types/xverse/tx"
import { MsgAuthorizeKeyToVerse } from "./types/xverse/tx"
import { MsgRemoveAssetFromVerse } from "./types/xverse/tx"
import { MsgUpdateVerseIcon } from "./types/xverse/tx"
import { MsgUpdateVerseDescription } from "./types/xverse/tx"
import { AminoMsg } from "@imversed/amino";

const types = [
  ["/imversed.xverse.MsgAddAssetToVerse", MsgAddAssetToVerse],
  ["/imversed.xverse.MsgDeauthorizeKeyToVerse", MsgDeauthorizeKeyToVerse],
  ["/imversed.xverse.MsgRenameVerse", MsgRenameVerse],
  ["/imversed.xverse.MsgAddOracleToVerse", MsgAddOracleToVerse],
  ["/imversed.xverse.MsgCreateVerse", MsgCreateVerse],
  ["/imversed.xverse.MsgAuthorizeKeyToVerse", MsgAuthorizeKeyToVerse],
  ["/imversed.xverse.MsgRemoveAssetFromVerse", MsgRemoveAssetFromVerse],
  ["/imversed.xverse.MsgUpdateVerseIcon", MsgUpdateVerseIcon],
  ["/imversed.xverse.MsgUpdateVerseDescription", MsgUpdateVerseDescription],

]
export const MissingWalletError = new Error("wallet is required")

export const registry = new Registry(types as any)

export interface AminoMsgAddAssetToVerse extends AminoMsg {
  readonly type: "imversed/MsgAddAssetToVerse";
  readonly value: {
    readonly sender: string,
    readonly verse_name: string,
    readonly asset_type: string,
    readonly asset_id: string,
    readonly asset_creator: string,
    readonly verse_creator: string,
  };
}

export function isAminoMsgSend(msg: AminoMsg): msg is AminoMsgAddAssetToVerse {
  return msg.type === "imversed/MsgAddAssetToVerse";
}

export function createXverseAminoConverters(): AminoConverters {
  return {
    "/imversed.xverse.MsgAddAssetToVerse": {
      aminoType: "imversed/MsgAddAssetToVerse",
      toAmino: ({ sender, verseName, assetType, assetId, assetCreator, verseCreator}: MsgAddAssetToVerse): AminoMsgAddAssetToVerse["value"] => ({
        sender: sender,
        verse_name: verseName,
        asset_type: assetType,
        asset_id: assetId,
        asset_creator: assetCreator,
        verse_creator: verseCreator,
      }),
      fromAmino: ({ sender, verse_name, asset_type, asset_id, asset_creator, verse_creator}: AminoMsgAddAssetToVerse["value"]): MsgAddAssetToVerse => ({
        sender: sender,
        verseName: verse_name,
        assetType: asset_type,
        assetId: asset_id,
        assetCreator: asset_creator,
        verseCreator: verse_creator,
      }),
    },
  };
}

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
    msgAddAssetToVerse: (data: MsgAddAssetToVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgAddAssetToVerse", value: MsgAddAssetToVerse.fromPartial( data ) }),
    msgDeauthorizeKeyToVerse: (data: MsgDeauthorizeKeyToVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgDeauthorizeKeyToVerse", value: MsgDeauthorizeKeyToVerse.fromPartial( data ) }),
    msgRenameVerse: (data: MsgRenameVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgRenameVerse", value: MsgRenameVerse.fromPartial( data ) }),
    msgAddOracleToVerse: (data: MsgAddOracleToVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgAddOracleToVerse", value: MsgAddOracleToVerse.fromPartial( data ) }),
    msgCreateVerse: (data: MsgCreateVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgCreateVerse", value: MsgCreateVerse.fromPartial( data ) }),
    msgAuthorizeKeyToVerse: (data: MsgAuthorizeKeyToVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgAuthorizeKeyToVerse", value: MsgAuthorizeKeyToVerse.fromPartial( data ) }),
    msgRemoveAssetFromVerse: (data: MsgRemoveAssetFromVerse): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgRemoveAssetFromVerse", value: MsgRemoveAssetFromVerse.fromPartial( data ) }),
    msgUpdateVerseIcon: (data: MsgUpdateVerseIcon): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgUpdateVerseIcon", value: MsgUpdateVerseIcon.fromPartial( data ) }),
    msgUpdateVerseDescription: (data: MsgUpdateVerseDescription): EncodeObject => ({ typeUrl: "/imversed.xverse.MsgUpdateVerseDescription", value: MsgUpdateVerseDescription.fromPartial( data ) }),

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
