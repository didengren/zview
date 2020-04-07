export type Mod = string | { [index: string]: boolean };
export type Mods = Mod | Mod[];

export interface bem {
  (module?: Mods, modifiers?: Mods | boolean, autoAddParent?: boolean): Mods;
}

export interface ZuBem {
  (name: string, app?: string): bem;
}

declare module "vue/type/vue" {
  interface Vue {
    $bem: bem;
  }
}

export const Bem: ZuBem;
