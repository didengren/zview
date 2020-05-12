const components = require("../common/tools/getDirsFromPackages")("no_style");
const jsCompiler = require("../compiler/jsCompiler");

for (let i = 0; i < components.length; i++) {
  jsCompiler(components[i]);
}
