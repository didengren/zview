<style lang="less">
#home {
  iframe {
    width: 100%;
    height: 100%;
  }
  .home__page-center {
    padding: 15px 40px;
    p {
      margin-top: 20px;
      font-size: 30px;
      &:last-child {
        font-size: 14px;
      }
    }
  }
}
</style>

<template>
  <div id="home">
    <layout>
      <div class="home__page-center" slot="center">
        <p>Zue UI</p>
        <p>Vue + ts 组件库</p>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";

@Component({
  components: { Layout }
})
export default class Home extends Vue {}
</script>
