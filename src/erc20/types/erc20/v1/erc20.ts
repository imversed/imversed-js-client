/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "imversed.erc20.v1";

/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - EXTERNAL erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;
    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}

export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";
    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";
    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";
    default:
      return "UNKNOWN";
  }
}

/**
 * TokenPair defines an instance that records pairing consisting of a Cosmos
 * native Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** address of ERC20 contract token */
  erc20Address: string;
  /** cosmos base denomination to be mapped to */
  denom: string;
  /** shows token mapping enable status */
  enabled: boolean;
  /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
  contractOwner: Owner;
  accountOwner: string;
}

const baseTokenPair: object = {
  erc20Address: "",
  denom: "",
  enabled: false,
  contractOwner: 0,
  accountOwner: "",
};

export const TokenPair = {
  encode(message: TokenPair, writer: Writer = Writer.create()): Writer {
    if (message.erc20Address !== "") {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.contractOwner !== 0) {
      writer.uint32(32).int32(message.contractOwner);
    }
    if (message.accountOwner !== "") {
      writer.uint32(42).string(message.accountOwner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenPair } as TokenPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20Address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.contractOwner = reader.int32() as any;
          break;
        case 5:
          message.accountOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenPair {
    const message = { ...baseTokenPair } as TokenPair;
    if (object.erc20Address !== undefined && object.erc20Address !== null) {
      message.erc20Address = String(object.erc20Address);
    } else {
      message.erc20Address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = ownerFromJSON(object.contractOwner);
    } else {
      message.contractOwner = 0;
    }
    if (object.accountOwner !== undefined && object.accountOwner !== null) {
      message.accountOwner = String(object.accountOwner);
    } else {
      message.accountOwner = "";
    }
    return message;
  },

  toJSON(message: TokenPair): unknown {
    const obj: any = {};
    message.erc20Address !== undefined &&
      (obj.erc20Address = message.erc20Address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.contractOwner !== undefined &&
      (obj.contractOwner = ownerToJSON(message.contractOwner));
    message.accountOwner !== undefined &&
      (obj.accountOwner = message.accountOwner);
    return obj;
  },

  fromPartial(object: DeepPartial<TokenPair>): TokenPair {
    const message = { ...baseTokenPair } as TokenPair;
    if (object.erc20Address !== undefined && object.erc20Address !== null) {
      message.erc20Address = object.erc20Address;
    } else {
      message.erc20Address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    } else {
      message.contractOwner = 0;
    }
    if (object.accountOwner !== undefined && object.accountOwner !== null) {
      message.accountOwner = object.accountOwner;
    } else {
      message.accountOwner = "";
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
