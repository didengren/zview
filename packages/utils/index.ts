import bem from "../bem";

export function use(name: string, app?: string) {
  return bem(name, app || "zue", true);
}
