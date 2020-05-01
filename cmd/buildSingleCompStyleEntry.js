const components = require("../build/getComponent")("style");
const { genStylDepsImportDeclaration } = require("../build/styleEntryCompiler");

for (let i = 0; i < components.length; i++) {
  genStylDepsImportDeclaration(components[i]);
}
