# GLS Components

## 介绍
基于stencil编译器构建的简单web组件库

## 使用

1.  CDN
```
<script
  type="module"
  src="https://unpkg.com/gls-cpn/dist/gls-cpn/gls-cpn.esm.js"
></script>
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/gls-cpn/dist/gls-cpn/gls-cpn.css"
/>
```

2.  NPM
```
npm i gls-cpn
```
以使用gls-button为例
```
import {defineCustomElement as defineButton} from "gls-cpn/dist/components/gls-button"
defineButton()
```
静态资源文件的样式设置尚未完成

