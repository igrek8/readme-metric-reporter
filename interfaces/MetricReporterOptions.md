[readme-metric-reporter](../README.md) / [Exports](../modules.md) / MetricReporterOptions

# Interface: MetricReporterOptions

## Table of contents

### Properties

- [buffer](MetricReporterOptions.md#buffer)
- [http](MetricReporterOptions.md#http)
- [mode](MetricReporterOptions.md#mode)

## Properties

### buffer

• **buffer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval` | `number` | How often a buffer is flushed |
| `size` | `number` | Number of log entries to collect before flushing |

#### Defined in

[MetricReporter.ts:11](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L11)

___

### http

• **http**: `Omit`<[`MetricReporterRequest`](MetricReporterRequest.md), ``"body"``\> & { `url`: `string`  }

HTTP client options

#### Defined in

[MetricReporter.ts:25](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L25)

___

### mode

• **mode**: [`MetricReporterMode`](../enums/MetricReporterMode.md)

Development logs will not affect production statistics

#### Defined in

[MetricReporter.ts:30](https://github.com/igrek8/readme-metric-reporter/blob/fc76f3c/src/MetricReporter.ts#L30)
