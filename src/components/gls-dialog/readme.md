# gls-dialog



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default                    |
| -------- | --------- | ----------- | -------- | -------------------------- |
| `ddata`  | --        |             | `object` | `{     a: 1,     b: 2   }` |


## Events

| Event                 | Description | Type                  |
| --------------------- | ----------- | --------------------- |
| `newMissionSubmitted` |             | `CustomEvent<Object>` |


## Methods

### `showDialog() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [gls-button](../gls-button)

### Graph
```mermaid
graph TD;
  gls-dialog --> gls-button
  style gls-dialog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
