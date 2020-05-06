<template>
  <div class="zue-demo-wrap">
    <div class="zue-title">
      <div class="zue-title__back" @click="goBack">
        返回
      </div>
      <div class="zue-title__content">
        <slot name="title">
          {{ name[0].toUpperCase() + name.substr(1) }}
        </slot>
      </div>
      <div class="zue-title__right"></div>
    </div>
    <div
      class="zue-demo-content"
      :class="{
        'zue-demo-pd': !noPadding
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "demo-wrap",

  props: {
    name: String,
    noPadding: Boolean
  },

  methods: {
    goBack() {
      // this.$router.back()
      history.go(-2);
    }
  }
};
</script>

<style lang="less">
@import "~@@/style/var.less";
.zue-demo {
  &-wrap {
    padding-top: 45px;
    font-size: 14px;
  }
  &-pd {
    padding: 10px;
  }
}
.zue-title {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 10px;
  z-index: 2;
  /*border-bottom: 1px @border-color solid;*/
  &__back,
  &__right {
    color: @link-color;
    cursor: pointer;
  }
  &__content {
    font-size: 18px;
  }
}
</style>
