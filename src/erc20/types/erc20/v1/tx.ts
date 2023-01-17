/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Metadata } from "../../cosmos/bank/v1beta1/bank";

export const protobufPackage = "imversed.erc20.v1";

/** MsgConvertCoin defines a Msg to convert a Cosmos Coin to a ERC20 token */
export interface MsgConvertCoin {
  /**
   * Cosmos coin which denomination is registered on erc20 bridge.
   * The coin amount defines the total ERC20 tokens to convert.
   */
  coin: Coin | undefined;
  /** recipient hex address to receive ERC20 token */
  receiver: string;
  /** cosmos bech32 address from the owner of the given ERC20 tokens */
  sender: string;
}

/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {}

/** MsgConvertERC20 defines a Msg to convert an ERC20 token to a Cosmos SDK coin. */
export interface MsgConvertERC20 {
  /** ERC20 token contract address registered on erc20 bridge */
  contractAddress: string;
  /** amount of ERC20 tokens to mint */
  amount: string;
  /** bech32 address to receive SDK coins. */
  receiver: string;
  /** sender hex address from the owner of the given ERC20 tokens */
  sender: string;
}

/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {}

export interface MsgRegisterCoin {
  /** token pair of Cosmos native denom and ERC20 token address */
  metadata: Metadata | undefined;
  sender: string;
}

export interface MsgRegisterCoinResponse {}

/** Register Erc20 */
export interface MsgRegisterERC20 {
  erc20address: string;
  sender: string;
}

export interface MsgRegisterERC20Response {}

/** MsgUpdateTokenPairERC20Response updates ERC20 contract address. */
export interface MsgUpdateTokenPairERC20 {
  /** contract address of ERC20 token */
  erc20Address: string;
  /** new address of ERC20 token contract */
  newErc20Address: string;
  /** cosmos bech32 address from the owner of the given ERC20 tokens */
  sender: string;
}

/** MsgUpdateTokenPairERC20Response returns no fields */
export interface MsgUpdateTokenPairERC20Response {}

/** MsgToggleTokenRelay toggles the internal relaying of a token pair */
export interface MsgToggleTokenRelay {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
  /** cosmos bech32 address from the owner of the given ERC20 tokens */
  sender: string;
}

/** MsgToggleTokenRelayResponse returns no fields */
export interface MsgToggleTokenRelayResponse {}

const baseMsgConvertCoin: object = { receiver: "", sender: "" };

export const MsgConvertCoin = {
  encode(message: MsgConvertCoin, writer: Writer = Writer.create()): Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConvertCoin {
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromJSON(object.coin);
    } else {
      message.coin = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgConvertCoin): unknown {
    const obj: any = {};
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConvertCoin>): MsgConvertCoin {
    const message = { ...baseMsgConvertCoin } as MsgConvertCoin;
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    } else {
      message.coin = undefined;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgConvertCoinResponse: object = {};

export const MsgConvertCoinResponse = {
  encode(_: MsgConvertCoinResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgConvertCoinResponse {
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
    return message;
  },

  toJSON(_: MsgConvertCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = { ...baseMsgConvertCoinResponse } as MsgConvertCoinResponse;
    return message;
  },
};

const baseMsgConvertERC20: object = {
  contractAddress: "",
  amount: "",
  receiver: "",
  sender: "",
};

export const MsgConvertERC20 = {
  encode(message: MsgConvertERC20, writer: Writer = Writer.create()): Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConvertERC20 {
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgConvertERC20): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConvertERC20>): MsgConvertERC20 {
    const message = { ...baseMsgConvertERC20 } as MsgConvertERC20;
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgConvertERC20Response: object = {};

export const MsgConvertERC20Response = {
  encode(_: MsgConvertERC20Response, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgConvertERC20Response {
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
    return message;
  },

  toJSON(_: MsgConvertERC20Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConvertERC20Response>
  ): MsgConvertERC20Response {
    const message = {
      ...baseMsgConvertERC20Response,
    } as MsgConvertERC20Response;
    return message;
  },
};

const baseMsgRegisterCoin: object = { sender: "" };

export const MsgRegisterCoin = {
  encode(message: MsgRegisterCoin, writer: Writer = Writer.create()): Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterCoin } as MsgRegisterCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterCoin {
    const message = { ...baseMsgRegisterCoin } as MsgRegisterCoin;
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterCoin): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterCoin>): MsgRegisterCoin {
    const message = { ...baseMsgRegisterCoin } as MsgRegisterCoin;
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgRegisterCoinResponse: object = {};

export const MsgRegisterCoinResponse = {
  encode(_: MsgRegisterCoinResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterCoinResponse,
    } as MsgRegisterCoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterCoinResponse {
    const message = {
      ...baseMsgRegisterCoinResponse,
    } as MsgRegisterCoinResponse;
    return message;
  },

  toJSON(_: MsgRegisterCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterCoinResponse>
  ): MsgRegisterCoinResponse {
    const message = {
      ...baseMsgRegisterCoinResponse,
    } as MsgRegisterCoinResponse;
    return message;
  },
};

const baseMsgRegisterERC20: object = { erc20address: "", sender: "" };

export const MsgRegisterERC20 = {
  encode(message: MsgRegisterERC20, writer: Writer = Writer.create()): Writer {
    if (message.erc20address !== "") {
      writer.uint32(26).string(message.erc20address);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterERC20 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterERC20 } as MsgRegisterERC20;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.erc20address = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterERC20 {
    const message = { ...baseMsgRegisterERC20 } as MsgRegisterERC20;
    if (object.erc20address !== undefined && object.erc20address !== null) {
      message.erc20address = String(object.erc20address);
    } else {
      message.erc20address = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterERC20): unknown {
    const obj: any = {};
    message.erc20address !== undefined &&
      (obj.erc20address = message.erc20address);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterERC20>): MsgRegisterERC20 {
    const message = { ...baseMsgRegisterERC20 } as MsgRegisterERC20;
    if (object.erc20address !== undefined && object.erc20address !== null) {
      message.erc20address = object.erc20address;
    } else {
      message.erc20address = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgRegisterERC20Response: object = {};

export const MsgRegisterERC20Response = {
  encode(
    _: MsgRegisterERC20Response,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterERC20Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterERC20Response,
    } as MsgRegisterERC20Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterERC20Response {
    const message = {
      ...baseMsgRegisterERC20Response,
    } as MsgRegisterERC20Response;
    return message;
  },

  toJSON(_: MsgRegisterERC20Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterERC20Response>
  ): MsgRegisterERC20Response {
    const message = {
      ...baseMsgRegisterERC20Response,
    } as MsgRegisterERC20Response;
    return message;
  },
};

const baseMsgUpdateTokenPairERC20: object = {
  erc20Address: "",
  newErc20Address: "",
  sender: "",
};

export const MsgUpdateTokenPairERC20 = {
  encode(
    message: MsgUpdateTokenPairERC20,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.erc20Address !== "") {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.newErc20Address !== "") {
      writer.uint32(18).string(message.newErc20Address);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTokenPairERC20 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTokenPairERC20,
    } as MsgUpdateTokenPairERC20;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20Address = reader.string();
          break;
        case 2:
          message.newErc20Address = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTokenPairERC20 {
    const message = {
      ...baseMsgUpdateTokenPairERC20,
    } as MsgUpdateTokenPairERC20;
    if (object.erc20Address !== undefined && object.erc20Address !== null) {
      message.erc20Address = String(object.erc20Address);
    } else {
      message.erc20Address = "";
    }
    if (
      object.newErc20Address !== undefined &&
      object.newErc20Address !== null
    ) {
      message.newErc20Address = String(object.newErc20Address);
    } else {
      message.newErc20Address = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateTokenPairERC20): unknown {
    const obj: any = {};
    message.erc20Address !== undefined &&
      (obj.erc20Address = message.erc20Address);
    message.newErc20Address !== undefined &&
      (obj.newErc20Address = message.newErc20Address);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateTokenPairERC20>
  ): MsgUpdateTokenPairERC20 {
    const message = {
      ...baseMsgUpdateTokenPairERC20,
    } as MsgUpdateTokenPairERC20;
    if (object.erc20Address !== undefined && object.erc20Address !== null) {
      message.erc20Address = object.erc20Address;
    } else {
      message.erc20Address = "";
    }
    if (
      object.newErc20Address !== undefined &&
      object.newErc20Address !== null
    ) {
      message.newErc20Address = object.newErc20Address;
    } else {
      message.newErc20Address = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgUpdateTokenPairERC20Response: object = {};

export const MsgUpdateTokenPairERC20Response = {
  encode(
    _: MsgUpdateTokenPairERC20Response,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTokenPairERC20Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTokenPairERC20Response,
    } as MsgUpdateTokenPairERC20Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateTokenPairERC20Response {
    const message = {
      ...baseMsgUpdateTokenPairERC20Response,
    } as MsgUpdateTokenPairERC20Response;
    return message;
  },

  toJSON(_: MsgUpdateTokenPairERC20Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTokenPairERC20Response>
  ): MsgUpdateTokenPairERC20Response {
    const message = {
      ...baseMsgUpdateTokenPairERC20Response,
    } as MsgUpdateTokenPairERC20Response;
    return message;
  },
};

const baseMsgToggleTokenRelay: object = { token: "", sender: "" };

export const MsgToggleTokenRelay = {
  encode(
    message: MsgToggleTokenRelay,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgToggleTokenRelay {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgToggleTokenRelay } as MsgToggleTokenRelay;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgToggleTokenRelay {
    const message = { ...baseMsgToggleTokenRelay } as MsgToggleTokenRelay;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgToggleTokenRelay): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgToggleTokenRelay>): MsgToggleTokenRelay {
    const message = { ...baseMsgToggleTokenRelay } as MsgToggleTokenRelay;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgToggleTokenRelayResponse: object = {};

export const MsgToggleTokenRelayResponse = {
  encode(
    _: MsgToggleTokenRelayResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgToggleTokenRelayResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgToggleTokenRelayResponse,
    } as MsgToggleTokenRelayResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgToggleTokenRelayResponse {
    const message = {
      ...baseMsgToggleTokenRelayResponse,
    } as MsgToggleTokenRelayResponse;
    return message;
  },

  toJSON(_: MsgToggleTokenRelayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgToggleTokenRelayResponse>
  ): MsgToggleTokenRelayResponse {
    const message = {
      ...baseMsgToggleTokenRelayResponse,
    } as MsgToggleTokenRelayResponse;
    return message;
  },
};

/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * ConvertCoin mints a ERC20 representation of the SDK Coin denom that is
   * registered on the token mapping.
   */
  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
  /**
   * ConvertERC20 mints a Cosmos coin representation of the ERC20 token contract
   * that is registered on the token mapping.
   */
  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
  RegisterCoin(request: MsgRegisterCoin): Promise<MsgRegisterCoinResponse>;
  /** Register ERC20 */
  RegisterERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response>;
  /** Update token pair ERC@) */
  UpdateTokenPairERC20(
    request: MsgUpdateTokenPairERC20
  ): Promise<MsgUpdateTokenPairERC20Response>;
  /** Toggle the internal relaying of a token pair */
  ToggleTokenRelay(
    request: MsgToggleTokenRelay
  ): Promise<MsgToggleTokenRelayResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse> {
    const data = MsgConvertCoin.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.erc20.v1.Msg",
      "ConvertCoin",
      data
    );
    return promise.then((data) =>
      MsgConvertCoinResponse.decode(new Reader(data))
    );
  }

  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response> {
    const data = MsgConvertERC20.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.erc20.v1.Msg",
      "ConvertERC20",
      data
    );
    return promise.then((data) =>
      MsgConvertERC20Response.decode(new Reader(data))
    );
  }

  RegisterCoin(request: MsgRegisterCoin): Promise<MsgRegisterCoinResponse> {
    const data = MsgRegisterCoin.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.erc20.v1.Msg",
      "RegisterCoin",
      data
    );
    return promise.then((data) =>
      MsgRegisterCoinResponse.decode(new Reader(data))
    );
  }

  RegisterERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response> {
    const data = MsgRegisterERC20.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.erc20.v1.Msg",
      "RegisterERC20",
      data
    );
    return promise.then((data) =>
      MsgRegisterERC20Response.decode(new Reader(data))
    );
  }

  UpdateTokenPairERC20(
    request: MsgUpdateTokenPairERC20
  ): Promise<MsgUpdateTokenPairERC20Response> {
    const data = MsgUpdateTokenPairERC20.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.erc20.v1.Msg",
      "UpdateTokenPairERC20",
      data
    );
    return promise.then((data) =>
      MsgUpdateTokenPairERC20Response.decode(new Reader(data))
    );
  }

  ToggleTokenRelay(
    request: MsgToggleTokenRelay
  ): Promise<MsgToggleTokenRelayResponse> {
    const data = MsgToggleTokenRelay.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.erc20.v1.Msg",
      "ToggleTokenRelay",
      data
    );
    return promise.then((data) =>
      MsgToggleTokenRelayResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
