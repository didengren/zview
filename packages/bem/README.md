## Bem
css BEM 命名规则生成函数，目的是优化在 `template` 或 `jsx` 中 BEM 的写法。
引入
```js
import { Bem } from "zue-ui";

const bem = Bem(name: string, app?: string);
```

代码演示

```jsx
class Button {
  render() {
    const bem = use("button", "zue");
    return (
      <div class={bem()}>
        <div class={bem("goods")}>
          <div class={bem("goods", ["img", { normal: true }])}></div>
        </div>
      </div>
    );
  }
}
```

Bem函数思路
- 项目存在可选的全局唯一的命名空间，例如 `zue`
- 遵循BEM命名规范
- vue 支持解析 `:class` 的所有值

在实际的项目中使用时
- 存在命名空间，可自行封装函数
```js
export const bem = (mod: string) => use(mod, "你的全局命名名称")
```

- 不存在，可直接调用
```js
const bem = use("cart")

bem("nav")
bem("cart", "submit")
```
