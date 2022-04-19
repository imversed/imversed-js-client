import { Reader, Writer } from "protobufjs/minimal";
import { PoolParams, PoolAsset } from "../../pools/v1beta1/pool";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "imversed.pools.v1beta1";
/** ===================== MsgCreatePool */
export interface MsgCreatePool {
    sender: string;
    poolParams: PoolParams | undefined;
    poolAssets: PoolAsset[];
}
export interface MsgCreatePoolResponse {
}
/** ===================== MsgJoinPool */
export interface MsgJoinPool {
    sender: string;
    poolId: number;
    shareOutAmount: string;
    tokenInMaxs: Coin[];
}
export interface MsgJoinPoolResponse {
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
    sender: string;
    poolId: number;
    shareInAmount: string;
    tokenOutMins: Coin[];
}
export interface MsgExitPoolResponse {
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRoute {
    poolId: number;
    tokenOutDenom: string;
}
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn: Coin | undefined;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInResponse {
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRoute {
    poolId: number;
    tokenInDenom: string;
}
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut: Coin | undefined;
}
export interface MsgSwapExactAmountOutResponse {
}
/** ===================== MsgJoinSwapExternAmountIn */
export interface MsgJoinSwapExternAmountIn {
    sender: string;
    poolId: number;
    tokenIn: Coin | undefined;
    shareOutMinAmount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
    sender: string;
    poolId: number;
    tokenInDenom: string;
    shareOutAmount: string;
    tokenInMaxAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
    sender: string;
    poolId: number;
    tokenOutDenom: string;
    shareInAmount: string;
    tokenOutMinAmount: string;
}
export interface MsgExitSwapShareAmountInResponse {
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
    sender: string;
    poolId: number;
    tokenOut: Coin | undefined;
    shareInMaxAmount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
}
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool;
    fromJSON(object: any): MsgCreatePool;
    toJSON(message: MsgCreatePool): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromJSON(_: any): MsgCreatePoolResponse;
    toJSON(_: MsgCreatePoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgJoinPool: {
    encode(message: MsgJoinPool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgJoinPool;
    fromJSON(object: any): MsgJoinPool;
    toJSON(message: MsgJoinPool): unknown;
    fromPartial(object: DeepPartial<MsgJoinPool>): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
    encode(_: MsgJoinPoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromJSON(_: any): MsgJoinPoolResponse;
    toJSON(_: MsgJoinPoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgJoinPoolResponse>): MsgJoinPoolResponse;
};
export declare const MsgExitPool: {
    encode(message: MsgExitPool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExitPool;
    fromJSON(object: any): MsgExitPool;
    toJSON(message: MsgExitPool): unknown;
    fromPartial(object: DeepPartial<MsgExitPool>): MsgExitPool;
};
export declare const MsgExitPoolResponse: {
    encode(_: MsgExitPoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExitPoolResponse;
    fromJSON(_: any): MsgExitPoolResponse;
    toJSON(_: MsgExitPoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgExitPoolResponse>): MsgExitPoolResponse;
};
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromJSON(object: any): SwapAmountInRoute;
    toJSON(message: SwapAmountInRoute): unknown;
    fromPartial(object: DeepPartial<SwapAmountInRoute>): SwapAmountInRoute;
};
export declare const MsgSwapExactAmountIn: {
    encode(message: MsgSwapExactAmountIn, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromJSON(object: any): MsgSwapExactAmountIn;
    toJSON(message: MsgSwapExactAmountIn): unknown;
    fromPartial(object: DeepPartial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
};
export declare const MsgSwapExactAmountInResponse: {
    encode(_: MsgSwapExactAmountInResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromJSON(_: any): MsgSwapExactAmountInResponse;
    toJSON(_: MsgSwapExactAmountInResponse): unknown;
    fromPartial(_: DeepPartial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
};
export declare const SwapAmountOutRoute: {
    encode(message: SwapAmountOutRoute, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromJSON(object: any): SwapAmountOutRoute;
    toJSON(message: SwapAmountOutRoute): unknown;
    fromPartial(object: DeepPartial<SwapAmountOutRoute>): SwapAmountOutRoute;
};
export declare const MsgSwapExactAmountOut: {
    encode(message: MsgSwapExactAmountOut, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromJSON(object: any): MsgSwapExactAmountOut;
    toJSON(message: MsgSwapExactAmountOut): unknown;
    fromPartial(object: DeepPartial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
};
export declare const MsgSwapExactAmountOutResponse: {
    encode(_: MsgSwapExactAmountOutResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromJSON(_: any): MsgSwapExactAmountOutResponse;
    toJSON(_: MsgSwapExactAmountOutResponse): unknown;
    fromPartial(_: DeepPartial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
};
export declare const MsgJoinSwapExternAmountIn: {
    encode(message: MsgJoinSwapExternAmountIn, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromJSON(object: any): MsgJoinSwapExternAmountIn;
    toJSON(message: MsgJoinSwapExternAmountIn): unknown;
    fromPartial(object: DeepPartial<MsgJoinSwapExternAmountIn>): MsgJoinSwapExternAmountIn;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    encode(_: MsgJoinSwapExternAmountInResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse;
    fromJSON(_: any): MsgJoinSwapExternAmountInResponse;
    toJSON(_: MsgJoinSwapExternAmountInResponse): unknown;
    fromPartial(_: DeepPartial<MsgJoinSwapExternAmountInResponse>): MsgJoinSwapExternAmountInResponse;
};
export declare const MsgJoinSwapShareAmountOut: {
    encode(message: MsgJoinSwapShareAmountOut, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromJSON(object: any): MsgJoinSwapShareAmountOut;
    toJSON(message: MsgJoinSwapShareAmountOut): unknown;
    fromPartial(object: DeepPartial<MsgJoinSwapShareAmountOut>): MsgJoinSwapShareAmountOut;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    encode(_: MsgJoinSwapShareAmountOutResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse;
    fromJSON(_: any): MsgJoinSwapShareAmountOutResponse;
    toJSON(_: MsgJoinSwapShareAmountOutResponse): unknown;
    fromPartial(_: DeepPartial<MsgJoinSwapShareAmountOutResponse>): MsgJoinSwapShareAmountOutResponse;
};
export declare const MsgExitSwapShareAmountIn: {
    encode(message: MsgExitSwapShareAmountIn, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromJSON(object: any): MsgExitSwapShareAmountIn;
    toJSON(message: MsgExitSwapShareAmountIn): unknown;
    fromPartial(object: DeepPartial<MsgExitSwapShareAmountIn>): MsgExitSwapShareAmountIn;
};
export declare const MsgExitSwapShareAmountInResponse: {
    encode(_: MsgExitSwapShareAmountInResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse;
    fromJSON(_: any): MsgExitSwapShareAmountInResponse;
    toJSON(_: MsgExitSwapShareAmountInResponse): unknown;
    fromPartial(_: DeepPartial<MsgExitSwapShareAmountInResponse>): MsgExitSwapShareAmountInResponse;
};
export declare const MsgExitSwapExternAmountOut: {
    encode(message: MsgExitSwapExternAmountOut, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromJSON(object: any): MsgExitSwapExternAmountOut;
    toJSON(message: MsgExitSwapExternAmountOut): unknown;
    fromPartial(object: DeepPartial<MsgExitSwapExternAmountOut>): MsgExitSwapExternAmountOut;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    encode(_: MsgExitSwapExternAmountOutResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse;
    fromJSON(_: any): MsgExitSwapExternAmountOutResponse;
    toJSON(_: MsgExitSwapExternAmountOutResponse): unknown;
    fromPartial(_: DeepPartial<MsgExitSwapExternAmountOutResponse>): MsgExitSwapExternAmountOutResponse;
};
export interface Msg {
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
    SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    JoinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
    JoinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
    ExitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
    ExitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
    SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    JoinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
    JoinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
    ExitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
    ExitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
