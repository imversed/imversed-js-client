/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Any } from "../../google/protobuf/any";
import { PageRequest, PageResponse, } from "../../cosmos/base/query/v1beta1/pagination";
import { PoolParams, PoolAsset } from "../../pools/v1beta1/pool";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountOutRoute } from "../../pools/v1beta1/tx";
export const protobufPackage = "imversed.pools.v1beta1";
const baseQueryPoolRequest = { poolId: 0 };
export const QueryPoolRequest = {
    encode(message, writer = Writer.create()) {
        if (message.poolId !== 0) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPoolRequest };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Number(object.poolId);
        }
        else {
            message.poolId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPoolRequest };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = 0;
        }
        return message;
    },
};
const baseQueryPoolResponse = {};
export const QueryPoolResponse = {
    encode(message, writer = Writer.create()) {
        if (message.pool !== undefined) {
            Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPoolResponse };
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Any.fromJSON(object.pool);
        }
        else {
            message.pool = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPoolResponse };
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Any.fromPartial(object.pool);
        }
        else {
            message.pool = undefined;
        }
        return message;
    },
};
const baseQueryPoolsRequest = {};
export const QueryPoolsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPoolsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPoolsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPoolsResponse = {};
export const QueryPoolsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.pools) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolsResponse };
        message.pools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(Any.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = { ...baseQueryPoolsResponse };
        message.pools = [];
        if (object.pools !== undefined && object.pools !== null) {
            for (const e of object.pools) {
                message.pools.push(Any.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? Any.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPoolsResponse };
        message.pools = [];
        if (object.pools !== undefined && object.pools !== null) {
            for (const e of object.pools) {
                message.pools.push(Any.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryNumPoolsRequest = {};
export const QueryNumPoolsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryNumPoolsRequest };
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
    fromJSON(_) {
        const message = { ...baseQueryNumPoolsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryNumPoolsRequest };
        return message;
    },
};
const baseQueryNumPoolsResponse = { numPools: 0 };
export const QueryNumPoolsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.numPools !== 0) {
            writer.uint32(8).uint64(message.numPools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryNumPoolsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numPools = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryNumPoolsResponse };
        if (object.numPools !== undefined && object.numPools !== null) {
            message.numPools = Number(object.numPools);
        }
        else {
            message.numPools = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.numPools !== undefined && (obj.numPools = message.numPools);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryNumPoolsResponse };
        if (object.numPools !== undefined && object.numPools !== null) {
            message.numPools = object.numPools;
        }
        else {
            message.numPools = 0;
        }
        return message;
    },
};
const baseQueryPoolParamsRequest = { poolId: 0 };
export const QueryPoolParamsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.poolId !== 0) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolParamsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPoolParamsRequest };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Number(object.poolId);
        }
        else {
            message.poolId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPoolParamsRequest };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = 0;
        }
        return message;
    },
};
const baseQueryPoolParamsResponse = {};
export const QueryPoolParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            PoolParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolParamsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = PoolParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolParamsResponse,
        };
        if (object.params !== undefined && object.params !== null) {
            message.params = PoolParams.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params
                ? PoolParams.toJSON(message.params)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolParamsResponse,
        };
        if (object.params !== undefined && object.params !== null) {
            message.params = PoolParams.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryTotalSharesRequest = { poolId: 0 };
export const QueryTotalSharesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.poolId !== 0) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryTotalSharesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryTotalSharesRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Number(object.poolId);
        }
        else {
            message.poolId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryTotalSharesRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = 0;
        }
        return message;
    },
};
const baseQueryTotalSharesResponse = {};
export const QueryTotalSharesResponse = {
    encode(message, writer = Writer.create()) {
        if (message.totalShares !== undefined) {
            Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryTotalSharesResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryTotalSharesResponse,
        };
        if (object.totalShares !== undefined && object.totalShares !== null) {
            message.totalShares = Coin.fromJSON(object.totalShares);
        }
        else {
            message.totalShares = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.totalShares !== undefined &&
            (obj.totalShares = message.totalShares
                ? Coin.toJSON(message.totalShares)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryTotalSharesResponse,
        };
        if (object.totalShares !== undefined && object.totalShares !== null) {
            message.totalShares = Coin.fromPartial(object.totalShares);
        }
        else {
            message.totalShares = undefined;
        }
        return message;
    },
};
const baseQueryPoolAssetsRequest = { poolId: 0 };
export const QueryPoolAssetsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.poolId !== 0) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolAssetsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPoolAssetsRequest };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Number(object.poolId);
        }
        else {
            message.poolId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPoolAssetsRequest };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = 0;
        }
        return message;
    },
};
const baseQueryPoolAssetsResponse = {};
export const QueryPoolAssetsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.poolAssets) {
            PoolAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolAssetsResponse,
        };
        message.poolAssets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolAssetsResponse,
        };
        message.poolAssets = [];
        if (object.poolAssets !== undefined && object.poolAssets !== null) {
            for (const e of object.poolAssets) {
                message.poolAssets.push(PoolAsset.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolAssets) {
            obj.poolAssets = message.poolAssets.map((e) => e ? PoolAsset.toJSON(e) : undefined);
        }
        else {
            obj.poolAssets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolAssetsResponse,
        };
        message.poolAssets = [];
        if (object.poolAssets !== undefined && object.poolAssets !== null) {
            for (const e of object.poolAssets) {
                message.poolAssets.push(PoolAsset.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQuerySpotPriceRequest = {
    poolId: 0,
    tokenInDenom: "",
    tokenOutDenom: "",
    withSwapFee: false,
};
export const QuerySpotPriceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.poolId !== 0) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(18).string(message.tokenInDenom);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.withSwapFee === true) {
            writer.uint32(32).bool(message.withSwapFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuerySpotPriceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.withSwapFee = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQuerySpotPriceRequest };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Number(object.poolId);
        }
        else {
            message.poolId = 0;
        }
        if (object.tokenInDenom !== undefined && object.tokenInDenom !== null) {
            message.tokenInDenom = String(object.tokenInDenom);
        }
        else {
            message.tokenInDenom = "";
        }
        if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
            message.tokenOutDenom = String(object.tokenOutDenom);
        }
        else {
            message.tokenOutDenom = "";
        }
        if (object.withSwapFee !== undefined && object.withSwapFee !== null) {
            message.withSwapFee = Boolean(object.withSwapFee);
        }
        else {
            message.withSwapFee = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.tokenInDenom !== undefined &&
            (obj.tokenInDenom = message.tokenInDenom);
        message.tokenOutDenom !== undefined &&
            (obj.tokenOutDenom = message.tokenOutDenom);
        message.withSwapFee !== undefined &&
            (obj.withSwapFee = message.withSwapFee);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQuerySpotPriceRequest };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = 0;
        }
        if (object.tokenInDenom !== undefined && object.tokenInDenom !== null) {
            message.tokenInDenom = object.tokenInDenom;
        }
        else {
            message.tokenInDenom = "";
        }
        if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
            message.tokenOutDenom = object.tokenOutDenom;
        }
        else {
            message.tokenOutDenom = "";
        }
        if (object.withSwapFee !== undefined && object.withSwapFee !== null) {
            message.withSwapFee = object.withSwapFee;
        }
        else {
            message.withSwapFee = false;
        }
        return message;
    },
};
const baseQuerySpotPriceResponse = { spotPrice: "" };
export const QuerySpotPriceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuerySpotPriceResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQuerySpotPriceResponse };
        if (object.spotPrice !== undefined && object.spotPrice !== null) {
            message.spotPrice = String(object.spotPrice);
        }
        else {
            message.spotPrice = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQuerySpotPriceResponse };
        if (object.spotPrice !== undefined && object.spotPrice !== null) {
            message.spotPrice = object.spotPrice;
        }
        else {
            message.spotPrice = "";
        }
        return message;
    },
};
const baseQuerySwapExactAmountInRequest = {
    sender: "",
    poolId: 0,
    tokenIn: "",
};
export const QuerySwapExactAmountInRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== 0) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(26).string(message.tokenIn);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySwapExactAmountInRequest,
        };
        message.routes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.tokenIn = reader.string();
                    break;
                case 4:
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQuerySwapExactAmountInRequest,
        };
        message.routes = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Number(object.poolId);
        }
        else {
            message.poolId = 0;
        }
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = String(object.tokenIn);
        }
        else {
            message.tokenIn = "";
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(SwapAmountInRoute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        if (message.routes) {
            obj.routes = message.routes.map((e) => e ? SwapAmountInRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySwapExactAmountInRequest,
        };
        message.routes = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = 0;
        }
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = object.tokenIn;
        }
        else {
            message.tokenIn = "";
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(SwapAmountInRoute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQuerySwapExactAmountInResponse = { tokenOutAmount: "" };
export const QuerySwapExactAmountInResponse = {
    encode(message, writer = Writer.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySwapExactAmountInResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQuerySwapExactAmountInResponse,
        };
        if (object.tokenOutAmount !== undefined && object.tokenOutAmount !== null) {
            message.tokenOutAmount = String(object.tokenOutAmount);
        }
        else {
            message.tokenOutAmount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tokenOutAmount !== undefined &&
            (obj.tokenOutAmount = message.tokenOutAmount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySwapExactAmountInResponse,
        };
        if (object.tokenOutAmount !== undefined && object.tokenOutAmount !== null) {
            message.tokenOutAmount = object.tokenOutAmount;
        }
        else {
            message.tokenOutAmount = "";
        }
        return message;
    },
};
const baseQuerySwapExactAmountOutRequest = {
    sender: "",
    poolId: 0,
    tokenOut: "",
};
export const QuerySwapExactAmountOutRequest = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== 0) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOut !== "") {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySwapExactAmountOutRequest,
        };
        message.routes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQuerySwapExactAmountOutRequest,
        };
        message.routes = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Number(object.poolId);
        }
        else {
            message.poolId = 0;
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(SwapAmountOutRoute.fromJSON(e));
            }
        }
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = String(object.tokenOut);
        }
        else {
            message.tokenOut = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        if (message.routes) {
            obj.routes = message.routes.map((e) => e ? SwapAmountOutRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySwapExactAmountOutRequest,
        };
        message.routes = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = 0;
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(SwapAmountOutRoute.fromPartial(e));
            }
        }
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = object.tokenOut;
        }
        else {
            message.tokenOut = "";
        }
        return message;
    },
};
const baseQuerySwapExactAmountOutResponse = { tokenInAmount: "" };
export const QuerySwapExactAmountOutResponse = {
    encode(message, writer = Writer.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySwapExactAmountOutResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQuerySwapExactAmountOutResponse,
        };
        if (object.tokenInAmount !== undefined && object.tokenInAmount !== null) {
            message.tokenInAmount = String(object.tokenInAmount);
        }
        else {
            message.tokenInAmount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tokenInAmount !== undefined &&
            (obj.tokenInAmount = message.tokenInAmount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySwapExactAmountOutResponse,
        };
        if (object.tokenInAmount !== undefined && object.tokenInAmount !== null) {
            message.tokenInAmount = object.tokenInAmount;
        }
        else {
            message.tokenInAmount = "";
        }
        return message;
    },
};
const baseQueryTotalLiquidityRequest = {};
export const QueryTotalLiquidityRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryTotalLiquidityRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryTotalLiquidityRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryTotalLiquidityRequest,
        };
        return message;
    },
};
const baseQueryTotalLiquidityResponse = {};
export const QueryTotalLiquidityResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.liquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryTotalLiquidityResponse,
        };
        message.liquidity = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryTotalLiquidityResponse,
        };
        message.liquidity = [];
        if (object.liquidity !== undefined && object.liquidity !== null) {
            for (const e of object.liquidity) {
                message.liquidity.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryTotalLiquidityResponse,
        };
        message.liquidity = [];
        if (object.liquidity !== undefined && object.liquidity !== null) {
            for (const e of object.liquidity) {
                message.liquidity.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Pools(request) {
        const data = QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "Pools", data);
        return promise.then((data) => QueryPoolsResponse.decode(new Reader(data)));
    }
    NumPools(request) {
        const data = QueryNumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "NumPools", data);
        return promise.then((data) => QueryNumPoolsResponse.decode(new Reader(data)));
    }
    TotalLiquidity(request) {
        const data = QueryTotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "TotalLiquidity", data);
        return promise.then((data) => QueryTotalLiquidityResponse.decode(new Reader(data)));
    }
    Pool(request) {
        const data = QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "Pool", data);
        return promise.then((data) => QueryPoolResponse.decode(new Reader(data)));
    }
    PoolParams(request) {
        const data = QueryPoolParamsRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "PoolParams", data);
        return promise.then((data) => QueryPoolParamsResponse.decode(new Reader(data)));
    }
    TotalShares(request) {
        const data = QueryTotalSharesRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "TotalShares", data);
        return promise.then((data) => QueryTotalSharesResponse.decode(new Reader(data)));
    }
    PoolAssets(request) {
        const data = QueryPoolAssetsRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "PoolAssets", data);
        return promise.then((data) => QueryPoolAssetsResponse.decode(new Reader(data)));
    }
    SpotPrice(request) {
        const data = QuerySpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "SpotPrice", data);
        return promise.then((data) => QuerySpotPriceResponse.decode(new Reader(data)));
    }
    EstimateSwapExactAmountIn(request) {
        const data = QuerySwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "EstimateSwapExactAmountIn", data);
        return promise.then((data) => QuerySwapExactAmountInResponse.decode(new Reader(data)));
    }
    EstimateSwapExactAmountOut(request) {
        const data = QuerySwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Query", "EstimateSwapExactAmountOut", data);
        return promise.then((data) => QuerySwapExactAmountOutResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
