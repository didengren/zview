const components = require("../build/getComponent")("style");
const { checkComponentHasStyle } = require("../common/utils");
const { genPackageEntryStyle } = require("../build/styleEntryCompiler");

for (let i = 0; i < components.length; i++) {
  if (checkComponentHasStyle(components[i])) {
    genPackageEntryStyle(components[i]);
  }
}
