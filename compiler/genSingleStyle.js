/**
 * compile task: genSingleStyle
 * middleware: 提取packages/style/*.less到lib/style/*.less [copyStylToLib]
 * middleware: lib/style下编译less [compileLess]
 * middleware: 提取packages/${dir}/index.less到lib/${dir}/index.less [copyStylToLib]
 * middleware: lib/${dir}下编译less [compileLess]
 */
module.exports = async (ctx) => {
  const path = require("path");
  const fs = require("fs-extra");
  const { STYLE_EXTS } = require("../common/constants");
  const { isDirectory } = require("../common/tools");
  const sortStylByDepsOrder = require("../common/tools/sortStylByDepsOrder");

  const generalComponents = require("../common/tools/getDirsFromPackages")(
    "general_components"
  );
  let styleDirname = require("../common/tools/getDirsFromPackages")(
    "pure_style"
  );
  styleDirname = sortStylByDepsOrder(styleDirname);

  const copyStylToLib = require("../compiler/middlewares/copyStylToLib");
  const compileLess = require("../compiler/middlewares/compileLess");

  const middlewares = [copyStylToLib, compileLess];
  const composeFn = require("../common/tools/compose")(...middlewares);

  function emitHook(originSourcePath) {
    ctx.setSourcePath(originSourcePath);
    composeFn(ctx);
    console.log("-----------------------------------------------------");
  }

  for (let i = 0; i < styleDirname.length; i++) {
    let originSourcePath = path.join(__dirname, "../packages/style");

    if (!isDirectory(originSourcePath, styleDirname[i])) {
      originSourcePath = path.join(
        originSourcePath,
        `${styleDirname[i]}${STYLE_EXTS[1]}`
      );

      emitHook(originSourcePath);
    } else {
      const temp_path = path.join(originSourcePath, styleDirname[i]);
      const dirs = fs.readdirSync(temp_path);

      for (let j = 0; j < dirs.length; j++) {
        originSourcePath = path.join(temp_path, `${dirs[j]}`);

        emitHook(originSourcePath);
      }
    }
  }

  for (let i = 0; i < generalComponents.length; i++) {
    const originSourcePath = path.join(
      __dirname,
      "../packages",
      `${generalComponents[i]}/index${STYLE_EXTS[1]}`
    );

    emitHook(originSourcePath);
  }
};
