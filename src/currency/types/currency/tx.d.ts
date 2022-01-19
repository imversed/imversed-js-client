import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "fulldivevr.imversed.currency";
export interface MsgIssue {
    sender: string;
    denom: string;
}
export interface MsgIssueResponse {
}
export interface MsgMint {
    sender: string;
    coin: Coin | undefined;
}
export interface MsgMintResponse {
}
export declare const MsgIssue: {
    encode(message: MsgIssue, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssue;
    fromJSON(object: any): MsgIssue;
    toJSON(message: MsgIssue): unknown;
    fromPartial(object: DeepPartial<MsgIssue>): MsgIssue;
};
export declare const MsgIssueResponse: {
    encode(_: MsgIssueResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueResponse;
    fromJSON(_: any): MsgIssueResponse;
    toJSON(_: MsgIssueResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueResponse>): MsgIssueResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    Issue(request: MsgIssue): Promise<MsgIssueResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    Mint(request: MsgMint): Promise<MsgMintResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Issue(request: MsgIssue): Promise<MsgIssueResponse>;
    Mint(request: MsgMint): Promise<MsgMintResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
