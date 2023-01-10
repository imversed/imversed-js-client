/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { smartContract } from "../infr/smartcontract";

export const protobufPackage = "imversed.infr";

export interface QuerySmartContractRequest {
  address: string;
}

export interface QuerySmartContractResponse {
  sc: smartContract | undefined;
}

const baseQuerySmartContractRequest: object = { address: "" };

export const QuerySmartContractRequest = {
  encode(
    message: QuerySmartContractRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySmartContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySmartContractRequest,
    } as QuerySmartContractRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySmartContractRequest {
    const message = {
      ...baseQuerySmartContractRequest,
    } as QuerySmartContractRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QuerySmartContractRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySmartContractRequest>
  ): QuerySmartContractRequest {
    const message = {
      ...baseQuerySmartContractRequest,
    } as QuerySmartContractRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQuerySmartContractResponse: object = {};

export const QuerySmartContractResponse = {
  encode(
    message: QuerySmartContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sc !== undefined) {
      smartContract.encode(message.sc, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySmartContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySmartContractResponse,
    } as QuerySmartContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sc = smartContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySmartContractResponse {
    const message = {
      ...baseQuerySmartContractResponse,
    } as QuerySmartContractResponse;
    if (object.sc !== undefined && object.sc !== null) {
      message.sc = smartContract.fromJSON(object.sc);
    } else {
      message.sc = undefined;
    }
    return message;
  },

  toJSON(message: QuerySmartContractResponse): unknown {
    const obj: any = {};
    message.sc !== undefined &&
      (obj.sc = message.sc ? smartContract.toJSON(message.sc) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySmartContractResponse>
  ): QuerySmartContractResponse {
    const message = {
      ...baseQuerySmartContractResponse,
    } as QuerySmartContractResponse;
    if (object.sc !== undefined && object.sc !== null) {
      message.sc = smartContract.fromPartial(object.sc);
    } else {
      message.sc = undefined;
    }
    return message;
  },
};

export interface Query {
  SmartContract(
    request: QuerySmartContractRequest
  ): Promise<QuerySmartContractResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SmartContract(
    request: QuerySmartContractRequest
  ): Promise<QuerySmartContractResponse> {
    const data = QuerySmartContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "imversed.infr.Query",
      "SmartContract",
      data
    );
    return promise.then((data) =>
      QuerySmartContractResponse.decode(new Reader(data))
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
