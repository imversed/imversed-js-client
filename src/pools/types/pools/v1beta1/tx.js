/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { PoolParams, PoolAsset } from "../../pools/v1beta1/pool";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const protobufPackage = "imversed.pools.v1beta1";
const baseMsgCreatePool = { sender: "" };
export const MsgCreatePool = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolParams !== undefined) {
            PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.poolAssets) {
            PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool };
        message.poolAssets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolParams = PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = { ...baseMsgCreatePool };
        message.poolAssets = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.poolParams !== undefined && object.poolParams !== null) {
            message.poolParams = PoolParams.fromJSON(object.poolParams);
        }
        else {
            message.poolParams = undefined;
        }
        if (object.poolAssets !== undefined && object.poolAssets !== null) {
            for (const e of object.poolAssets) {
                message.poolAssets.push(PoolAsset.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolParams !== undefined &&
            (obj.poolParams = message.poolParams
                ? PoolParams.toJSON(message.poolParams)
                : undefined);
        if (message.poolAssets) {
            obj.poolAssets = message.poolAssets.map((e) => e ? PoolAsset.toJSON(e) : undefined);
        }
        else {
            obj.poolAssets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool };
        message.poolAssets = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.poolParams !== undefined && object.poolParams !== null) {
            message.poolParams = PoolParams.fromPartial(object.poolParams);
        }
        else {
            message.poolParams = undefined;
        }
        if (object.poolAssets !== undefined && object.poolAssets !== null) {
            for (const e of object.poolAssets) {
                message.poolAssets.push(PoolAsset.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgCreatePoolResponse = {};
export const MsgCreatePoolResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePoolResponse };
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
        const message = { ...baseMsgCreatePoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePoolResponse };
        return message;
    },
};
const baseMsgJoinPool = { sender: "", poolId: 0, shareOutAmount: "" };
export const MsgJoinPool = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== 0) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(26).string(message.shareOutAmount);
        }
        for (const v of message.tokenInMaxs) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgJoinPool };
        message.tokenInMaxs = [];
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
                    message.shareOutAmount = reader.string();
                    break;
                case 4:
                    message.tokenInMaxs.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgJoinPool };
        message.tokenInMaxs = [];
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
        if (object.shareOutAmount !== undefined && object.shareOutAmount !== null) {
            message.shareOutAmount = String(object.shareOutAmount);
        }
        else {
            message.shareOutAmount = "";
        }
        if (object.tokenInMaxs !== undefined && object.tokenInMaxs !== null) {
            for (const e of object.tokenInMaxs) {
                message.tokenInMaxs.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.shareOutAmount !== undefined &&
            (obj.shareOutAmount = message.shareOutAmount);
        if (message.tokenInMaxs) {
            obj.tokenInMaxs = message.tokenInMaxs.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokenInMaxs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgJoinPool };
        message.tokenInMaxs = [];
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
        if (object.shareOutAmount !== undefined && object.shareOutAmount !== null) {
            message.shareOutAmount = object.shareOutAmount;
        }
        else {
            message.shareOutAmount = "";
        }
        if (object.tokenInMaxs !== undefined && object.tokenInMaxs !== null) {
            for (const e of object.tokenInMaxs) {
                message.tokenInMaxs.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgJoinPoolResponse = {};
export const MsgJoinPoolResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgJoinPoolResponse };
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
        const message = { ...baseMsgJoinPoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgJoinPoolResponse };
        return message;
    },
};
const baseMsgExitPool = { sender: "", poolId: 0, shareInAmount: "" };
export const MsgExitPool = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== 0) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(26).string(message.shareInAmount);
        }
        for (const v of message.tokenOutMins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExitPool };
        message.tokenOutMins = [];
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
                    message.shareInAmount = reader.string();
                    break;
                case 4:
                    message.tokenOutMins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgExitPool };
        message.tokenOutMins = [];
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
        if (object.shareInAmount !== undefined && object.shareInAmount !== null) {
            message.shareInAmount = String(object.shareInAmount);
        }
        else {
            message.shareInAmount = "";
        }
        if (object.tokenOutMins !== undefined && object.tokenOutMins !== null) {
            for (const e of object.tokenOutMins) {
                message.tokenOutMins.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.shareInAmount !== undefined &&
            (obj.shareInAmount = message.shareInAmount);
        if (message.tokenOutMins) {
            obj.tokenOutMins = message.tokenOutMins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokenOutMins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgExitPool };
        message.tokenOutMins = [];
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
        if (object.shareInAmount !== undefined && object.shareInAmount !== null) {
            message.shareInAmount = object.shareInAmount;
        }
        else {
            message.shareInAmount = "";
        }
        if (object.tokenOutMins !== undefined && object.tokenOutMins !== null) {
            for (const e of object.tokenOutMins) {
                message.tokenOutMins.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgExitPoolResponse = {};
export const MsgExitPoolResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExitPoolResponse };
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
        const message = { ...baseMsgExitPoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgExitPoolResponse };
        return message;
    },
};
const baseSwapAmountInRoute = { poolId: 0, tokenOutDenom: "" };
export const SwapAmountInRoute = {
    encode(message, writer = Writer.create()) {
        if (message.poolId !== 0) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSwapAmountInRoute };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.tokenOutDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSwapAmountInRoute };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Number(object.poolId);
        }
        else {
            message.poolId = 0;
        }
        if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
            message.tokenOutDenom = String(object.tokenOutDenom);
        }
        else {
            message.tokenOutDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.tokenOutDenom !== undefined &&
            (obj.tokenOutDenom = message.tokenOutDenom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSwapAmountInRoute };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = 0;
        }
        if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
            message.tokenOutDenom = object.tokenOutDenom;
        }
        else {
            message.tokenOutDenom = "";
        }
        return message;
    },
};
const baseMsgSwapExactAmountIn = { sender: "", tokenOutMinAmount: "" };
export const MsgSwapExactAmountIn = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenIn !== undefined) {
            Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSwapExactAmountIn };
        message.routes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenIn = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSwapExactAmountIn };
        message.routes = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(SwapAmountInRoute.fromJSON(e));
            }
        }
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = Coin.fromJSON(object.tokenIn);
        }
        else {
            message.tokenIn = undefined;
        }
        if (object.tokenOutMinAmount !== undefined &&
            object.tokenOutMinAmount !== null) {
            message.tokenOutMinAmount = String(object.tokenOutMinAmount);
        }
        else {
            message.tokenOutMinAmount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map((e) => e ? SwapAmountInRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.tokenIn !== undefined &&
            (obj.tokenIn = message.tokenIn
                ? Coin.toJSON(message.tokenIn)
                : undefined);
        message.tokenOutMinAmount !== undefined &&
            (obj.tokenOutMinAmount = message.tokenOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSwapExactAmountIn };
        message.routes = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(SwapAmountInRoute.fromPartial(e));
            }
        }
        if (object.tokenIn !== undefined && object.tokenIn !== null) {
            message.tokenIn = Coin.fromPartial(object.tokenIn);
        }
        else {
            message.tokenIn = undefined;
        }
        if (object.tokenOutMinAmount !== undefined &&
            object.tokenOutMinAmount !== null) {
            message.tokenOutMinAmount = object.tokenOutMinAmount;
        }
        else {
            message.tokenOutMinAmount = "";
        }
        return message;
    },
};
const baseMsgSwapExactAmountInResponse = {};
export const MsgSwapExactAmountInResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSwapExactAmountInResponse,
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
            ...baseMsgSwapExactAmountInResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSwapExactAmountInResponse,
        };
        return message;
    },
};
const baseSwapAmountOutRoute = { poolId: 0, tokenInDenom: "" };
export const SwapAmountOutRoute = {
    encode(message, writer = Writer.create()) {
        if (message.poolId !== 0) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(18).string(message.tokenInDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSwapAmountOutRoute };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSwapAmountOutRoute };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.tokenInDenom !== undefined &&
            (obj.tokenInDenom = message.tokenInDenom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSwapAmountOutRoute };
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
        return message;
    },
};
const baseMsgSwapExactAmountOut = { sender: "", tokenInMaxAmount: "" };
export const MsgSwapExactAmountOut = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(26).string(message.tokenInMaxAmount);
        }
        if (message.tokenOut !== undefined) {
            Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSwapExactAmountOut };
        message.routes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 4:
                    message.tokenOut = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSwapExactAmountOut };
        message.routes = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(SwapAmountOutRoute.fromJSON(e));
            }
        }
        if (object.tokenInMaxAmount !== undefined &&
            object.tokenInMaxAmount !== null) {
            message.tokenInMaxAmount = String(object.tokenInMaxAmount);
        }
        else {
            message.tokenInMaxAmount = "";
        }
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = Coin.fromJSON(object.tokenOut);
        }
        else {
            message.tokenOut = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map((e) => e ? SwapAmountOutRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.tokenInMaxAmount !== undefined &&
            (obj.tokenInMaxAmount = message.tokenInMaxAmount);
        message.tokenOut !== undefined &&
            (obj.tokenOut = message.tokenOut
                ? Coin.toJSON(message.tokenOut)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSwapExactAmountOut };
        message.routes = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(SwapAmountOutRoute.fromPartial(e));
            }
        }
        if (object.tokenInMaxAmount !== undefined &&
            object.tokenInMaxAmount !== null) {
            message.tokenInMaxAmount = object.tokenInMaxAmount;
        }
        else {
            message.tokenInMaxAmount = "";
        }
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = Coin.fromPartial(object.tokenOut);
        }
        else {
            message.tokenOut = undefined;
        }
        return message;
    },
};
const baseMsgSwapExactAmountOutResponse = {};
export const MsgSwapExactAmountOutResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSwapExactAmountOutResponse,
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
            ...baseMsgSwapExactAmountOutResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSwapExactAmountOutResponse,
        };
        return message;
    },
};
const baseMsgJoinSwapExternAmountIn = {
    sender: "",
    poolId: 0,
    shareOutMinAmount: "",
};
export const MsgJoinSwapExternAmountIn = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== 0) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== undefined) {
            Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareOutMinAmount !== "") {
            writer.uint32(34).string(message.shareOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgJoinSwapExternAmountIn,
        };
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
                    message.tokenIn = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareOutMinAmount = reader.string();
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
            ...baseMsgJoinSwapExternAmountIn,
        };
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
            message.tokenIn = Coin.fromJSON(object.tokenIn);
        }
        else {
            message.tokenIn = undefined;
        }
        if (object.shareOutMinAmount !== undefined &&
            object.shareOutMinAmount !== null) {
            message.shareOutMinAmount = String(object.shareOutMinAmount);
        }
        else {
            message.shareOutMinAmount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.tokenIn !== undefined &&
            (obj.tokenIn = message.tokenIn
                ? Coin.toJSON(message.tokenIn)
                : undefined);
        message.shareOutMinAmount !== undefined &&
            (obj.shareOutMinAmount = message.shareOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgJoinSwapExternAmountIn,
        };
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
            message.tokenIn = Coin.fromPartial(object.tokenIn);
        }
        else {
            message.tokenIn = undefined;
        }
        if (object.shareOutMinAmount !== undefined &&
            object.shareOutMinAmount !== null) {
            message.shareOutMinAmount = object.shareOutMinAmount;
        }
        else {
            message.shareOutMinAmount = "";
        }
        return message;
    },
};
const baseMsgJoinSwapExternAmountInResponse = {};
export const MsgJoinSwapExternAmountInResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgJoinSwapExternAmountInResponse,
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
            ...baseMsgJoinSwapExternAmountInResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgJoinSwapExternAmountInResponse,
        };
        return message;
    },
};
const baseMsgJoinSwapShareAmountOut = {
    sender: "",
    poolId: 0,
    tokenInDenom: "",
    shareOutAmount: "",
    tokenInMaxAmount: "",
};
export const MsgJoinSwapShareAmountOut = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== 0) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(34).string(message.shareOutAmount);
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(42).string(message.tokenInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgJoinSwapShareAmountOut,
        };
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
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.shareOutAmount = reader.string();
                    break;
                case 5:
                    message.tokenInMaxAmount = reader.string();
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
            ...baseMsgJoinSwapShareAmountOut,
        };
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
        if (object.tokenInDenom !== undefined && object.tokenInDenom !== null) {
            message.tokenInDenom = String(object.tokenInDenom);
        }
        else {
            message.tokenInDenom = "";
        }
        if (object.shareOutAmount !== undefined && object.shareOutAmount !== null) {
            message.shareOutAmount = String(object.shareOutAmount);
        }
        else {
            message.shareOutAmount = "";
        }
        if (object.tokenInMaxAmount !== undefined &&
            object.tokenInMaxAmount !== null) {
            message.tokenInMaxAmount = String(object.tokenInMaxAmount);
        }
        else {
            message.tokenInMaxAmount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.tokenInDenom !== undefined &&
            (obj.tokenInDenom = message.tokenInDenom);
        message.shareOutAmount !== undefined &&
            (obj.shareOutAmount = message.shareOutAmount);
        message.tokenInMaxAmount !== undefined &&
            (obj.tokenInMaxAmount = message.tokenInMaxAmount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgJoinSwapShareAmountOut,
        };
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
        if (object.tokenInDenom !== undefined && object.tokenInDenom !== null) {
            message.tokenInDenom = object.tokenInDenom;
        }
        else {
            message.tokenInDenom = "";
        }
        if (object.shareOutAmount !== undefined && object.shareOutAmount !== null) {
            message.shareOutAmount = object.shareOutAmount;
        }
        else {
            message.shareOutAmount = "";
        }
        if (object.tokenInMaxAmount !== undefined &&
            object.tokenInMaxAmount !== null) {
            message.tokenInMaxAmount = object.tokenInMaxAmount;
        }
        else {
            message.tokenInMaxAmount = "";
        }
        return message;
    },
};
const baseMsgJoinSwapShareAmountOutResponse = {};
export const MsgJoinSwapShareAmountOutResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgJoinSwapShareAmountOutResponse,
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
            ...baseMsgJoinSwapShareAmountOutResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgJoinSwapShareAmountOutResponse,
        };
        return message;
    },
};
const baseMsgExitSwapShareAmountIn = {
    sender: "",
    poolId: 0,
    tokenOutDenom: "",
    shareInAmount: "",
    tokenOutMinAmount: "",
};
export const MsgExitSwapShareAmountIn = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== 0) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(34).string(message.shareInAmount);
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(42).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExitSwapShareAmountIn,
        };
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
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.shareInAmount = reader.string();
                    break;
                case 5:
                    message.tokenOutMinAmount = reader.string();
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
            ...baseMsgExitSwapShareAmountIn,
        };
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
        if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
            message.tokenOutDenom = String(object.tokenOutDenom);
        }
        else {
            message.tokenOutDenom = "";
        }
        if (object.shareInAmount !== undefined && object.shareInAmount !== null) {
            message.shareInAmount = String(object.shareInAmount);
        }
        else {
            message.shareInAmount = "";
        }
        if (object.tokenOutMinAmount !== undefined &&
            object.tokenOutMinAmount !== null) {
            message.tokenOutMinAmount = String(object.tokenOutMinAmount);
        }
        else {
            message.tokenOutMinAmount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.tokenOutDenom !== undefined &&
            (obj.tokenOutDenom = message.tokenOutDenom);
        message.shareInAmount !== undefined &&
            (obj.shareInAmount = message.shareInAmount);
        message.tokenOutMinAmount !== undefined &&
            (obj.tokenOutMinAmount = message.tokenOutMinAmount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgExitSwapShareAmountIn,
        };
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
        if (object.tokenOutDenom !== undefined && object.tokenOutDenom !== null) {
            message.tokenOutDenom = object.tokenOutDenom;
        }
        else {
            message.tokenOutDenom = "";
        }
        if (object.shareInAmount !== undefined && object.shareInAmount !== null) {
            message.shareInAmount = object.shareInAmount;
        }
        else {
            message.shareInAmount = "";
        }
        if (object.tokenOutMinAmount !== undefined &&
            object.tokenOutMinAmount !== null) {
            message.tokenOutMinAmount = object.tokenOutMinAmount;
        }
        else {
            message.tokenOutMinAmount = "";
        }
        return message;
    },
};
const baseMsgExitSwapShareAmountInResponse = {};
export const MsgExitSwapShareAmountInResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExitSwapShareAmountInResponse,
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
            ...baseMsgExitSwapShareAmountInResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgExitSwapShareAmountInResponse,
        };
        return message;
    },
};
const baseMsgExitSwapExternAmountOut = {
    sender: "",
    poolId: 0,
    shareInMaxAmount: "",
};
export const MsgExitSwapExternAmountOut = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== 0) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOut !== undefined) {
            Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareInMaxAmount !== "") {
            writer.uint32(34).string(message.shareInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExitSwapExternAmountOut,
        };
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
                    message.tokenOut = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareInMaxAmount = reader.string();
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
            ...baseMsgExitSwapExternAmountOut,
        };
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
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = Coin.fromJSON(object.tokenOut);
        }
        else {
            message.tokenOut = undefined;
        }
        if (object.shareInMaxAmount !== undefined &&
            object.shareInMaxAmount !== null) {
            message.shareInMaxAmount = String(object.shareInMaxAmount);
        }
        else {
            message.shareInMaxAmount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.tokenOut !== undefined &&
            (obj.tokenOut = message.tokenOut
                ? Coin.toJSON(message.tokenOut)
                : undefined);
        message.shareInMaxAmount !== undefined &&
            (obj.shareInMaxAmount = message.shareInMaxAmount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgExitSwapExternAmountOut,
        };
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
        if (object.tokenOut !== undefined && object.tokenOut !== null) {
            message.tokenOut = Coin.fromPartial(object.tokenOut);
        }
        else {
            message.tokenOut = undefined;
        }
        if (object.shareInMaxAmount !== undefined &&
            object.shareInMaxAmount !== null) {
            message.shareInMaxAmount = object.shareInMaxAmount;
        }
        else {
            message.shareInMaxAmount = "";
        }
        return message;
    },
};
const baseMsgExitSwapExternAmountOutResponse = {};
export const MsgExitSwapExternAmountOutResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExitSwapExternAmountOutResponse,
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
            ...baseMsgExitSwapExternAmountOutResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgExitSwapExternAmountOutResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreatePool(request) {
        const data = MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "CreatePool", data);
        return promise.then((data) => MsgCreatePoolResponse.decode(new Reader(data)));
    }
    JoinPool(request) {
        const data = MsgJoinPool.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "JoinPool", data);
        return promise.then((data) => MsgJoinPoolResponse.decode(new Reader(data)));
    }
    ExitPool(request) {
        const data = MsgExitPool.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "ExitPool", data);
        return promise.then((data) => MsgExitPoolResponse.decode(new Reader(data)));
    }
    SwapExactAmountIn(request) {
        const data = MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "SwapExactAmountIn", data);
        return promise.then((data) => MsgSwapExactAmountInResponse.decode(new Reader(data)));
    }
    SwapExactAmountOut(request) {
        const data = MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "SwapExactAmountOut", data);
        return promise.then((data) => MsgSwapExactAmountOutResponse.decode(new Reader(data)));
    }
    JoinSwapExternAmountIn(request) {
        const data = MsgJoinSwapExternAmountIn.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "JoinSwapExternAmountIn", data);
        return promise.then((data) => MsgJoinSwapExternAmountInResponse.decode(new Reader(data)));
    }
    JoinSwapShareAmountOut(request) {
        const data = MsgJoinSwapShareAmountOut.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "JoinSwapShareAmountOut", data);
        return promise.then((data) => MsgJoinSwapShareAmountOutResponse.decode(new Reader(data)));
    }
    ExitSwapExternAmountOut(request) {
        const data = MsgExitSwapExternAmountOut.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "ExitSwapExternAmountOut", data);
        return promise.then((data) => MsgExitSwapExternAmountOutResponse.decode(new Reader(data)));
    }
    ExitSwapShareAmountIn(request) {
        const data = MsgExitSwapShareAmountIn.encode(request).finish();
        const promise = this.rpc.request("imversed.pools.v1beta1.Msg", "ExitSwapShareAmountIn", data);
        return promise.then((data) => MsgExitSwapShareAmountInResponse.decode(new Reader(data)));
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
