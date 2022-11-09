[readme-metric-reporter](../README.md) / [Exports](../modules.md) / Metric

# Interface: Metric

Generated from Open API Specification

https://metrics.readme.io/request

## Table of contents

### Properties

- [\_id](Metric.md#_id)
- [clientIPAddress](Metric.md#clientipaddress)
- [development](Metric.md#development)
- [group](Metric.md#group)
- [request](Metric.md#request)

## Properties

### \_id

• `Optional` **\_id**: `string`

**`Description`**

A uuidv4 identifier for this log. If not provided we will generate one for you. This ID can be used to view the logged request and response information at `{your url}/logs/{id}`

#### Defined in

[Metric.ts:142](https://github.com/igrek8/readme-metric-reporter/blob/2a81fee/src/Metric.ts#L142)

___

### clientIPAddress

• **clientIPAddress**: `string`

**`Description`**

IP Address making request

#### Defined in

[Metric.ts:144](https://github.com/igrek8/readme-metric-reporter/blob/2a81fee/src/Metric.ts#L144)

___

### development

• `Optional` **development**: `boolean`

**`Default`**

true

#### Defined in

[Metric.ts:146](https://github.com/igrek8/readme-metric-reporter/blob/2a81fee/src/Metric.ts#L146)

___

### group

• **group**: [`MetricGroup`](MetricGroup.md)

**`Description`**

Data about the user or project making the API call

#### Defined in

[Metric.ts:148](https://github.com/igrek8/readme-metric-reporter/blob/2a81fee/src/Metric.ts#L148)

___

### request

• **request**: [`MetricRequest`](MetricRequest.md)

**`Description`**

HAR Object for Request

#### Defined in

[Metric.ts:150](https://github.com/igrek8/readme-metric-reporter/blob/2a81fee/src/Metric.ts#L150)
