import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "imversed.nft";
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenom {
    id: string;
    name: string;
    schema: string;
    sender: string;
    symbol: string;
    mintRestricted: boolean;
    updateRestricted: boolean;
    oracleUrl: string;
}
/** MsgUpdateDenom defines an SDK message for updating denom */
export interface MsgUpdateDenom {
    id: string;
    name: string;
    schema: string;
    sender: string;
    mintRestricted: boolean;
    updateRestricted: boolean;
    oracleUrl: string;
}
/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponse {
}
/** MsgUpdateDenomResponse defines the Msg/UpdateDenom response type. */
export interface MsgUpdateDenomResponse {
}
/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFT {
    id: string;
    denomId: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
}
/** MsgTransferNFTResponse defines the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponse {
}
/** MsgEditNFT defines an SDK message for editing a nft. */
export interface MsgEditNFT {
    id: string;
    denomId: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
}
/** MsgEditNFTResponse defines the Msg/EditNFT response type. */
export interface MsgEditNFTResponse {
}
/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFT {
    id: string;
    denomId: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponse {
}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFT {
    id: string;
    denomId: string;
    sender: string;
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponse {
}
/** MsgTransferDenom defines an SDK message for transferring an denom to recipient. */
export interface MsgTransferDenom {
    id: string;
    sender: string;
    recipient: string;
}
/** MsgTransferDenomResponse defines the Msg/TransferDenom response type. */
export interface MsgTransferDenomResponse {
}
export declare const MsgIssueDenom: {
    encode(message: MsgIssueDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueDenom;
    fromJSON(object: any): MsgIssueDenom;
    toJSON(message: MsgIssueDenom): unknown;
    fromPartial(object: DeepPartial<MsgIssueDenom>): MsgIssueDenom;
};
export declare const MsgUpdateDenom: {
    encode(message: MsgUpdateDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenom;
    fromJSON(object: any): MsgUpdateDenom;
    toJSON(message: MsgUpdateDenom): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDenom>): MsgUpdateDenom;
};
export declare const MsgIssueDenomResponse: {
    encode(_: MsgIssueDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueDenomResponse;
    fromJSON(_: any): MsgIssueDenomResponse;
    toJSON(_: MsgIssueDenomResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueDenomResponse>): MsgIssueDenomResponse;
};
export declare const MsgUpdateDenomResponse: {
    encode(_: MsgUpdateDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenomResponse;
    fromJSON(_: any): MsgUpdateDenomResponse;
    toJSON(_: MsgUpdateDenomResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDenomResponse>): MsgUpdateDenomResponse;
};
export declare const MsgTransferNFT: {
    encode(message: MsgTransferNFT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferNFT;
    fromJSON(object: any): MsgTransferNFT;
    toJSON(message: MsgTransferNFT): unknown;
    fromPartial(object: DeepPartial<MsgTransferNFT>): MsgTransferNFT;
};
export declare const MsgTransferNFTResponse: {
    encode(_: MsgTransferNFTResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferNFTResponse;
    fromJSON(_: any): MsgTransferNFTResponse;
    toJSON(_: MsgTransferNFTResponse): unknown;
    fromPartial(_: DeepPartial<MsgTransferNFTResponse>): MsgTransferNFTResponse;
};
export declare const MsgEditNFT: {
    encode(message: MsgEditNFT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEditNFT;
    fromJSON(object: any): MsgEditNFT;
    toJSON(message: MsgEditNFT): unknown;
    fromPartial(object: DeepPartial<MsgEditNFT>): MsgEditNFT;
};
export declare const MsgEditNFTResponse: {
    encode(_: MsgEditNFTResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEditNFTResponse;
    fromJSON(_: any): MsgEditNFTResponse;
    toJSON(_: MsgEditNFTResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditNFTResponse>): MsgEditNFTResponse;
};
export declare const MsgMintNFT: {
    encode(message: MsgMintNFT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintNFT;
    fromJSON(object: any): MsgMintNFT;
    toJSON(message: MsgMintNFT): unknown;
    fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT;
};
export declare const MsgMintNFTResponse: {
    encode(_: MsgMintNFTResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintNFTResponse;
    fromJSON(_: any): MsgMintNFTResponse;
    toJSON(_: MsgMintNFTResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse;
};
export declare const MsgBurnNFT: {
    encode(message: MsgBurnNFT, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnNFT;
    fromJSON(object: any): MsgBurnNFT;
    toJSON(message: MsgBurnNFT): unknown;
    fromPartial(object: DeepPartial<MsgBurnNFT>): MsgBurnNFT;
};
export declare const MsgBurnNFTResponse: {
    encode(_: MsgBurnNFTResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnNFTResponse;
    fromJSON(_: any): MsgBurnNFTResponse;
    toJSON(_: MsgBurnNFTResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnNFTResponse>): MsgBurnNFTResponse;
};
export declare const MsgTransferDenom: {
    encode(message: MsgTransferDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferDenom;
    fromJSON(object: any): MsgTransferDenom;
    toJSON(message: MsgTransferDenom): unknown;
    fromPartial(object: DeepPartial<MsgTransferDenom>): MsgTransferDenom;
};
export declare const MsgTransferDenomResponse: {
    encode(_: MsgTransferDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferDenomResponse;
    fromJSON(_: any): MsgTransferDenomResponse;
    toJSON(_: MsgTransferDenomResponse): unknown;
    fromPartial(_: DeepPartial<MsgTransferDenomResponse>): MsgTransferDenomResponse;
};
/** Msg defines the nft Msg service. */
export interface Msg {
    /** IssueDenom defines a method for issue a denom. */
    IssueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
    /** UpdateDenom defines a method for update a denom */
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    /** MintNFT defines a method for mint a new nft */
    MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    /** RefundHTLC defines a method for editing a nft. */
    EditNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse>;
    /** TransferNFT defines a method for transferring a nft. */
    TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
    /** BurnNFT defines a method for burning a nft. */
    BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
    /** TransferDenom defines a method for transferring a denom. */
    TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    IssueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    EditNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse>;
    TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
    BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
    TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};