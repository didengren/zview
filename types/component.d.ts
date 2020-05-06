import Vue from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    install?: (vue: any) => void;
  }
  interface FunctionalComponentOptions {
    install?: (vue: any) => void;
  }
}

export class ZueComponent extends Vue {
  static name: string;
  static install(vue: typeof Vue): void;
}
