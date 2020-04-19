const components = require("./getComponent");
const jsCompiler = require("./jsCompiler");

for (let i = 0; i < components.length; i++) {
  jsCompiler(components[i]);
}
