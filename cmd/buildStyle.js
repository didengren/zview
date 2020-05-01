const components = require("../build/getComponent")("style");
const { cssCompiler, pureCssCompiler } = require("../build/cssCompiler");
const fs = require("fs-extra");
const { checkComponentHasStyle } = require("../common/utils");

for (let i = 0; i < components.length; i++) {
  if (checkComponentHasStyle(components[i])) {
    cssCompiler(components[i]);
  }
}

pureCssCompiler("style");
