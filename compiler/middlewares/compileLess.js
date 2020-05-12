const CleanCSS = require("clean-css");
const fs = require("fs-extra");
const less = require("less");
const { STYLE_EXTS } = require("../../common/constants");

module.exports = function compileLess(ctx) {
  console.log("Run CompileLess_____", ctx.sourcePath);

  try {
    if (fs.pathExistsSync(ctx.sourcePath)) {
      const cleanCSS = new CleanCSS();
      const source = fs.readFileSync(ctx.sourcePath, "utf-8");
      const outputPath = ctx.sourcePath.replace(STYLE_EXTS[1], STYLE_EXTS[0]);

      // https://github.com/youzan/vant/blob/26449eb1eaa1b5a4c05f6482addf6f23b2ba8d01/packages/vant-cli/src/compiler/compile-less.ts#L18
      // http://lesscss.org/usage/#less-options
      // notice: then set the filename field on options to be the filename of the main file. less will handle all the processing of the imports.
      less.render(
        source,
        {
          filename: ctx.sourcePath
        },
        (error, output) => {
          if (error) throw new Error(error);
          fs.outputFileSync(outputPath, cleanCSS.minify(output.css).styles);
        }
      );

      console.log("Run CompileLess Success");
    } else throw new Error(`${ctx.sourcePath} 该文件不存在`);
  } catch (error) {
    console.error(error);
  }

  return ctx;
};
