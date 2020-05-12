const fs = require("fs-extra");
const path = require("path");

/**
 * compile task: genGlobalStyle
 * middleware: 生成lib下入口index.less 单独且最后流程
 * middleware: 生成lib下入口index.css 单独且最后流程
 */
module.exports = async (ctx) => {
  const libPath = path.resolve(__dirname, "../lib");
  const dirs = fs.readdirSync(libPath);
  let dirPaths = dirs.map((item) => path.join(libPath, item));
  dirPaths = dirPaths.filter((item) => fs.lstatSync(item).isDirectory());

  const importLess = require("../compiler/middlewares/importLess");
  const compileLess = require("../compiler/middlewares/compileLess");
  const compose = require("../common/tools/compose");
  let composeFn = compose(importLess);

  for (let i = 0; i < dirPaths.length; i++) {
    const start = dirPaths[i].lastIndexOf("/") + 1;
    ctx.setDirname(dirPaths[i].substr(start));
    composeFn(ctx);
    console.log("-----------------------------------------------------");
  }

  composeFn = compose(compileLess);
  composeFn(ctx);
  console.log("-----------------------------------------------------");
};
