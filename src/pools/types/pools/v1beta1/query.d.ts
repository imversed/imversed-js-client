import { Reader, Writer } from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { PoolParams, PoolAsset } from "../../pools/v1beta1/pool";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountOutRoute } from "../../pools/v1beta1/tx";
export declare const protobufPackage = "imversed.pools.v1beta1";
/** =============================== Pool */
export interface QueryPoolRequest {
    poolId: number;
}
export interface QueryPoolResponse {
    pool: Any | undefined;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
export interface QueryPoolsResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {
}
export interface QueryNumPoolsResponse {
    numPools: number;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: number;
}
export interface QueryPoolParamsResponse {
    params: PoolParams | undefined;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
    poolId: number;
}
export interface QueryTotalSharesResponse {
    totalShares: Coin | undefined;
}
/** =============================== PoolAssets */
export interface QueryPoolAssetsRequest {
    poolId: number;
}
export interface QueryPoolAssetsResponse {
    poolAssets: PoolAsset[];
}
/** =============================== SpotPrice */
export interface QuerySpotPriceRequest {
    poolId: number;
    tokenInDenom: string;
    tokenOutDenom: string;
    withSwapFee: boolean;
}
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
    sender: string;
    poolId: number;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
    sender: string;
    poolId: number;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface QueryTotalLiquidityRequest {
}
export interface QueryTotalLiquidityResponse {
    liquidity: Coin[];
}
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse;
};
export declare const QueryNumPoolsRequest: {
    encode(_: QueryNumPoolsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryNumPoolsRequest;
    fromJSON(_: any): QueryNumPoolsRequest;
    toJSON(_: QueryNumPoolsRequest): unknown;
    fromPartial(_: DeepPartial<QueryNumPoolsRequest>): QueryNumPoolsRequest;
};
export declare const QueryNumPoolsResponse: {
    encode(message: QueryNumPoolsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryNumPoolsResponse;
    fromJSON(object: any): QueryNumPoolsResponse;
    toJSON(message: QueryNumPoolsResponse): unknown;
    fromPartial(object: DeepPartial<QueryNumPoolsResponse>): QueryNumPoolsResponse;
};
export declare const QueryPoolParamsRequest: {
    encode(message: QueryPoolParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPoolParamsRequest;
    fromJSON(object: any): QueryPoolParamsRequest;
    toJSON(message: QueryPoolParamsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolParamsRequest>): QueryPoolParamsRequest;
};
export declare const QueryPoolParamsResponse: {
    encode(message: QueryPoolParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPoolParamsResponse;
    fromJSON(object: any): QueryPoolParamsResponse;
    toJSON(message: QueryPoolParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolParamsResponse>): QueryPoolParamsResponse;
};
export declare const QueryTotalSharesRequest: {
    encode(message: QueryTotalSharesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryTotalSharesRequest;
    fromJSON(object: any): QueryTotalSharesRequest;
    toJSON(message: QueryTotalSharesRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalSharesRequest>): QueryTotalSharesRequest;
};
export declare const QueryTotalSharesResponse: {
    encode(message: QueryTotalSharesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryTotalSharesResponse;
    fromJSON(object: any): QueryTotalSharesResponse;
    toJSON(message: QueryTotalSharesResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalSharesResponse>): QueryTotalSharesResponse;
};
export declare const QueryPoolAssetsRequest: {
    encode(message: QueryPoolAssetsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPoolAssetsRequest;
    fromJSON(object: any): QueryPoolAssetsRequest;
    toJSON(message: QueryPoolAssetsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolAssetsRequest>): QueryPoolAssetsRequest;
};
export declare const QueryPoolAssetsResponse: {
    encode(message: QueryPoolAssetsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPoolAssetsResponse;
    fromJSON(object: any): QueryPoolAssetsResponse;
    toJSON(message: QueryPoolAssetsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolAssetsResponse>): QueryPoolAssetsResponse;
};
export declare const QuerySpotPriceRequest: {
    encode(message: QuerySpotPriceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromJSON(object: any): QuerySpotPriceRequest;
    toJSON(message: QuerySpotPriceRequest): unknown;
    fromPartial(object: DeepPartial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
};
export declare const QuerySpotPriceResponse: {
    encode(message: QuerySpotPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySpotPriceResponse;
    fromJSON(object: any): QuerySpotPriceResponse;
    toJSON(message: QuerySpotPriceResponse): unknown;
    fromPartial(object: DeepPartial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
};
export declare const QuerySwapExactAmountInRequest: {
    encode(message: QuerySwapExactAmountInRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySwapExactAmountInRequest;
    fromJSON(object: any): QuerySwapExactAmountInRequest;
    toJSON(message: QuerySwapExactAmountInRequest): unknown;
    fromPartial(object: DeepPartial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest;
};
export declare const QuerySwapExactAmountInResponse: {
    encode(message: QuerySwapExactAmountInResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySwapExactAmountInResponse;
    fromJSON(object: any): QuerySwapExactAmountInResponse;
    toJSON(message: QuerySwapExactAmountInResponse): unknown;
    fromPartial(object: DeepPartial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse;
};
export declare const QuerySwapExactAmountOutRequest: {
    encode(message: QuerySwapExactAmountOutRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest;
    fromJSON(object: any): QuerySwapExactAmountOutRequest;
    toJSON(message: QuerySwapExactAmountOutRequest): unknown;
    fromPartial(object: DeepPartial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest;
};
export declare const QuerySwapExactAmountOutResponse: {
    encode(message: QuerySwapExactAmountOutResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse;
    fromJSON(object: any): QuerySwapExactAmountOutResponse;
    toJSON(message: QuerySwapExactAmountOutResponse): unknown;
    fromPartial(object: DeepPartial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse;
};
export declare const QueryTotalLiquidityRequest: {
    encode(_: QueryTotalLiquidityRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest;
    fromJSON(_: any): QueryTotalLiquidityRequest;
    toJSON(_: QueryTotalLiquidityRequest): unknown;
    fromPartial(_: DeepPartial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest;
};
export declare const QueryTotalLiquidityResponse: {
    encode(message: QueryTotalLiquidityResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryTotalLiquidityResponse;
    fromJSON(object: any): QueryTotalLiquidityResponse;
    toJSON(message: QueryTotalLiquidityResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse;
};
export interface Query {
    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    NumPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    TotalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    /** Per Pool gRPC Endpoints */
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    TotalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    PoolAssets(request: QueryPoolAssetsRequest): Promise<QueryPoolAssetsResponse>;
    SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    /** Estimate the swap. */
    EstimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    EstimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    NumPools(request: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
    TotalLiquidity(request: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    PoolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
    TotalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
    PoolAssets(request: QueryPoolAssetsRequest): Promise<QueryPoolAssetsResponse>;
    SpotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
    EstimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
    EstimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
