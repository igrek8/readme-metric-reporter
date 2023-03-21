[readme-metric-reporter](../README.md) / [Exports](../modules.md) / IMetricReporter

# Interface: IMetricReporter

## Hierarchy

- **`IMetricReporter`**

  ↳ [`MetricReporter`](../classes/MetricReporter.md)

## Implemented by

- [`MetricReporter`](../classes/MetricReporter.md)

## Table of contents

### Methods

- [flush](IMetricReporter.md#flush)
- [report](IMetricReporter.md#report)
- [start](IMetricReporter.md#start)
- [stop](IMetricReporter.md#stop)

## Methods

### flush

▸ **flush**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[IMetricReporter.ts:6](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/IMetricReporter.ts#L6)

___

### report

▸ **report**(`metric`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metric` | [`Metric`](Metric.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[IMetricReporter.ts:5](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/IMetricReporter.ts#L5)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[IMetricReporter.ts:4](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/IMetricReporter.ts#L4)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[IMetricReporter.ts:7](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/IMetricReporter.ts#L7)
