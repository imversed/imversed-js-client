/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "imversed.xverse";

export interface Verse {
  owner: string;
  name: string;
  icon: string;
  description: string;
  smartContracts: string[];
  oracle: string;
  authenticatedKeys: string[];
}

const baseVerse: object = {
  owner: "",
  name: "",
  icon: "",
  description: "",
  smartContracts: "",
  oracle: "",
  authenticatedKeys: "",
};

export const Verse = {
  encode(message: Verse, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.icon !== "") {
      writer.uint32(26).string(message.icon);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.smartContracts) {
      writer.uint32(42).string(v!);
    }
    if (message.oracle !== "") {
      writer.uint32(50).string(message.oracle);
    }
    for (const v of message.authenticatedKeys) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Verse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVerse } as Verse;
    message.smartContracts = [];
    message.authenticatedKeys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.icon = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.smartContracts.push(reader.string());
          break;
        case 6:
          message.oracle = reader.string();
          break;
        case 7:
          message.authenticatedKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Verse {
    const message = { ...baseVerse } as Verse;
    message.smartContracts = [];
    message.authenticatedKeys = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.icon !== undefined && object.icon !== null) {
      message.icon = String(object.icon);
    } else {
      message.icon = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.smartContracts !== undefined && object.smartContracts !== null) {
      for (const e of object.smartContracts) {
        message.smartContracts.push(String(e));
      }
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = String(object.oracle);
    } else {
      message.oracle = "";
    }
    if (
      object.authenticatedKeys !== undefined &&
      object.authenticatedKeys !== null
    ) {
      for (const e of object.authenticatedKeys) {
        message.authenticatedKeys.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Verse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.icon !== undefined && (obj.icon = message.icon);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.smartContracts) {
      obj.smartContracts = message.smartContracts.map((e) => e);
    } else {
      obj.smartContracts = [];
    }
    message.oracle !== undefined && (obj.oracle = message.oracle);
    if (message.authenticatedKeys) {
      obj.authenticatedKeys = message.authenticatedKeys.map((e) => e);
    } else {
      obj.authenticatedKeys = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Verse>): Verse {
    const message = { ...baseVerse } as Verse;
    message.smartContracts = [];
    message.authenticatedKeys = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.icon !== undefined && object.icon !== null) {
      message.icon = object.icon;
    } else {
      message.icon = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.smartContracts !== undefined && object.smartContracts !== null) {
      for (const e of object.smartContracts) {
        message.smartContracts.push(e);
      }
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = object.oracle;
    } else {
      message.oracle = "";
    }
    if (
      object.authenticatedKeys !== undefined &&
      object.authenticatedKeys !== null
    ) {
      for (const e of object.authenticatedKeys) {
        message.authenticatedKeys.push(e);
      }
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
