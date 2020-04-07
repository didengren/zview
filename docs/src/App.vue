<style lang="less">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
</style>

<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <router-view></router-view>
      </div>
    );
  }
}
</script>
