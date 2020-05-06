import { Component, Prop, Vue } from "vue-property-decorator";
import { use } from "@@/utils";

type propType = "default" | "primary";
type propSize = "large" | "normal" | "small" | "mini";

const bem = use("button");

// 参考flutter > CupertinoButton
@Component({})
export default class ZueButton extends Vue {
  @Prop({ default: "default", type: String }) readonly type!: propType; // 背景色类型
  @Prop({ default: "normal", type: String }) readonly size!: propSize; // 按钮尺寸
  @Prop(String) readonly text!: string;
  @Prop({ default: false, type: Boolean }) readonly block!: boolean;
  @Prop({ default: false, type: Boolean }) readonly borderRadius!: boolean;
  @Prop(String) readonly color!: string;
  @Prop({ default: false, type: Boolean }) readonly disabled!: boolean;
  @Prop({ default: false, type: Boolean }) readonly disabledGray!: boolean;
  @Prop({ default: false, type: Boolean }) readonly plain!: boolean; // 是否描边

  get btnCls() {
    return bem([
      this.type,
      this.size,
      {
        block: this.block,
        borderRadius: this.borderRadius,
        disabled: this.disabled || this.disabledGray,
        "disabled-gray": this.disabledGray,
        plain: this.plain
      }
    ]);
  }

  get hackBtnStyl() {
    const color: string[] = [this.color, "#fff"];
    const getClr = (isFontClr?: boolean): string =>
      color[isFontClr ? Number(!this.plain) : Number(this.plain)];
    return {
      backgroundColor: this.color && getClr(false),
      color: this.color && getClr(true),
      borderColor: this.color && this.color
    };
  }

  onClk(): void {
    if (!this.disabled && !this.disabledGray) {
      this.$emit("on-click");
      this.$emit("click");
    }
  }

  render(): JSX.Element {
    return (
      <button class={this.btnCls} style={this.hackBtnStyl} onClick={this.onClk}>
        <span class={bem("text", false)}>
          {this.$slots.default || this.text}
        </span>
      </button>
    );
  }
}
