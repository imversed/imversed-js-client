import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSwapExactAmountOut } from "./types/pools/v1beta1/tx";
import { MsgSwapExactAmountIn } from "./types/pools/v1beta1/tx";
import { MsgCreatePool } from "./types/pools/v1beta1/tx";
import { MsgJoinPool } from "./types/pools/v1beta1/tx";
import { MsgJoinSwapShareAmountOut } from "./types/pools/v1beta1/tx";
import { MsgJoinSwapExternAmountIn } from "./types/pools/v1beta1/tx";
import { MsgExitSwapExternAmountOut } from "./types/pools/v1beta1/tx";
import { MsgExitPool } from "./types/pools/v1beta1/tx";
import { MsgExitSwapShareAmountIn } from "./types/pools/v1beta1/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgSwapExactAmountOut: (data: MsgSwapExactAmountOut) => EncodeObject;
    msgSwapExactAmountIn: (data: MsgSwapExactAmountIn) => EncodeObject;
    msgCreatePool: (data: MsgCreatePool) => EncodeObject;
    msgJoinPool: (data: MsgJoinPool) => EncodeObject;
    msgJoinSwapShareAmountOut: (data: MsgJoinSwapShareAmountOut) => EncodeObject;
    msgJoinSwapExternAmountIn: (data: MsgJoinSwapExternAmountIn) => EncodeObject;
    msgExitSwapExternAmountOut: (data: MsgExitSwapExternAmountOut) => EncodeObject;
    msgExitPool: (data: MsgExitPool) => EncodeObject;
    msgExitSwapShareAmountIn: (data: MsgExitSwapShareAmountIn) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
