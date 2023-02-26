[readme-metric-reporter](../README.md) / [Exports](../modules.md) / MetricRequestObject

# Interface: MetricRequestObject

## Table of contents

### Properties

- [headers](MetricRequestObject.md#headers)
- [httpVersion](MetricRequestObject.md#httpversion)
- [method](MetricRequestObject.md#method)
- [postData](MetricRequestObject.md#postdata)
- [queryString](MetricRequestObject.md#querystring)
- [url](MetricRequestObject.md#url)

## Properties

### headers

• **headers**: [`MetricRequestHeader`](MetricRequestHeader.md)[]

**`Description`**

Headers

#### Defined in

[Metric.ts:77](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L77)

___

### httpVersion

• **httpVersion**: `string`

**`Description`**

Name and revision of the information protocol via which the page was requested.

#### Defined in

[Metric.ts:75](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L75)

___

### method

• **method**: `string`

**`Description`**

HTTP Method

#### Defined in

[Metric.ts:71](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L71)

___

### postData

• `Optional` **postData**: [`MetricRequestData`](MetricRequestData.md)

#### Defined in

[Metric.ts:79](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L79)

___

### queryString

• **queryString**: [`MetricRequestQueryString`](MetricRequestQueryString.md)[]

#### Defined in

[Metric.ts:78](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L78)

___

### url

• **url**: `string`

**`Description`**

Full URL of Request

#### Defined in

[Metric.ts:73](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L73)
