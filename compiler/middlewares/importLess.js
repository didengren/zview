const fs = require("fs-extra");
const path = require("path");

let content = "";
let relativeLessPath = "";
const libPath = path.resolve(__dirname, "../../lib");
const outputPath = path.join(libPath, "index.less");

module.exports = function genGlobalStyle(ctx) {
  console.log("Run ImportLess");

  if (ctx.dirname === "style") relativeLessPath = `./${ctx.dirname}/base.less`;
  else relativeLessPath = `./${ctx.dirname}/index.less`;

  const checkPath = path.resolve(libPath, relativeLessPath);
  if (fs.pathExistsSync(checkPath)) {
    content += `@import "${relativeLessPath}";\n`;
  }

  fs.outputFileSync(outputPath, content);
  ctx.setSourcePath(outputPath);

  console.log("Run ImportLess Success");

  return ctx;
};
