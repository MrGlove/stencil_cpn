# gls-switch

滑动开关组件

<!-- Auto Generated Below -->
## Use
```
<!-- 引入 -->
<script type="module">
    import './node_modules/gls-cpn/components/gls-switch.js';
</script>
<!-- 使用 -->
<gls-switch></gls-switch>
```

## Properties

| Property         | Attribute         | Description | Type      | Default  |
| ---------------- | ----------------- | ----------- | --------- | -------- |
| `switchChecked`  | `switch-checked`  | 选中状态     | `boolean` | `false`  |
| `switchColor`    | `switch-color`    | 开关颜色     | `string`  | `'2022ff'`  |
| `switchText`    | `switch-text`    | 开关说明     | `string`  | `'默认文字'`  |
| `switchDisabled` | `switch-disabled` |   禁用状态          | `boolean` | `false`  |
| `switchSize`     | `switch-size`     |   开关尺寸          | `string`  | `'medium'` |

### 选中
switch-checked属性设置选中
```
<gls-switch switch-checked=true ></gls-switch>
```
### 禁用
switch-disabled属性设置禁用
```
<gls-switch switch-disabled=true ></gls-switch>
```
### 自定义颜色,尺寸,文字说明
switch-color属性设置颜色，switch-size属性设置尺寸，switch-text属性设置文字说明
```color
<gls-switch 
switch-color=var(--color-primary) 
switch-size='small' 
switch-text='滑动以开启声音'>
</gls-switch>
```
## Events

| Event           | Description | Type                  |
| --------------- | ----------- | --------------------- |
| `switchTofalse` |  关闭滑动开关触发的事件           | `CustomEvent<Object>` |
| `switchTotrue`  |  打开滑动开关触发的事件           | `CustomEvent<Object>` |
### switchTotrue&switchTofalse
滑动开关时触发
```
<gls-switch></gls-switch>
<script>
    const switchEle = document.querySelector('gls-switch')
    switchEle.addEventListener('switchTotrue', event=>{/* listener */})
</script>
```
----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
