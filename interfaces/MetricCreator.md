[readme-metric-reporter](../README.md) / [Exports](../modules.md) / MetricCreator

# Interface: MetricCreator

## Table of contents

### Properties

- [comment](MetricCreator.md#comment)
- [name](MetricCreator.md#name)
- [version](MetricCreator.md#version)

## Properties

### comment

• `Optional` **comment**: `string`

**`Description`**

The OS and Version of the log. For the OS use `mac`, `windows`, `linux` or `unknown`. The format should match {osName}/version.

**`Example`**

```ts
mac/v10.16.0
```

#### Defined in

[Metric.ts:25](https://github.com/igrek8/readme-metric-reporter/blob/2fe414e/src/Metric.ts#L25)

___

### name

• **name**: `string`

**`Description`**

Name of the package or HTTP module used.

**`Example`**

```ts
readmeio
```

#### Defined in

[Metric.ts:15](https://github.com/igrek8/readme-metric-reporter/blob/2fe414e/src/Metric.ts#L15)

___

### version

• **version**: `string`

**`Description`**

Version of the package or HTTP module.

**`Example`**

```ts
1.2.1
```

#### Defined in

[Metric.ts:20](https://github.com/igrek8/readme-metric-reporter/blob/2fe414e/src/Metric.ts#L20)
