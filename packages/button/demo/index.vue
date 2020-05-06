<template>
  <demo-wrap class="demo-button" name="button">
    <div>
      <p>按钮尺寸</p>
      <zue-button>普通按钮</zue-button>
      <zue-button text="小号按钮" size="small"></zue-button>
      <zue-button text="迷你按钮" size="mini"></zue-button>
      <zue-button text="大号按钮" size="large"></zue-button>
    </div>
    <div>
      <p>按钮颜色</p>
      <zue-button text="default按钮"></zue-button>
      <zue-button type="primary" text="primary按钮"></zue-button>
    </div>
    <div>
      <p>圆形按钮</p>
      <zue-button text="全圆角按钮" border-radius></zue-button>
      <zue-button text="按钮" size="mini" border-radius></zue-button>
    </div>
    <div>
      <p>描边按钮</p>
      <zue-button type="primary" text="描边按钮" plain />
      <zue-button type="primary" text="描边按钮" size="small" plain />
    </div>
    <div>
      <p>自定义按钮</p>
      <zue-button text="订制颜色" color="red" />
    </div>
    <div>
      <p>按钮状态</p>
      <zue-button type="primary" text="禁用按钮" disabled></zue-button>
      <zue-button type="primary" text="灰色 - 禁用按钮" disabled-gray />
    </div>
    <div>
      <p>块级按钮</p>
      <zue-button text="块级按钮" size="large" block />
    </div>
  </demo-wrap>
</template>

<script>
import DemoWrap from "@/components/DemoWrap.vue";
import ZueButton from "../";
import "../index.less";

export default {
  name: "demo-button",
  components: { DemoWrap, ZueButton }
};
</script>

<style lang="less">
.demo-button {
  .zue-button {
    margin-right: 10px;
  }
}
</style>
