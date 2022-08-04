# gls-collapse

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute       | Description                                             | Type       | Default      |
| -------------- | --------------- | ------------------------------------------------------- | ---------- | ------------ |
| `clpsTitle`    | `clps-title`    | 折叠面板的标题内容                                      | `string`   | `'默认名称'` |
| `currentState` | `current-state` | 面板右侧的当前状态在状态列表中的下标                    | `number`   | `undefined`  |
| `rl`           | --              | 状态列表，暂时不能设置，通过 stateList 得到，待未来升级 | `string[]` | `undefined`  |
| `stateList`    | `state-list`    | 面板右侧的状态列表字符串                                | `string`   | `''`         |

## Methods

### `changeMainInfo(index: number) => Promise<void>`

#### Returns

Type: `Promise<void>`

用于修改当前状态的函数

### `deleteLine() => Promise<void>`

#### Returns

Type: `Promise<void>`

用于删除该折叠面板的函数

## Slots
only one
- 在展开面板中需要展示的内容

---

_Built with [StencilJS](https://stenciljs.com/)_
