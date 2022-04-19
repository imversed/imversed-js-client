// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const types = [
    ["/imversed.pools.v1beta1.MsgSwapExactAmountOut", MsgSwapExactAmountOut],
    ["/imversed.pools.v1beta1.MsgSwapExactAmountIn", MsgSwapExactAmountIn],
    ["/imversed.pools.v1beta1.MsgCreatePool", MsgCreatePool],
    ["/imversed.pools.v1beta1.MsgJoinPool", MsgJoinPool],
    ["/imversed.pools.v1beta1.MsgJoinSwapShareAmountOut", MsgJoinSwapShareAmountOut],
    ["/imversed.pools.v1beta1.MsgJoinSwapExternAmountIn", MsgJoinSwapExternAmountIn],
    ["/imversed.pools.v1beta1.MsgExitSwapExternAmountOut", MsgExitSwapExternAmountOut],
    ["/imversed.pools.v1beta1.MsgExitPool", MsgExitPool],
    ["/imversed.pools.v1beta1.MsgExitSwapShareAmountIn", MsgExitSwapShareAmountIn],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgSwapExactAmountOut: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgSwapExactAmountOut", value: MsgSwapExactAmountOut.fromPartial(data) }),
        msgSwapExactAmountIn: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgSwapExactAmountIn", value: MsgSwapExactAmountIn.fromPartial(data) }),
        msgCreatePool: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgCreatePool", value: MsgCreatePool.fromPartial(data) }),
        msgJoinPool: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgJoinPool", value: MsgJoinPool.fromPartial(data) }),
        msgJoinSwapShareAmountOut: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgJoinSwapShareAmountOut", value: MsgJoinSwapShareAmountOut.fromPartial(data) }),
        msgJoinSwapExternAmountIn: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgJoinSwapExternAmountIn", value: MsgJoinSwapExternAmountIn.fromPartial(data) }),
        msgExitSwapExternAmountOut: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgExitSwapExternAmountOut", value: MsgExitSwapExternAmountOut.fromPartial(data) }),
        msgExitPool: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgExitPool", value: MsgExitPool.fromPartial(data) }),
        msgExitSwapShareAmountIn: (data) => ({ typeUrl: "/imversed.pools.v1beta1.MsgExitSwapShareAmountIn", value: MsgExitSwapShareAmountIn.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
