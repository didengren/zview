const components = require("../build/getComponent")();
const jsCompiler = require("../build/jsCompiler");

for (let i = 0; i < components.length; i++) {
  jsCompiler(components[i]);
}
