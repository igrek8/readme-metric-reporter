[readme-metric-reporter](../README.md) / [Exports](../modules.md) / MetricReporter

# Class: MetricReporter

## Hierarchy

- `EventEmitter`

- [`IMetricReporter`](../interfaces/IMetricReporter.md)

  ↳ **`MetricReporter`**

## Implements

- [`IMetricReporter`](../interfaces/IMetricReporter.md)

## Table of contents

### Methods

- [clear](MetricReporter.md#clear)
- [emit](MetricReporter.md#emit)
- [flush](MetricReporter.md#flush)
- [off](MetricReporter.md#off)
- [on](MetricReporter.md#on)
- [once](MetricReporter.md#once)
- [ref](MetricReporter.md#ref)
- [report](MetricReporter.md#report)
- [start](MetricReporter.md#start)
- [stop](MetricReporter.md#stop)
- [unref](MetricReporter.md#unref)

### Constructors

- [constructor](MetricReporter.md#constructor)

### Properties

- [defaultOptions](MetricReporter.md#defaultoptions)

### Accessors

- [size](MetricReporter.md#size)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[MetricReporter.ts:173](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L173)

___

### emit

▸ **emit**(`eventName`, `error`, `metrics`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `error` | `Error` |
| `metrics` | [`Metric`](../interfaces/Metric.md)[] |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

#### Defined in

[MetricReporter.ts:37](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L37)

___

### flush

▸ **flush**(): `Promise`<`void`\>

Force flush metrics

#### Returns

`Promise`<`void`\>

#### Inherited from

[IMetricReporter](../interfaces/IMetricReporter.md).[flush](../interfaces/IMetricReporter.md#flush)

#### Defined in

[MetricReporter.ts:136](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L136)

___

### off

▸ **off**(`eventName`, `listener`): [`MetricReporter`](MetricReporter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | (`error`: `Error`, `metrics`: [`Metric`](../interfaces/Metric.md)[]) => `void` |

#### Returns

[`MetricReporter`](MetricReporter.md)

#### Overrides

EventEmitter.off

#### Defined in

[MetricReporter.ts:36](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L36)

___

### on

▸ **on**(`eventName`, `listener`): [`MetricReporter`](MetricReporter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | (`error`: `Error`, `metrics`: [`Metric`](../interfaces/Metric.md)[]) => `void` |

#### Returns

[`MetricReporter`](MetricReporter.md)

#### Overrides

EventEmitter.on

#### Defined in

[MetricReporter.ts:34](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L34)

___

### once

▸ **once**(`eventName`, `listener`): [`MetricReporter`](MetricReporter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | ``"error"`` |
| `listener` | (`error`: `Error`, `metrics`: [`Metric`](../interfaces/Metric.md)[]) => `void` |

#### Returns

[`MetricReporter`](MetricReporter.md)

#### Overrides

EventEmitter.once

#### Defined in

[MetricReporter.ts:35](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L35)

___

### ref

▸ **ref**(): `void`

#### Returns

`void`

#### Defined in

[MetricReporter.ts:125](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L125)

___

### report

▸ **report**(`metric`): `Promise`<`void`\>

Enqueues an API metric

#### Parameters

| Name | Type |
| :------ | :------ |
| `metric` | [`Metric`](../interfaces/Metric.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[IMetricReporter](../interfaces/IMetricReporter.md).[report](../interfaces/IMetricReporter.md#report)

#### Defined in

[MetricReporter.ts:91](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L91)

___

### start

▸ **start**(): `void`

Starts sending metrics

#### Returns

`void`

#### Inherited from

[IMetricReporter](../interfaces/IMetricReporter.md).[start](../interfaces/IMetricReporter.md#start)

#### Defined in

[MetricReporter.ts:107](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L107)

___

### stop

▸ **stop**(): `void`

Stops sending metrics

#### Returns

`void`

#### Inherited from

[IMetricReporter](../interfaces/IMetricReporter.md).[stop](../interfaces/IMetricReporter.md#stop)

#### Defined in

[MetricReporter.ts:118](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L118)

___

### unref

▸ **unref**(): `void`

#### Returns

`void`

#### Defined in

[MetricReporter.ts:129](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L129)

## Constructors

### constructor

• **new MetricReporter**(`apiKey`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `options?` | `_DeepPartialObject`<[`MetricReporterOptions`](../interfaces/MetricReporterOptions.md)\> |

#### Inherited from

EventEmitter.constructor

#### Defined in

[MetricReporter.ts:64](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L64)

## Properties

### defaultOptions

▪ `Static` **defaultOptions**: [`MetricReporterOptions`](../interfaces/MetricReporterOptions.md)

#### Defined in

[MetricReporter.ts:49](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L49)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[MetricReporter.ts:169](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L169)
