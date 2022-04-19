/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
export const protobufPackage = "imversed.pools.v1beta1";
const baseParams = {};
export const Params = {
    encode(message, writer = Writer.create()) {
        for (const v of message.poolCreationFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        message.poolCreationFee = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        message.poolCreationFee = [];
        if (object.poolCreationFee !== undefined &&
            object.poolCreationFee !== null) {
            for (const e of object.poolCreationFee) {
                message.poolCreationFee.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolCreationFee) {
            obj.poolCreationFee = message.poolCreationFee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.poolCreationFee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        message.poolCreationFee = [];
        if (object.poolCreationFee !== undefined &&
            object.poolCreationFee !== null) {
            for (const e of object.poolCreationFee) {
                message.poolCreationFee.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseGenesisState = { nextPoolNumber: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.pools) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPoolNumber !== 0) {
            writer.uint32(16).uint64(message.nextPoolNumber);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.pools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPoolNumber = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.pools = [];
        if (object.pools !== undefined && object.pools !== null) {
            for (const e of object.pools) {
                message.pools.push(Any.fromJSON(e));
            }
        }
        if (object.nextPoolNumber !== undefined && object.nextPoolNumber !== null) {
            message.nextPoolNumber = Number(object.nextPoolNumber);
        }
        else {
            message.nextPoolNumber = 0;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
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
        message.nextPoolNumber !== undefined &&
            (obj.nextPoolNumber = message.nextPoolNumber);
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.pools = [];
        if (object.pools !== undefined && object.pools !== null) {
            for (const e of object.pools) {
                message.pools.push(Any.fromPartial(e));
            }
        }
        if (object.nextPoolNumber !== undefined && object.nextPoolNumber !== null) {
            message.nextPoolNumber = object.nextPoolNumber;
        }
        else {
            message.nextPoolNumber = 0;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
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
