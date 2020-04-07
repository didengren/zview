<style lang="less">
.markdown-transfer {
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>

<template>
  <div class="markdown-transfer">
    <layout>
      <component :is="componentId" slot="center"></component>
    </layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import { markdown } from "@/constants";

@Component({
  components: {
    Layout,
    ...markdown
  }
})
export default class MarkdownTransfer extends Vue {
  componentId: string = "";

  @Watch("$route.path")
  onChangeComponent(val: string) {
    this.changeComponent(val.substr(1));
  }

  created() {
    this.changeComponent(this.$route.path.substr(1));
  }

  changeComponent(name: string) {
    this.componentId = name[0].toUpperCase() + name.substr(1);
  }
}
</script>
