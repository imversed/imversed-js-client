/* eslint-disable */
import { TokenPair } from "../../erc20/v1/erc20";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "imversed.erc20.v1";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params: Params | undefined;
  /** registered token pairs */
  tokenPairs: TokenPair[];
}

/** Params defines the erc20 module params */
export interface Params {
  /** parameter to enable the intrarelaying of Cosmos coins <--> ERC20 tokens. */
  enableErc20: boolean;
  /**
   * parameter to enable the EVM hook to convert an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   */
  enableEvmHook: boolean;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenPairs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenPairs = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.tokenPairs !== undefined && object.tokenPairs !== null) {
      for (const e of object.tokenPairs) {
        message.tokenPairs.push(TokenPair.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenPairs) {
      obj.tokenPairs = message.tokenPairs.map((e) =>
        e ? TokenPair.toJSON(e) : undefined
      );
    } else {
      obj.tokenPairs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenPairs = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.tokenPairs !== undefined && object.tokenPairs !== null) {
      for (const e of object.tokenPairs) {
        message.tokenPairs.push(TokenPair.fromPartial(e));
      }
    }
    return message;
  },
};

const baseParams: object = { enableErc20: false, enableEvmHook: false };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.enableErc20 === true) {
      writer.uint32(8).bool(message.enableErc20);
    }
    if (message.enableEvmHook === true) {
      writer.uint32(16).bool(message.enableEvmHook);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableErc20 = reader.bool();
          break;
        case 2:
          message.enableEvmHook = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.enableErc20 !== undefined && object.enableErc20 !== null) {
      message.enableErc20 = Boolean(object.enableErc20);
    } else {
      message.enableErc20 = false;
    }
    if (object.enableEvmHook !== undefined && object.enableEvmHook !== null) {
      message.enableEvmHook = Boolean(object.enableEvmHook);
    } else {
      message.enableEvmHook = false;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableErc20 !== undefined &&
      (obj.enableErc20 = message.enableErc20);
    message.enableEvmHook !== undefined &&
      (obj.enableEvmHook = message.enableEvmHook);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.enableErc20 !== undefined && object.enableErc20 !== null) {
      message.enableErc20 = object.enableErc20;
    } else {
      message.enableErc20 = false;
    }
    if (object.enableEvmHook !== undefined && object.enableEvmHook !== null) {
      message.enableEvmHook = object.enableEvmHook;
    } else {
      message.enableEvmHook = false;
    }
    return message;
  },
};

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
