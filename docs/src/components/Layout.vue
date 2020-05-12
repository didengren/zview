<style lang="less">
.zue-layout {
  &__top {
    height: 60px;
    border-bottom: 1px #eee solid;
    &--content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin: 0 auto;
      padding: 0 40px;
      @media (min-width: 1440px) {
        width: 1440px;
      }
      div {
        margin-left: 10px;
      }
      &-small {
        font-size: 12px;
        color: #999;
      }
    }
    &--title {
      display: flex;
      align-items: center;
      font-size: 24px;
      text-decoration: none;
      color: #333;
    }
    ul a {
      font-size: 12px;
      color: #333;
      text-decoration: underline;
    }
  }
  &__left {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 240px;
    border-right: 1px solid #f1f4f8;
    overflow-y: scroll;
    padding: 25px 0 75px;
    z-index: 1;
    @media (min-width: 1440px) {
      margin-left: -720px;
      left: 50%;
    }
    &--sticky {
      position: fixed;
      top: 0;
    }
  }

  &__center {
    padding-left: 240px;
    padding-right: 360px;
    margin: 0 auto;
    min-height: calc(100vh - 60px);
    @media (min-width: 1440px) {
      width: 1440px;
      padding-right: 400px;
    }

    section {
      padding: 13px 40px;
      overflow: hidden;
    }
  }
  &__right {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    border-radius: 6px;
    background: #f7f8f9;
    box-sizing: border-box;
    height: 640px;
    width: 320px;
    top: 100px;
    right: 40px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, 0, 0);
    @media (max-height: 800px) {
      height: 500px;
    }
    @media (max-width: 1100px) {
      left: 750px;
    }
    @media (min-width: 1440px) {
      right: 50%;
      margin-right: -680px;
      width: 360px;
    }
    &--sticky {
      position: fixed;
      top: 40px;
    }
  }
}
</style>

<script lang="tsx">
import NavItems from "./NavItems.vue";
import { Vue, Component, Watch } from "vue-property-decorator";
import { routerDir, PackageItemGroup, PackageItem } from "@/constants";
import { use } from "@@/utils";

const bem = use("layout");
const CRITICAL_SCROLLTOP_VALUE: number = 40;

@Component({
  components: { NavItems }
})
export default class Layout extends Vue {
  demoAdd: string = "";
  domScrollTop: number = 0;
  navItems: PackageItemGroup[] = routerDir;
  get criticalScrollTop(): boolean {
    return this.domScrollTop > CRITICAL_SCROLLTOP_VALUE;
  }

  @Watch("$route.path")
  onRouteChg(n: string, o: string): void {
    console.log("n__", n, "\no___", o);
    this.reactiveIframe(n.substr(1));
  }

  created(): void {
    this.reactiveIframe(this.$route.path.substr(1));
  }
  mounted(): void {
    window.onscroll = () => {
      this.domScrollTop = document.documentElement.scrollTop;
    };
  }

  reactiveIframe(pathName: string): void {
    this.demoAdd = routerDir.some((item) =>
      item.items.some((subItem) => pathName === subItem.name && subItem.noDemo)
    )
      ? ""
      : `/demo/demo.html#/${pathName}`;
  }
  reactiveNavItemsRedirect(subItem: PackageItem) {
    this.reactiveIframe(subItem.name);
  }

  render(): JSX.Element {
    return (
      <div class={bem()}>
        <div class={bem("top", false)}>
          <div class={bem("top", "content", false)}>
            <a class={bem("top", "title", false)} href>
              <img
                src={require("@/assets/logo.png")}
                width="36px"
                alt="zue-ui logo"
              />
              <div>
                <span>Zue UI</span>
                <span class={bem("top", "content-small", false)}>
                  {" "}
                  天合移动端组件库
                </span>
              </div>
            </a>
            <ul>
              <li>
                <a target="_blank" href="https://github.com/didengren/zview">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class={
            this.criticalScrollTop ? bem("left", "sticky") : bem("left", false)
          }
        >
          <nav-items
            list={this.navItems}
            onChange={this.reactiveNavItemsRedirect}
          ></nav-items>
        </div>
        <div class={bem("center", false)}>
          <div class="van-doc-content">{this.$slots.center}</div>
        </div>
        {this.demoAdd ? (
          <div
            class={
              this.criticalScrollTop
                ? bem("right", "sticky")
                : bem("right", false)
            }
          >
            <iframe src={this.demoAdd} frameBorder="0"></iframe>
          </div>
        ) : null}
      </div>
    );
  }
}
</script>
