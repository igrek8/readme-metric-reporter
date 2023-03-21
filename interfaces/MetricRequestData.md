[readme-metric-reporter](../README.md) / [Exports](../modules.md) / MetricRequestData

# Interface: MetricRequestData

## Table of contents

### Properties

- [comment](MetricRequestData.md#comment)
- [mimeType](MetricRequestData.md#mimetype)
- [params](MetricRequestData.md#params)
- [text](MetricRequestData.md#text)

## Properties

### comment

• `Optional` **comment**: `string`

#### Defined in

[Metric.ts:66](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L66)

___

### mimeType

• `Optional` **mimeType**: `string`

#### Defined in

[Metric.ts:61](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L61)

___

### params

• `Optional` **params**: [`MetricRequestParameter`](MetricRequestParameter.md)[]

**`Description`**

If the request body is url encoded (e.g. `a=b&c=d`) then those parameters are provided via the `params` array. Otherwise see `text`

#### Defined in

[Metric.ts:63](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L63)

___

### text

• `Optional` **text**: `string`

**`Description`**

The string representation of the request body. Used for all cases except for a form-encoded body

#### Defined in

[Metric.ts:65](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L65)
