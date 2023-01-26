/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "imversed.xverse";

/** Mapping verse/contract for tx permission checking */
export interface Contract {
  /** Contract address */
  hash: string;
  /** Verse name */
  verse: string;
}

const baseContract: object = { hash: "", verse: "" };

export const Contract = {
  encode(message: Contract, writer: Writer = Writer.create()): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.verse !== "") {
      writer.uint32(18).string(message.verse);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContract } as Contract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.verse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Contract {
    const message = { ...baseContract } as Contract;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.verse !== undefined && object.verse !== null) {
      message.verse = String(object.verse);
    } else {
      message.verse = "";
    }
    return message;
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.verse !== undefined && (obj.verse = message.verse);
    return obj;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = { ...baseContract } as Contract;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.verse !== undefined && object.verse !== null) {
      message.verse = object.verse;
    } else {
      message.verse = "";
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
