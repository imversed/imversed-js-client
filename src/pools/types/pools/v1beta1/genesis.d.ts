import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
export declare const protobufPackage = "imversed.pools.v1beta1";
/** Params holds parameters for the incentives module */
export interface Params {
    poolCreationFee: Coin[];
}
/** GenesisState defines the pools module's genesis state. */
export interface GenesisState {
    pools: Any[];
    nextPoolNumber: number;
    params: Params | undefined;
}
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
