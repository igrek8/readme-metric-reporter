[readme-metric-reporter](../README.md) / [Exports](../modules.md) / MetricResponseData

# Interface: MetricResponseData

## Table of contents

### Properties

- [encoding](MetricResponseData.md#encoding)
- [mimeType](MetricResponseData.md#mimetype)
- [size](MetricResponseData.md#size)
- [text](MetricResponseData.md#text)

## Properties

### encoding

• `Optional` **encoding**: `string`

**`Description`**

Encoding used for response text field. Leave out this field if the text field is HTTP decoded (decompressed and unchunked), then transcoded from its original character set into UTF-8.

**`Example`**

```ts
base64
```

#### Defined in

[Metric.ts:92](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L92)

___

### mimeType

• `Optional` **mimeType**: `string`

#### Defined in

[Metric.ts:85](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L85)

___

### size

• `Optional` **size**: `string` \| `number`

**`Description`**

Length of the returned content in bytes

#### Defined in

[Metric.ts:84](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L84)

___

### text

• `Optional` **text**: `string`

**`Description`**

Response body sent from the server. This field is populated with textual content only. The text field is either HTTP decoded text or an encoded (e.g. "base64") representation of the response body. Leave out this field if the information is not available.

#### Defined in

[Metric.ts:87](https://github.com/igrek8/readme-metric-reporter/blob/e67d426/src/Metric.ts#L87)
