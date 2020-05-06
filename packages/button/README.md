# Button

引入

```js
import { ZueButton } from 'zue-ui'

Vue.use(ZueButton)
```

代码演示
```html
<template>
  <zue-button>
    普通按钮
  </zue-button>

  <zue-button
    color="red"
    plain
    @click="handleClick"
  >
    订制颜色
  </zue-button>

  <zue-button
    type="primary"
    disabled
    @click="handleClick"
  >
    禁用按钮
  </zue-button>
</template>
```

### API

参数|类型|默认值|说明
----|----|-----|----
type|`string`|`default`|可选值 `primary`
size|`string`|`normal`|可选值 `large` `small` `mini`
text|`string`| - | `deprecated`
borderRadius|`boolean`|`false`|是否为全圆角按钮，默认的圆角尺寸为2px
block|`boolean`|`false`|是否为块级按钮
plain|`boolean`|`false`|是否为描边按钮
disabled|`boolean`|`false`|是否禁用
color|`string`|-|自定义色值，例如：`red` `#ff4400`，不建议使用
