/* eslint-disable */
import { Timestamp } from '../../google/protobuf/timestamp'
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Coin } from '../../cosmos/base/v1beta1/coin'
import { Duration } from '../../google/protobuf/duration'

export const protobufPackage = 'imversed.pools.v1beta1'

export interface PoolAsset {
  /**
   * Coins we are talking about,
   * the denomination must be unique amongst all PoolAssets for this pool.
   */
  token: Coin | undefined
  /** Weight that is not normalized. This weight must be less than 2^50 */
  weight: string
}

/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */
export interface SmoothWeightChangeParams {
  /**
   * The start time for beginning the weight change.
   * If a parameter change / pool instantiation leaves this blank,
   * it should be generated by the state_machine as the current time.
   */
  startTime: Date | undefined
  /** Duration for the weights to change over */
  duration: Duration | undefined
  /**
   * The initial pool weights. These are copied from the pool's settings
   * at the time of weight change instantiation.
   * The amount PoolAsset.token.amount field is ignored if present,
   * future type refactorings should just have a type with the denom & weight
   * here.
   */
  initialPoolWeights: PoolAsset[]
  /**
   * The target pool weights. The pool weights will change linearly with respect
   * to time between start_time, and start_time + duration. The amount
   * PoolAsset.token.amount field is ignored if present, future type
   * refactorings should just have a type with the denom & weight here.
   */
  targetPoolWeights: PoolAsset[]
}

/**
 * PoolParams defined the parameters that will be managed by the pool governance
 * in the future. This params are not managed by the chain governanace.
 * Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
  swapFee: string
  exitFee: string
  /**  */
  smoothWeightChangeParams: SmoothWeightChangeParams | undefined
}

export interface Pool {
  address: string
  id: number
  poolParams: PoolParams | undefined
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the governor,
   * and if not specified is the LP token for this pool.
   * duration is a time specified as 0w,1w,2w, etc. which specifies how long the
   * token would need to be locked up to count in governance. 0w means no
   * lockup.
   * TODO: Further improve these docs
   */
  futurePoolGovernor: string
  /** sum of all LP tokens sent out */
  totalShares: Coin | undefined
  /**
   * These are assumed to be sorted by denomiation.
   * They contain the pool asset and the information about the weight
   */
  poolAssets: PoolAsset[]
  /** sum of all non-normalized pool weights */
  totalWeight: string
}

const basePoolAsset: object = { weight: '' }

export const PoolAsset = {
  encode(message: PoolAsset, writer: Writer = Writer.create()): Writer {
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(10).fork()).ldelim()
    }
    if (message.weight !== '') {
      writer.uint32(18).string(message.weight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PoolAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePoolAsset } as PoolAsset
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.token = Coin.decode(reader, reader.uint32())
          break
        case 2:
          message.weight = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PoolAsset {
    const message = { ...basePoolAsset } as PoolAsset
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromJSON(object.token)
    } else {
      message.token = undefined
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight)
    } else {
      message.weight = ''
    }
    return message
  },

  toJSON(message: PoolAsset): unknown {
    const obj: any = {}
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined)
    message.weight !== undefined && (obj.weight = message.weight)
    return obj
  },

  fromPartial(object: DeepPartial<PoolAsset>): PoolAsset {
    const message = { ...basePoolAsset } as PoolAsset
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromPartial(object.token)
    } else {
      message.token = undefined
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight
    } else {
      message.weight = ''
    }
    return message
  }
}

const baseSmoothWeightChangeParams: object = {}

export const SmoothWeightChangeParams = {
  encode(message: SmoothWeightChangeParams, writer: Writer = Writer.create()): Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim()
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.initialPoolWeights) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.targetPoolWeights) {
      PoolAsset.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): SmoothWeightChangeParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSmoothWeightChangeParams } as SmoothWeightChangeParams
    message.initialPoolWeights = []
    message.targetPoolWeights = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        case 2:
          message.duration = Duration.decode(reader, reader.uint32())
          break
        case 3:
          message.initialPoolWeights.push(PoolAsset.decode(reader, reader.uint32()))
          break
        case 4:
          message.targetPoolWeights.push(PoolAsset.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SmoothWeightChangeParams {
    const message = { ...baseSmoothWeightChangeParams } as SmoothWeightChangeParams
    message.initialPoolWeights = []
    message.targetPoolWeights = []
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime)
    } else {
      message.startTime = undefined
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromJSON(object.duration)
    } else {
      message.duration = undefined
    }
    if (object.initialPoolWeights !== undefined && object.initialPoolWeights !== null) {
      for (const e of object.initialPoolWeights) {
        message.initialPoolWeights.push(PoolAsset.fromJSON(e))
      }
    }
    if (object.targetPoolWeights !== undefined && object.targetPoolWeights !== null) {
      for (const e of object.targetPoolWeights) {
        message.targetPoolWeights.push(PoolAsset.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: SmoothWeightChangeParams): unknown {
    const obj: any = {}
    message.startTime !== undefined &&
      (obj.startTime = message.startTime !== undefined ? message.startTime.toISOString() : null)
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined)
    if (message.initialPoolWeights) {
      obj.initialPoolWeights = message.initialPoolWeights.map((e) =>
        e ? PoolAsset.toJSON(e) : undefined
      )
    } else {
      obj.initialPoolWeights = []
    }
    if (message.targetPoolWeights) {
      obj.targetPoolWeights = message.targetPoolWeights.map((e) =>
        e ? PoolAsset.toJSON(e) : undefined
      )
    } else {
      obj.targetPoolWeights = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<SmoothWeightChangeParams>): SmoothWeightChangeParams {
    const message = { ...baseSmoothWeightChangeParams } as SmoothWeightChangeParams
    message.initialPoolWeights = []
    message.targetPoolWeights = []
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime
    } else {
      message.startTime = undefined
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration)
    } else {
      message.duration = undefined
    }
    if (object.initialPoolWeights !== undefined && object.initialPoolWeights !== null) {
      for (const e of object.initialPoolWeights) {
        message.initialPoolWeights.push(PoolAsset.fromPartial(e))
      }
    }
    if (object.targetPoolWeights !== undefined && object.targetPoolWeights !== null) {
      for (const e of object.targetPoolWeights) {
        message.targetPoolWeights.push(PoolAsset.fromPartial(e))
      }
    }
    return message
  }
}

const basePoolParams: object = { swapFee: '', exitFee: '' }

export const PoolParams = {
  encode(message: PoolParams, writer: Writer = Writer.create()): Writer {
    if (message.swapFee !== '') {
      writer.uint32(10).string(message.swapFee)
    }
    if (message.exitFee !== '') {
      writer.uint32(18).string(message.exitFee)
    }
    if (message.smoothWeightChangeParams !== undefined) {
      SmoothWeightChangeParams.encode(
        message.smoothWeightChangeParams,
        writer.uint32(26).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePoolParams } as PoolParams
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.swapFee = reader.string()
          break
        case 2:
          message.exitFee = reader.string()
          break
        case 3:
          message.smoothWeightChangeParams = SmoothWeightChangeParams.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PoolParams {
    const message = { ...basePoolParams } as PoolParams
    if (object.swapFee !== undefined && object.swapFee !== null) {
      message.swapFee = String(object.swapFee)
    } else {
      message.swapFee = ''
    }
    if (object.exitFee !== undefined && object.exitFee !== null) {
      message.exitFee = String(object.exitFee)
    } else {
      message.exitFee = ''
    }
    if (object.smoothWeightChangeParams !== undefined && object.smoothWeightChangeParams !== null) {
      message.smoothWeightChangeParams = SmoothWeightChangeParams.fromJSON(
        object.smoothWeightChangeParams
      )
    } else {
      message.smoothWeightChangeParams = undefined
    }
    return message
  },

  toJSON(message: PoolParams): unknown {
    const obj: any = {}
    message.swapFee !== undefined && (obj.swapFee = message.swapFee)
    message.exitFee !== undefined && (obj.exitFee = message.exitFee)
    message.smoothWeightChangeParams !== undefined &&
      (obj.smoothWeightChangeParams = message.smoothWeightChangeParams
        ? SmoothWeightChangeParams.toJSON(message.smoothWeightChangeParams)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<PoolParams>): PoolParams {
    const message = { ...basePoolParams } as PoolParams
    if (object.swapFee !== undefined && object.swapFee !== null) {
      message.swapFee = object.swapFee
    } else {
      message.swapFee = ''
    }
    if (object.exitFee !== undefined && object.exitFee !== null) {
      message.exitFee = object.exitFee
    } else {
      message.exitFee = ''
    }
    if (object.smoothWeightChangeParams !== undefined && object.smoothWeightChangeParams !== null) {
      message.smoothWeightChangeParams = SmoothWeightChangeParams.fromPartial(
        object.smoothWeightChangeParams
      )
    } else {
      message.smoothWeightChangeParams = undefined
    }
    return message
  }
}

const basePool: object = { address: '', id: 0, futurePoolGovernor: '', totalWeight: '' }

export const Pool = {
  encode(message: Pool, writer: Writer = Writer.create()): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim()
    }
    if (message.futurePoolGovernor !== '') {
      writer.uint32(34).string(message.futurePoolGovernor)
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim()
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(50).fork()).ldelim()
    }
    if (message.totalWeight !== '') {
      writer.uint32(58).string(message.totalWeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePool } as Pool
    message.poolAssets = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32())
          break
        case 4:
          message.futurePoolGovernor = reader.string()
          break
        case 5:
          message.totalShares = Coin.decode(reader, reader.uint32())
          break
        case 6:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()))
          break
        case 7:
          message.totalWeight = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool
    message.poolAssets = []
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.poolParams !== undefined && object.poolParams !== null) {
      message.poolParams = PoolParams.fromJSON(object.poolParams)
    } else {
      message.poolParams = undefined
    }
    if (object.futurePoolGovernor !== undefined && object.futurePoolGovernor !== null) {
      message.futurePoolGovernor = String(object.futurePoolGovernor)
    } else {
      message.futurePoolGovernor = ''
    }
    if (object.totalShares !== undefined && object.totalShares !== null) {
      message.totalShares = Coin.fromJSON(object.totalShares)
    } else {
      message.totalShares = undefined
    }
    if (object.poolAssets !== undefined && object.poolAssets !== null) {
      for (const e of object.poolAssets) {
        message.poolAssets.push(PoolAsset.fromJSON(e))
      }
    }
    if (object.totalWeight !== undefined && object.totalWeight !== null) {
      message.totalWeight = String(object.totalWeight)
    } else {
      message.totalWeight = ''
    }
    return message
  },

  toJSON(message: Pool): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.id !== undefined && (obj.id = message.id)
    message.poolParams !== undefined &&
      (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined)
    message.futurePoolGovernor !== undefined &&
      (obj.futurePoolGovernor = message.futurePoolGovernor)
    message.totalShares !== undefined &&
      (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined)
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map((e) => (e ? PoolAsset.toJSON(e) : undefined))
    } else {
      obj.poolAssets = []
    }
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight)
    return obj
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool
    message.poolAssets = []
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.poolParams !== undefined && object.poolParams !== null) {
      message.poolParams = PoolParams.fromPartial(object.poolParams)
    } else {
      message.poolParams = undefined
    }
    if (object.futurePoolGovernor !== undefined && object.futurePoolGovernor !== null) {
      message.futurePoolGovernor = object.futurePoolGovernor
    } else {
      message.futurePoolGovernor = ''
    }
    if (object.totalShares !== undefined && object.totalShares !== null) {
      message.totalShares = Coin.fromPartial(object.totalShares)
    } else {
      message.totalShares = undefined
    }
    if (object.poolAssets !== undefined && object.poolAssets !== null) {
      for (const e of object.poolAssets) {
        message.poolAssets.push(PoolAsset.fromPartial(e))
      }
    }
    if (object.totalWeight !== undefined && object.totalWeight !== null) {
      message.totalWeight = object.totalWeight
    } else {
      message.totalWeight = ''
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000
  millis += t.nanos / 1_000_000
  return new Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}
// @ts-ignore
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
