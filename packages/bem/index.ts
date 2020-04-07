import { Mod, Mods } from "types/bem";

type PrefixFn = {
  (key?: string): string;
};

const MODULE = "__";
const MODIFIER = "--";

/**
 * 拼接成完整的class名
 * @param name button
 * @param app zue
 * @returns {Function} (subName?: string) => 如果name不含"__" 则返回zue-nav__${subName} 反之返回nav__${subName}
 * @param subName disabled-gray
 * @returns {String} zue-button__disabled-gray
 */
function addSymbol(name: string, app?: string) {
  const isModule = new RegExp(MODULE).test(name);
  return (subName?: string) =>
    !isModule
      ? (app ? `${app}-` : "") + name + (subName ? MODULE + subName : "")
      : name + (subName ? MODIFIER + subName : "");
}

/**
 * 返回class选择器值的集合
 * @param prefix
 * @param cls
 * @param autoAddParent
 */
function join(
  prefix: PrefixFn,
  cls: Mods,
  autoAddParent: boolean = true
): Mods {
  const ret: Set<Mod> = new Set();

  if (autoAddParent) {
    ret.add(prefix());
  }

  if (typeof cls === "string") {
    ret.add(prefix(cls));
  } else if (Array.isArray(cls)) {
    let arr: Mod[] = [];
    cls.forEach((item: Mod): void => {
      arr = arr.concat(join(prefix, item, autoAddParent));
    });
    arr.forEach((item: Mod): void => {
      ret.add(item);
    });
  } else if (typeof cls === "object") {
    const tmp: Mods = {};
    Object.keys(cls).map((key: string): void => {
      tmp[prefix(key)] = cls[key];
    });
    ret.add(tmp);
  }
  return [...ret];
}

/**
 * css BEM 规则辅助函数
 * 用法举例：
 * 1. 初始化命名空间 const bem = Bem('button') => zue-button
 * 2. bem 接受 3 个参数，模块、修饰符、是否自动添加父级 class
 *    1. 模块举例：
 *      - bem() => 'zue-button'
 *      - bem('large') => ['zue-button', 'zue-button__large'] 自动添加了父级 class
 *      - bem('large', false) => ['zue-button__large']
 *      - bem({ large: true, plain: false }) => ['zue-button', 'zue-button__large']
 *      - bem(['primary', { plain: true }])  => ['zue-button', 'zue-button__large', 'zue-button__plain']
 *    2. 修饰符举例（模块只能是字符串）：
 *      - bem('primary', 'text') => ['zue-button__primary', 'zue-button__primary--text'] 自动添加了父级 class
 *      - bem('primary', ['text', { loading: true }], false) => ['zue-button__primary--text', { 'zue-button__primary--loading': true }]
 */
const bem = (name: string, app?: string, defaultAuto: boolean = false) => (
  module?: Mods,
  modifiers?: Mods | boolean,
  autoAddParent?: boolean
): Mods => {
  if (typeof modifiers === "boolean") {
    autoAddParent = modifiers;
    modifiers = undefined;
  }
  let auto = autoAddParent === undefined ? defaultAuto : autoAddParent;
  const prefix: PrefixFn = addSymbol(name, app);
  if (!module) {
    return prefix();
  } else if (typeof module === "string" && modifiers) {
    return join(addSymbol(prefix(module), app), modifiers, auto);
  }
  return join(prefix, module, auto);
};

export default bem;
