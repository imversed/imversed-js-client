/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Verse } from "../xverse/verse";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "../xverse/genesis";

export const protobufPackage = "imversed.xverse";

export interface QueryGetVerseRequest {
  verseName: string;
}

export interface QueryGetVerseResponse {
  verse: Verse | undefined;
}

export interface QueryAllVerseRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVerseResponse {
  verse: Verse[];
  pagination: PageResponse | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryHasAssetRequest {
  verseName: string;
  assetType: string;
  assetId: string;
}

export interface QueryHasAssetResponse {
  hasAsset: boolean;
}

export interface QueryGetVerseAssetsRequest {
  verseName: string;
}

export interface QueryGetVerseAssetsResponse {
  assets: string[];
}

export interface QueryGetVersesByOwnerRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  ownerAddress: string;
}

export interface QueryGetVersesByOwnerResponse {
  verses: Verse[];
  pagination: PageResponse | undefined;
}

const baseQueryGetVerseRequest: object = { verseName: "" };

export const QueryGetVerseRequest = {
  encode(
    message: QueryGetVerseRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verseName !== "") {
      writer.uint32(10).string(message.verseName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVerseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVerseRequest } as QueryGetVerseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verseName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVerseRequest {
    const message = { ...baseQueryGetVerseRequest } as QueryGetVerseRequest;
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = String(object.verseName);
    } else {
      message.verseName = "";
    }
    return message;
  },

  toJSON(message: QueryGetVerseRequest): unknown {
    const obj: any = {};
    message.verseName !== undefined && (obj.verseName = message.verseName);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVerseRequest>): QueryGetVerseRequest {
    const message = { ...baseQueryGetVerseRequest } as QueryGetVerseRequest;
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = object.verseName;
    } else {
      message.verseName = "";
    }
    return message;
  },
};

const baseQueryGetVerseResponse: object = {};

export const QueryGetVerseResponse = {
  encode(
    message: QueryGetVerseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verse !== undefined) {
      Verse.encode(message.verse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVerseResponse } as QueryGetVerseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verse = Verse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVerseResponse {
    const message = { ...baseQueryGetVerseResponse } as QueryGetVerseResponse;
    if (object.verse !== undefined && object.verse !== null) {
      message.verse = Verse.fromJSON(object.verse);
    } else {
      message.verse = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVerseResponse): unknown {
    const obj: any = {};
    message.verse !== undefined &&
      (obj.verse = message.verse ? Verse.toJSON(message.verse) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVerseResponse>
  ): QueryGetVerseResponse {
    const message = { ...baseQueryGetVerseResponse } as QueryGetVerseResponse;
    if (object.verse !== undefined && object.verse !== null) {
      message.verse = Verse.fromPartial(object.verse);
    } else {
      message.verse = undefined;
    }
    return message;
  },
};

const baseQueryAllVerseRequest: object = {};

export const QueryAllVerseRequest = {
  encode(
    message: QueryAllVerseRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVerseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVerseRequest } as QueryAllVerseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVerseRequest {
    const message = { ...baseQueryAllVerseRequest } as QueryAllVerseRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVerseRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVerseRequest>): QueryAllVerseRequest {
    const message = { ...baseQueryAllVerseRequest } as QueryAllVerseRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVerseResponse: object = {};

export const QueryAllVerseResponse = {
  encode(
    message: QueryAllVerseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.verse) {
      Verse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVerseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVerseResponse } as QueryAllVerseResponse;
    message.verse = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verse.push(Verse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVerseResponse {
    const message = { ...baseQueryAllVerseResponse } as QueryAllVerseResponse;
    message.verse = [];
    if (object.verse !== undefined && object.verse !== null) {
      for (const e of object.verse) {
        message.verse.push(Verse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVerseResponse): unknown {
    const obj: any = {};
    if (message.verse) {
      obj.verse = message.verse.map((e) => (e ? Verse.toJSON(e) : undefined));
    } else {
      obj.verse = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVerseResponse>
  ): QueryAllVerseResponse {
    const message = { ...baseQueryAllVerseResponse } as QueryAllVerseResponse;
    message.verse = [];
    if (object.verse !== undefined && object.verse !== null) {
      for (const e of object.verse) {
        message.verse.push(Verse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryHasAssetRequest: object = {
  verseName: "",
  assetType: "",
  assetId: "",
};

export const QueryHasAssetRequest = {
  encode(
    message: QueryHasAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verseName !== "") {
      writer.uint32(10).string(message.verseName);
    }
    if (message.assetType !== "") {
      writer.uint32(18).string(message.assetType);
    }
    if (message.assetId !== "") {
      writer.uint32(26).string(message.assetId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryHasAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryHasAssetRequest } as QueryHasAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verseName = reader.string();
          break;
        case 2:
          message.assetType = reader.string();
          break;
        case 3:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHasAssetRequest {
    const message = { ...baseQueryHasAssetRequest } as QueryHasAssetRequest;
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
    return message;
  },

  toJSON(message: QueryHasAssetRequest): unknown {
    const obj: any = {};
    message.verseName !== undefined && (obj.verseName = message.verseName);
    message.assetType !== undefined && (obj.assetType = message.assetType);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryHasAssetRequest>): QueryHasAssetRequest {
    const message = { ...baseQueryHasAssetRequest } as QueryHasAssetRequest;
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
    return message;
  },
};

const baseQueryHasAssetResponse: object = { hasAsset: false };

export const QueryHasAssetResponse = {
  encode(
    message: QueryHasAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hasAsset === true) {
      writer.uint32(8).bool(message.hasAsset);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryHasAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryHasAssetResponse } as QueryHasAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasAsset = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHasAssetResponse {
    const message = { ...baseQueryHasAssetResponse } as QueryHasAssetResponse;
    if (object.hasAsset !== undefined && object.hasAsset !== null) {
      message.hasAsset = Boolean(object.hasAsset);
    } else {
      message.hasAsset = false;
    }
    return message;
  },

  toJSON(message: QueryHasAssetResponse): unknown {
    const obj: any = {};
    message.hasAsset !== undefined && (obj.hasAsset = message.hasAsset);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHasAssetResponse>
  ): QueryHasAssetResponse {
    const message = { ...baseQueryHasAssetResponse } as QueryHasAssetResponse;
    if (object.hasAsset !== undefined && object.hasAsset !== null) {
      message.hasAsset = object.hasAsset;
    } else {
      message.hasAsset = false;
    }
    return message;
  },
};

const baseQueryGetVerseAssetsRequest: object = { verseName: "" };

export const QueryGetVerseAssetsRequest = {
  encode(
    message: QueryGetVerseAssetsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verseName !== "") {
      writer.uint32(10).string(message.verseName);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetVerseAssetsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVerseAssetsRequest,
    } as QueryGetVerseAssetsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verseName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVerseAssetsRequest {
    const message = {
      ...baseQueryGetVerseAssetsRequest,
    } as QueryGetVerseAssetsRequest;
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = String(object.verseName);
    } else {
      message.verseName = "";
    }
    return message;
  },

  toJSON(message: QueryGetVerseAssetsRequest): unknown {
    const obj: any = {};
    message.verseName !== undefined && (obj.verseName = message.verseName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVerseAssetsRequest>
  ): QueryGetVerseAssetsRequest {
    const message = {
      ...baseQueryGetVerseAssetsRequest,
    } as QueryGetVerseAssetsRequest;
    if (object.verseName !== undefined && object.verseName !== null) {
      message.verseName = object.verseName;
    } else {
      message.verseName = "";
    }
    return message;
  },
};

const baseQueryGetVerseAssetsResponse: object = { assets: "" };

export const QueryGetVerseAssetsResponse = {
  encode(
    message: QueryGetVerseAssetsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.assets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetVerseAssetsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVerseAssetsResponse,
    } as QueryGetVerseAssetsResponse;
    message.assets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVerseAssetsResponse {
    const message = {
      ...baseQueryGetVerseAssetsResponse,
    } as QueryGetVerseAssetsResponse;
    message.assets = [];
    if (object.assets !== undefined && object.assets !== null) {
      for (const e of object.assets) {
        message.assets.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetVerseAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => e);
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVerseAssetsResponse>
  ): QueryGetVerseAssetsResponse {
    const message = {
      ...baseQueryGetVerseAssetsResponse,
    } as QueryGetVerseAssetsResponse;
    message.assets = [];
    if (object.assets !== undefined && object.assets !== null) {
      for (const e of object.assets) {
        message.assets.push(e);
      }
    }
    return message;
  },
};

const baseQueryGetVersesByOwnerRequest: object = { ownerAddress: "" };

export const QueryGetVersesByOwnerRequest = {
  encode(
    message: QueryGetVersesByOwnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetVersesByOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVersesByOwnerRequest,
    } as QueryGetVersesByOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVersesByOwnerRequest {
    const message = {
      ...baseQueryGetVersesByOwnerRequest,
    } as QueryGetVersesByOwnerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    return message;
  },

  toJSON(message: QueryGetVersesByOwnerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVersesByOwnerRequest>
  ): QueryGetVersesByOwnerRequest {
    const message = {
      ...baseQueryGetVersesByOwnerRequest,
    } as QueryGetVersesByOwnerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    return message;
  },
};

const baseQueryGetVersesByOwnerResponse: object = {};

export const QueryGetVersesByOwnerResponse = {
  encode(
    message: QueryGetVersesByOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.verses) {
      Verse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetVersesByOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVersesByOwnerResponse,
    } as QueryGetVersesByOwnerResponse;
    message.verses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verses.push(Verse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVersesByOwnerResponse {
    const message = {
      ...baseQueryGetVersesByOwnerResponse,
    } as QueryGetVersesByOwnerResponse;
    message.verses = [];
    if (object.verses !== undefined && object.verses !== null) {
      for (const e of object.verses) {
        message.verses.push(Verse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVersesByOwnerResponse): unknown {
    const obj: any = {};
    if (message.verses) {
      obj.verses = message.verses.map((e) => (e ? Verse.toJSON(e) : undefined));
    } else {
      obj.verses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVersesByOwnerResponse>
  ): QueryGetVersesByOwnerResponse {
    const message = {
      ...baseQueryGetVersesByOwnerResponse,
    } as QueryGetVersesByOwnerResponse;
    message.verses = [];
    if (object.verses !== undefined && object.verses !== null) {
      for (const e of object.verses) {
        message.verses.push(Verse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a verse by index. */
  Verse(request: QueryGetVerseRequest): Promise<QueryGetVerseResponse>;
  /** Queries all verses. */
  VerseAll(request: QueryAllVerseRequest): Promise<QueryAllVerseResponse>;
  /** Queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  HasAsset(request: QueryHasAssetRequest): Promise<QueryHasAssetResponse>;
  GetAssets(
    request: QueryGetVerseAssetsRequest
  ): Promise<QueryGetVerseAssetsResponse>;
  VersesByOwner(
    request: QueryGetVersesByOwnerRequest
  ): Promise<QueryGetVersesByOwnerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Verse(request: QueryGetVerseRequest): Promise<QueryGetVerseResponse> {
    const data = QueryGetVerseRequest.encode(request).finish();
    const promise = this.rpc.request("imversed.xverse.Query", "Verse", data);
    return promise.then((data) =>
      QueryGetVerseResponse.decode(new Reader(data))
    );
  }

  VerseAll(request: QueryAllVerseRequest): Promise<QueryAllVerseResponse> {
    const data = QueryAllVerseRequest.encode(request).finish();
    const promise = this.rpc.request("imversed.xverse.Query", "VerseAll", data);
    return promise.then((data) =>
      QueryAllVerseResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("imversed.xverse.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  HasAsset(request: QueryHasAssetRequest): Promise<QueryHasAssetResponse> {
    const data = QueryHasAssetRequest.encode(request).finish();
    const promise = this.rpc.request("imversed.xverse.Query", "HasAsset", data);
    return promise.then((data) =>
      QueryHasAssetResponse.decode(new Reader(data))
    );
  }

  GetAssets(
    request: QueryGetVerseAssetsRequest
  ): Promise<QueryGetVerseAssetsResponse> {
    const data = QueryGetVerseAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Query",
      "GetAssets",
      data
    );
    return promise.then((data) =>
      QueryGetVerseAssetsResponse.decode(new Reader(data))
    );
  }

  VersesByOwner(
    request: QueryGetVersesByOwnerRequest
  ): Promise<QueryGetVersesByOwnerResponse> {
    const data = QueryGetVersesByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.xverse.Query",
      "VersesByOwner",
      data
    );
    return promise.then((data) =>
      QueryGetVersesByOwnerResponse.decode(new Reader(data))
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
