# stencil_cpn

## Description

基于 stencil 编译器构建的简单 web 组件库

## Software Architecture

Software architecture description

## Installation

1.  xxxx
2.  xxxx
3.  xxxx

## Instructions

### gls-button

- Properties

| Property       | Attribute       | Description            | Type     | Default      |
| -------------- | --------------- | ---------------------- | -------- | ------------ |
| `buttonRadius` | `button-radius` | Any                    | `string` | `'3px'`      |
| `buttonText`   | `button-text`   | Any                    | `string` | `'默认文字'` |
| `buttonType`   | `button-type`   | [default,primary,text] | `string` | `'default'`  |

#### Dependencies

##### Used by

- [gls-badge](../gls-badge)

### gls-link

#### Properties

| Property   | Attribute   | Description                              | Type     | Default      |
| ---------- | ----------- | ---------------------------------------- | -------- | ------------ |
| `linkText` | `link-text` | Any                                      | `string` | `'默认链接'` |
| `linkType` | `link-type` | [default,primary,success,warning,danger] | `string` | `'default'`  |

### gls-radio

#### Properties

| Property      | Attribute      | Description    | Type      | Default                     |
| ------------- | -------------- | -------------- | --------- | --------------------------- |
| `itemChecked` | `item-checked` | [true,false]   | `boolean` | `false`                     |
| `itemId`      | `item-id`      | Any            | `string`  | `'defaultID' + offerId()()` |
| `itemText`    | `item-text`    | Any            | `string`  | `'content'`                 |
| `radioColor`  | `radio-color`  | [blue,orange]  | `string`  | `'blue'`                    |
| `radioName`   | `radio-name`   | Any            | `string`  | `'defaultName'`             |
| `radioStyle`  | `radio-style`  | [round,square] | `string`  | `'round'`                   |

### gls-checkbox

#### Properties

| Property        | Attribute        | Description    | Type      | Default                     |
| --------------- | ---------------- | -------------- | --------- | --------------------------- |
| `checkboxColor` | `checkbox-color` | [blue,orange]  | `string`  | `'blue'`                    |
| `checkboxName`  | `checkbox-name`  | Any            | `string`  | `'defaultName'`             |
| `checkboxStyle` | `checkbox-style` | [round,square] | `string`  | `'round'`                   |
| `itemChecked`   | `item-checked`   | [true,false]   | `boolean` | `false`                     |
| `itemId`        | `item-id`        | Any            | `string`  | `'defaultID' + offerId()()` |
| `itemText`      | `item-text`      | Any            | `string`  | `'content'`                 |

### gls-icon

#### Properties

| Property    | Attribute    | Description | Type     | Default      |
| ----------- | ------------ | ----------- | -------- | ------------ |
| `iconColor` | `icon-color` | Any         | `string` | `'#fff'`     |
| `iconSize`  | `icon-size`  | Any         | `string` | `'25px'`     |
| `iconStyle` | `icon-style` | Any         | `string` | `'&#xe61e;'` |

#### Dependencies

##### Used by

- [gls-field](../gls-field)

### gls-field

#### Properties

| Property    | Attribute    | Description  | Type      | Default        |
| ----------- | ------------ | ------------ | --------- | -------------- |
| `inputIcon` | `input-icon` | Any          | `string`  | `''`           |
| `inputText` | `input-text` | Any          | `string`  | `'请在此输入'` |
| `labelText` | `label-text` | Any          | `string`  | `'默认文本'`   |
| `required`  | `required`   | [true,false] | `boolean` | `false`        |

#### Dependencies

##### Depends on

- [gls-icon](../gls-icon)

### gls-switch

#### Properties

| Property         | Attribute         | Description  | Type      | Default  |
| ---------------- | ----------------- | ------------ | --------- | -------- |
| `switchChecked`  | `switch-checked`  | [true,false] | `boolean` | `false`  |
| `switchColor`    | `switch-color`    | Any          | `string`  | `'red'`  |
| `switchDisabled` | `switch-disabled` | [true,false] | `boolean` | `false`  |
| `switchSize`     | `switch-size`     | Any          | `string`  | `'22px'` |

### gls-badge

#### Properties

| Property        | Attribute         | Description | Type     | Default  |
| --------------- | ----------------- | ----------- | -------- | -------- |
| `badgeColor`    | `badge-color`     | Any         | `string` | `'#f91'` |
| `badgeContent`  | `badge-content`   | Any         | `string` | `'323'`  |
| `badgeHostText` | `badge-host-text` | Any         | `string` | `'按钮'` |
| `badgeStyle`    | `badge-style`     | not yet     | `string` | `''`     |

#### Dependencies

##### Depends on

- [gls-button](../gls-button)

### gls-avatar

#### Properties

| Property      | Attribute      | Description       | Type     | Default   |
| ------------- | -------------- | ----------------- | -------- | --------- |
| `avatarShape` | `avatar-shape` | [round,square]    | `string` | `'round'` |
| `avatarSize`  | `avatar-size`  | Any               | `string` | `'50px'`  |
| `avatarType`  | `avatar-type`  | [icon,img,letter] | `string` | `'img'`   |

### gls-tag

#### Properties

| Property     | Attribute     | Description                           | Type     | Default     |
| ------------ | ------------- | ------------------------------------- | -------- | ----------- |
| `tagContent` | `tag-content` | Any                                   | `string` | `'CONTENT'` |
| `tagStyle`   | `tag-style`   | [primary,success,info,warning,danger] | `string` | `'primary'` |

### gls-pagination

#### Properties

| Property          | Attribute          | Description         | Type     | Default  |
| ----------------- | ------------------ | ------------------- | -------- | -------- |
| `paginationStyle` | `pagination-style` | [arrow,text,simple] | `string` | `'text'` |

## Contribution

1.  Fork the repository
2.  Create Feat_xxx branch
3.  Commit your code
4.  Create Pull Request

## Gitee Feature

1.  You can use Readme_XXX.md to support different languages, such as Readme_en.md, Readme_zh.md
2.  Gitee blog [blog.gitee.com](https://blog.gitee.com)
3.  Explore open source project [https://gitee.com/explore](https://gitee.com/explore)
4.  The most valuable open source project [GVP](https://gitee.com/gvp)
5.  The manual of Gitee [https://gitee.com/help](https://gitee.com/help)
6.  The most popular members [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
