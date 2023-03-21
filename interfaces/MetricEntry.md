[readme-metric-reporter](../README.md) / [Exports](../modules.md) / MetricEntry

# Interface: MetricEntry

## Table of contents

### Properties

- [pageref](MetricEntry.md#pageref)
- [request](MetricEntry.md#request)
- [response](MetricEntry.md#response)
- [startedDateTime](MetricEntry.md#starteddatetime)
- [time](MetricEntry.md#time)

## Properties

### pageref

• `Optional` **pageref**: `string`

**`Description`**

The API endpoint or page that was accessed. If you would like to group similar endpoints together you can use your route with a variable instead, e.g. the literal string /users/{user_id}

**`Example`**

```ts
https://api.example.com/v1/pets
```

#### Defined in

[Metric.ts:110](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L110)

___

### request

• **request**: [`MetricRequestObject`](MetricRequestObject.md)

#### Defined in

[Metric.ts:119](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L119)

___

### response

• **response**: [`MetricResponseObject`](MetricResponseObject.md)

#### Defined in

[Metric.ts:120](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L120)

___

### startedDateTime

• **startedDateTime**: `string`

Format: date-time

**`Description`**

HTTP request start time. This should be the moment the server receives the request.

**`Example`**

```ts
2020-09-09T18:54:02.797Z
```

#### Defined in

[Metric.ts:116](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L116)

___

### time

• **time**: `string` \| `number`

**`Description`**

Total elapsed time in milliseconds between the `startedDateTime` and the completion of sending the response

#### Defined in

[Metric.ts:118](https://github.com/igrek8/readme-metric-reporter/blob/fa80eaf/src/Metric.ts#L118)
