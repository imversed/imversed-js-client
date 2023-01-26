/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "imversed.xverse";

export interface MsgCreateVerse {
  sender: string;
  icon: string;
  description: string;
}

export interface MsgCreateVerseResponse {}

export interface MsgAddAssetToVerse {
  sender: string;
  verseName: string;
  assetType: string;
  assetId: string;
  assetCreator: string;
  verseCreator: string;
}

export interface MsgAddAssetToVerseResponse {}

export interface MsgRenameVerse {
  sender: string;
  verseCreator: string;
  verseOldName: string;
  verseNewName: string;
}

export interface MsgRenameVerseResponse {}

export interface MsgRemoveAssetFromVerse {
  sender: string;
  verseName: string;
  assetType: string;
  assetId: string;
  verseCreator: string;
}

export interface MsgRemoveAssetFromVerseResponse {}

export interface MsgAddOracleToVerse {
  sender: string;
  verseName: string;
  oracle: string;
}

export interface MsgAddOracleToVerseResponse {}

export interface MsgAuthorizeKeyToVerse {
  sender: string;
  verseName: string;
  address: string;
}

export interface MsgAuthorizeKeyToVerseResponse {}

export interface MsgDeauthorizeKeyToVerse {
  sender: string;
  verseName: string;
  address: string;
}

export interface MsgDeauthorizeKeyToVerseResponse {}

const baseMsgCreateVerse: object = { sender: "", icon: "", description: "" };

export const MsgCreateVerse = {
  encode(message: MsgCreateVerse, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.icon !== "") {
      writer.uint32(26).string(message.icon);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVerse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVerse } as MsgCreateVerse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.icon = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVerse {
    const message = { ...baseMsgCreateVerse } as MsgCreateVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
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
    return message;
  },

  toJSON(message: MsgCreateVerse): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.icon !== undefined && (obj.icon = message.icon);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVerse>): MsgCreateVerse {
    const message = { ...baseMsgCreateVerse } as MsgCreateVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
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
    return message;
  },
};

const baseMsgCreateVerseResponse: object = {};

export const MsgCreateVerseResponse = {
  encode(_: MsgCreateVerseResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVerseResponse } as MsgCreateVerseResponse;
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

  fromJSON(_: any): MsgCreateVerseResponse {
    const message = { ...baseMsgCreateVerseResponse } as MsgCreateVerseResponse;
    return message;
  },

  toJSON(_: MsgCreateVerseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateVerseResponse>): MsgCreateVerseResponse {
    const message = { ...baseMsgCreateVerseResponse } as MsgCreateVerseResponse;
    return message;
  },
};

const baseMsgAddAssetToVerse: object = {
  sender: "",
  verseName: "",
  assetType: "",
  assetId: "",
  assetCreator: "",
  verseCreator: "",
};

export const MsgAddAssetToVerse = {
  encode(
    message: MsgAddAssetToVerse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.verseName !== "") {
      writer.uint32(18).string(message.verseName);
    }
    if (message.assetType !== "") {
      writer.uint32(26).string(message.assetType);
    }
    if (message.assetId !== "") {
      writer.uint32(34).string(message.assetId);
    }
    if (message.assetCreator !== "") {
      writer.uint32(42).string(message.assetCreator);
    }
    if (message.verseCreator !== "") {
      writer.uint32(50).string(message.verseCreator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAssetToVerse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAssetToVerse } as MsgAddAssetToVerse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.verseName = reader.string();
          break;
        case 3:
          message.assetType = reader.string();
          break;
        case 4:
          message.assetId = reader.string();
          break;
        case 5:
          message.assetCreator = reader.string();
          break;
        case 6:
          message.verseCreator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAssetToVerse {
    const message = { ...baseMsgAddAssetToVerse } as MsgAddAssetToVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = String(object.verseName);
    } else {
      message.verseName = "";
    }
    if (object.assetType !== undefined && object.assetType !== null) {
      message.assetType = String(object.assetType);
    } else {
      message.assetType = "";
    }
    if (object.assetId !== undefined && object.assetId !== null) {
      message.assetId = String(object.assetId);
    } else {
      message.assetId = "";
    }
    if (object.assetCreator !== undefined && object.assetCreator !== null) {
      message.assetCreator = String(object.assetCreator);
    } else {
      message.assetCreator = "";
    }
    if (object.verseCreator !== undefined && object.verseCreator !== null) {
      message.verseCreator = String(object.verseCreator);
    } else {
      message.verseCreator = "";
    }
    return message;
  },

  toJSON(message: MsgAddAssetToVerse): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.verseName !== undefined && (obj.verseName = message.verseName);
    message.assetType !== undefined && (obj.assetType = message.assetType);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.assetCreator !== undefined &&
      (obj.assetCreator = message.assetCreator);
    message.verseCreator !== undefined &&
      (obj.verseCreator = message.verseCreator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAssetToVerse>): MsgAddAssetToVerse {
    const message = { ...baseMsgAddAssetToVerse } as MsgAddAssetToVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = object.verseName;
    } else {
      message.verseName = "";
    }
    if (object.assetType !== undefined && object.assetType !== null) {
      message.assetType = object.assetType;
    } else {
      message.assetType = "";
    }
    if (object.assetId !== undefined && object.assetId !== null) {
      message.assetId = object.assetId;
    } else {
      message.assetId = "";
    }
    if (object.assetCreator !== undefined && object.assetCreator !== null) {
      message.assetCreator = object.assetCreator;
    } else {
      message.assetCreator = "";
    }
    if (object.verseCreator !== undefined && object.verseCreator !== null) {
      message.verseCreator = object.verseCreator;
    } else {
      message.verseCreator = "";
    }
    return message;
  },
};

const baseMsgAddAssetToVerseResponse: object = {};

export const MsgAddAssetToVerseResponse = {
  encode(
    _: MsgAddAssetToVerseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddAssetToVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddAssetToVerseResponse,
    } as MsgAddAssetToVerseResponse;
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

  fromJSON(_: any): MsgAddAssetToVerseResponse {
    const message = {
      ...baseMsgAddAssetToVerseResponse,
    } as MsgAddAssetToVerseResponse;
    return message;
  },

  toJSON(_: MsgAddAssetToVerseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddAssetToVerseResponse>
  ): MsgAddAssetToVerseResponse {
    const message = {
      ...baseMsgAddAssetToVerseResponse,
    } as MsgAddAssetToVerseResponse;
    return message;
  },
};

const baseMsgRenameVerse: object = {
  sender: "",
  verseCreator: "",
  verseOldName: "",
  verseNewName: "",
};

export const MsgRenameVerse = {
  encode(message: MsgRenameVerse, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.verseCreator !== "") {
      writer.uint32(18).string(message.verseCreator);
    }
    if (message.verseOldName !== "") {
      writer.uint32(26).string(message.verseOldName);
    }
    if (message.verseNewName !== "") {
      writer.uint32(34).string(message.verseNewName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRenameVerse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRenameVerse } as MsgRenameVerse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.verseCreator = reader.string();
          break;
        case 3:
          message.verseOldName = reader.string();
          break;
        case 4:
          message.verseNewName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRenameVerse {
    const message = { ...baseMsgRenameVerse } as MsgRenameVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.verseCreator !== undefined && object.verseCreator !== null) {
      message.verseCreator = String(object.verseCreator);
    } else {
      message.verseCreator = "";
    }
    if (object.verseOldName !== undefined && object.verseOldName !== null) {
      message.verseOldName = String(object.verseOldName);
    } else {
      message.verseOldName = "";
    }
    if (object.verseNewName !== undefined && object.verseNewName !== null) {
      message.verseNewName = String(object.verseNewName);
    } else {
      message.verseNewName = "";
    }
    return message;
  },

  toJSON(message: MsgRenameVerse): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.verseCreator !== undefined &&
      (obj.verseCreator = message.verseCreator);
    message.verseOldName !== undefined &&
      (obj.verseOldName = message.verseOldName);
    message.verseNewName !== undefined &&
      (obj.verseNewName = message.verseNewName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRenameVerse>): MsgRenameVerse {
    const message = { ...baseMsgRenameVerse } as MsgRenameVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.verseCreator !== undefined && object.verseCreator !== null) {
      message.verseCreator = object.verseCreator;
    } else {
      message.verseCreator = "";
    }
    if (object.verseOldName !== undefined && object.verseOldName !== null) {
      message.verseOldName = object.verseOldName;
    } else {
      message.verseOldName = "";
    }
    if (object.verseNewName !== undefined && object.verseNewName !== null) {
      message.verseNewName = object.verseNewName;
    } else {
      message.verseNewName = "";
    }
    return message;
  },
};

const baseMsgRenameVerseResponse: object = {};

export const MsgRenameVerseResponse = {
  encode(_: MsgRenameVerseResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRenameVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRenameVerseResponse } as MsgRenameVerseResponse;
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

  fromJSON(_: any): MsgRenameVerseResponse {
    const message = { ...baseMsgRenameVerseResponse } as MsgRenameVerseResponse;
    return message;
  },

  toJSON(_: MsgRenameVerseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRenameVerseResponse>): MsgRenameVerseResponse {
    const message = { ...baseMsgRenameVerseResponse } as MsgRenameVerseResponse;
    return message;
  },
};

const baseMsgRemoveAssetFromVerse: object = {
  sender: "",
  verseName: "",
  assetType: "",
  assetId: "",
  verseCreator: "",
};

export const MsgRemoveAssetFromVerse = {
  encode(
    message: MsgRemoveAssetFromVerse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.verseName !== "") {
      writer.uint32(18).string(message.verseName);
    }
    if (message.assetType !== "") {
      writer.uint32(26).string(message.assetType);
    }
    if (message.assetId !== "") {
      writer.uint32(34).string(message.assetId);
    }
    if (message.verseCreator !== "") {
      writer.uint32(42).string(message.verseCreator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveAssetFromVerse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveAssetFromVerse,
    } as MsgRemoveAssetFromVerse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.verseName = reader.string();
          break;
        case 3:
          message.assetType = reader.string();
          break;
        case 4:
          message.assetId = reader.string();
          break;
        case 5:
          message.verseCreator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveAssetFromVerse {
    const message = {
      ...baseMsgRemoveAssetFromVerse,
    } as MsgRemoveAssetFromVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = String(object.verseName);
    } else {
      message.verseName = "";
    }
    if (object.assetType !== undefined && object.assetType !== null) {
      message.assetType = String(object.assetType);
    } else {
      message.assetType = "";
    }
    if (object.assetId !== undefined && object.assetId !== null) {
      message.assetId = String(object.assetId);
    } else {
      message.assetId = "";
    }
    if (object.verseCreator !== undefined && object.verseCreator !== null) {
      message.verseCreator = String(object.verseCreator);
    } else {
      message.verseCreator = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveAssetFromVerse): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.verseName !== undefined && (obj.verseName = message.verseName);
    message.assetType !== undefined && (obj.assetType = message.assetType);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.verseCreator !== undefined &&
      (obj.verseCreator = message.verseCreator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveAssetFromVerse>
  ): MsgRemoveAssetFromVerse {
    const message = {
      ...baseMsgRemoveAssetFromVerse,
    } as MsgRemoveAssetFromVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = object.verseName;
    } else {
      message.verseName = "";
    }
    if (object.assetType !== undefined && object.assetType !== null) {
      message.assetType = object.assetType;
    } else {
      message.assetType = "";
    }
    if (object.assetId !== undefined && object.assetId !== null) {
      message.assetId = object.assetId;
    } else {
      message.assetId = "";
    }
    if (object.verseCreator !== undefined && object.verseCreator !== null) {
      message.verseCreator = object.verseCreator;
    } else {
      message.verseCreator = "";
    }
    return message;
  },
};

const baseMsgRemoveAssetFromVerseResponse: object = {};

export const MsgRemoveAssetFromVerseResponse = {
  encode(
    _: MsgRemoveAssetFromVerseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRemoveAssetFromVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveAssetFromVerseResponse,
    } as MsgRemoveAssetFromVerseResponse;
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

  fromJSON(_: any): MsgRemoveAssetFromVerseResponse {
    const message = {
      ...baseMsgRemoveAssetFromVerseResponse,
    } as MsgRemoveAssetFromVerseResponse;
    return message;
  },

  toJSON(_: MsgRemoveAssetFromVerseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveAssetFromVerseResponse>
  ): MsgRemoveAssetFromVerseResponse {
    const message = {
      ...baseMsgRemoveAssetFromVerseResponse,
    } as MsgRemoveAssetFromVerseResponse;
    return message;
  },
};

const baseMsgAddOracleToVerse: object = {
  sender: "",
  verseName: "",
  oracle: "",
};

export const MsgAddOracleToVerse = {
  encode(
    message: MsgAddOracleToVerse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.verseName !== "") {
      writer.uint32(18).string(message.verseName);
    }
    if (message.oracle !== "") {
      writer.uint32(26).string(message.oracle);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddOracleToVerse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddOracleToVerse } as MsgAddOracleToVerse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.verseName = reader.string();
          break;
        case 3:
          message.oracle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddOracleToVerse {
    const message = { ...baseMsgAddOracleToVerse } as MsgAddOracleToVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = String(object.verseName);
    } else {
      message.verseName = "";
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = String(object.oracle);
    } else {
      message.oracle = "";
    }
    return message;
  },

  toJSON(message: MsgAddOracleToVerse): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.verseName !== undefined && (obj.verseName = message.verseName);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddOracleToVerse>): MsgAddOracleToVerse {
    const message = { ...baseMsgAddOracleToVerse } as MsgAddOracleToVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = object.verseName;
    } else {
      message.verseName = "";
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = object.oracle;
    } else {
      message.oracle = "";
    }
    return message;
  },
};

const baseMsgAddOracleToVerseResponse: object = {};

export const MsgAddOracleToVerseResponse = {
  encode(
    _: MsgAddOracleToVerseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddOracleToVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddOracleToVerseResponse,
    } as MsgAddOracleToVerseResponse;
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

  fromJSON(_: any): MsgAddOracleToVerseResponse {
    const message = {
      ...baseMsgAddOracleToVerseResponse,
    } as MsgAddOracleToVerseResponse;
    return message;
  },

  toJSON(_: MsgAddOracleToVerseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddOracleToVerseResponse>
  ): MsgAddOracleToVerseResponse {
    const message = {
      ...baseMsgAddOracleToVerseResponse,
    } as MsgAddOracleToVerseResponse;
    return message;
  },
};

const baseMsgAuthorizeKeyToVerse: object = {
  sender: "",
  verseName: "",
  address: "",
};

export const MsgAuthorizeKeyToVerse = {
  encode(
    message: MsgAuthorizeKeyToVerse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.verseName !== "") {
      writer.uint32(18).string(message.verseName);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAuthorizeKeyToVerse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAuthorizeKeyToVerse } as MsgAuthorizeKeyToVerse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.verseName = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeKeyToVerse {
    const message = { ...baseMsgAuthorizeKeyToVerse } as MsgAuthorizeKeyToVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = String(object.verseName);
    } else {
      message.verseName = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgAuthorizeKeyToVerse): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.verseName !== undefined && (obj.verseName = message.verseName);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAuthorizeKeyToVerse>
  ): MsgAuthorizeKeyToVerse {
    const message = { ...baseMsgAuthorizeKeyToVerse } as MsgAuthorizeKeyToVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = object.verseName;
    } else {
      message.verseName = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgAuthorizeKeyToVerseResponse: object = {};

export const MsgAuthorizeKeyToVerseResponse = {
  encode(
    _: MsgAuthorizeKeyToVerseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAuthorizeKeyToVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAuthorizeKeyToVerseResponse,
    } as MsgAuthorizeKeyToVerseResponse;
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

  fromJSON(_: any): MsgAuthorizeKeyToVerseResponse {
    const message = {
      ...baseMsgAuthorizeKeyToVerseResponse,
    } as MsgAuthorizeKeyToVerseResponse;
    return message;
  },

  toJSON(_: MsgAuthorizeKeyToVerseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAuthorizeKeyToVerseResponse>
  ): MsgAuthorizeKeyToVerseResponse {
    const message = {
      ...baseMsgAuthorizeKeyToVerseResponse,
    } as MsgAuthorizeKeyToVerseResponse;
    return message;
  },
};

const baseMsgDeauthorizeKeyToVerse: object = {
  sender: "",
  verseName: "",
  address: "",
};

export const MsgDeauthorizeKeyToVerse = {
  encode(
    message: MsgDeauthorizeKeyToVerse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.verseName !== "") {
      writer.uint32(18).string(message.verseName);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeauthorizeKeyToVerse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeauthorizeKeyToVerse,
    } as MsgDeauthorizeKeyToVerse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.verseName = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeauthorizeKeyToVerse {
    const message = {
      ...baseMsgDeauthorizeKeyToVerse,
    } as MsgDeauthorizeKeyToVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = String(object.verseName);
    } else {
      message.verseName = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgDeauthorizeKeyToVerse): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.verseName !== undefined && (obj.verseName = message.verseName);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeauthorizeKeyToVerse>
  ): MsgDeauthorizeKeyToVerse {
    const message = {
      ...baseMsgDeauthorizeKeyToVerse,
    } as MsgDeauthorizeKeyToVerse;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = object.verseName;
    } else {
      message.verseName = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgDeauthorizeKeyToVerseResponse: object = {};

export const MsgDeauthorizeKeyToVerseResponse = {
  encode(
    _: MsgDeauthorizeKeyToVerseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeauthorizeKeyToVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeauthorizeKeyToVerseResponse,
    } as MsgDeauthorizeKeyToVerseResponse;
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

  fromJSON(_: any): MsgDeauthorizeKeyToVerseResponse {
    const message = {
      ...baseMsgDeauthorizeKeyToVerseResponse,
    } as MsgDeauthorizeKeyToVerseResponse;
    return message;
  },

  toJSON(_: MsgDeauthorizeKeyToVerseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeauthorizeKeyToVerseResponse>
  ): MsgDeauthorizeKeyToVerseResponse {
    const message = {
      ...baseMsgDeauthorizeKeyToVerseResponse,
    } as MsgDeauthorizeKeyToVerseResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateVerse(request: MsgCreateVerse): Promise<MsgCreateVerseResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AddAssetToVerse(
    request: MsgAddAssetToVerse
  ): Promise<MsgAddAssetToVerseResponse>;
  RemoveAssetFromVerse(
    request: MsgRemoveAssetFromVerse
  ): Promise<MsgRemoveAssetFromVerseResponse>;
  RenameVerse(request: MsgRenameVerse): Promise<MsgRenameVerseResponse>;
  AddOracleToVerse(
    request: MsgAddOracleToVerse
  ): Promise<MsgAddOracleToVerseResponse>;
  AuthorizeKeyToVerse(
    request: MsgAuthorizeKeyToVerse
  ): Promise<MsgAuthorizeKeyToVerseResponse>;
  DeauthorizeKeyToVerse(
    request: MsgDeauthorizeKeyToVerse
  ): Promise<MsgDeauthorizeKeyToVerseResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateVerse(request: MsgCreateVerse): Promise<MsgCreateVerseResponse> {
    const data = MsgCreateVerse.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Msg",
      "CreateVerse",
      data
    );
    return promise.then((data) =>
      MsgCreateVerseResponse.decode(new Reader(data))
    );
  }

  AddAssetToVerse(
    request: MsgAddAssetToVerse
  ): Promise<MsgAddAssetToVerseResponse> {
    const data = MsgAddAssetToVerse.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Msg",
      "AddAssetToVerse",
      data
    );
    return promise.then((data) =>
      MsgAddAssetToVerseResponse.decode(new Reader(data))
    );
  }

  RemoveAssetFromVerse(
    request: MsgRemoveAssetFromVerse
  ): Promise<MsgRemoveAssetFromVerseResponse> {
    const data = MsgRemoveAssetFromVerse.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Msg",
      "RemoveAssetFromVerse",
      data
    );
    return promise.then((data) =>
      MsgRemoveAssetFromVerseResponse.decode(new Reader(data))
    );
  }

  RenameVerse(request: MsgRenameVerse): Promise<MsgRenameVerseResponse> {
    const data = MsgRenameVerse.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Msg",
      "RenameVerse",
      data
    );
    return promise.then((data) =>
      MsgRenameVerseResponse.decode(new Reader(data))
    );
  }

  AddOracleToVerse(
    request: MsgAddOracleToVerse
  ): Promise<MsgAddOracleToVerseResponse> {
    const data = MsgAddOracleToVerse.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Msg",
      "AddOracleToVerse",
      data
    );
    return promise.then((data) =>
      MsgAddOracleToVerseResponse.decode(new Reader(data))
    );
  }

  AuthorizeKeyToVerse(
    request: MsgAuthorizeKeyToVerse
  ): Promise<MsgAuthorizeKeyToVerseResponse> {
    const data = MsgAuthorizeKeyToVerse.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Msg",
      "AuthorizeKeyToVerse",
      data
    );
    return promise.then((data) =>
      MsgAuthorizeKeyToVerseResponse.decode(new Reader(data))
    );
  }

  DeauthorizeKeyToVerse(
    request: MsgDeauthorizeKeyToVerse
  ): Promise<MsgDeauthorizeKeyToVerseResponse> {
    const data = MsgDeauthorizeKeyToVerse.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Msg",
      "DeauthorizeKeyToVerse",
      data
    );
    return promise.then((data) =>
      MsgDeauthorizeKeyToVerseResponse.decode(new Reader(data))
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
