<style lang="less">
@import "../../../packages/style/var";
.zue-nav {
  &__group {
    &--title {
      font-size: 16px;
      color: #455a64;
      line-height: 24px;
      font-weight: 700;
      padding: 10px 0 0 40px;
      @media (min-width: 1440px) {
        padding: 10px 20px 10px 40px;
      }
    }
  }
  &__item {
    font-size: 12px;
    color: #455a64;
    padding: 10px 0 0 40px;
    line-height: 24px;
    cursor: pointer;
    @media (min-width: 1440px) {
      font-size: 14px;
      padding: 10px 20px 10px 40px;
    }
  }
  &__active {
    color: @link-color;
  }
}
</style>

<script lang="tsx">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { PackageItemGroup, PackageItem } from "@/constants";
import { use } from "@@/utils";

const bem = use("nav");

@Component
export default class NavItems extends Vue {
  @Prop() readonly list!: PackageItemGroup[];

  isActive(nav: PackageItem): boolean {
    return this.$route.path.substring(1) === nav.name;
  }
  @Emit("change")
  redirect(subItem: PackageItem): PackageItem {
    this.$router.push(`/${subItem.name}`);
    return subItem;
  }

  render(): JSX.Element {
    return (
      <div class={bem("wrap")}>
        {this.list.map((item) => (
          <div class={bem("group", false)}>
            <div class={bem("group", "title", false)}>{item.title}</div>
            {item.items.map((subItem: PackageItem) => (
              <div
                class={bem(["item", { active: this.isActive(subItem) }], false)}
                onClick={this.redirect.bind(this, subItem)}
              >
                {subItem.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
</script>
