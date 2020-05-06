const CleanCSS = require("clean-css");
const fs = require("fs-extra");
const less = require("less");
const path = require("path");

const srcPath = path.join(__dirname, "../packages");
const libPath = path.join(__dirname, "../lib");
const getStylePath = (name) => path.join(srcPath, name, "index.less");

const cleanCSS = new CleanCSS();

exports.cssCompiler = (dir) => {
  if (!dir || dir.length <= 0) return void 0;

  const originFilePath = getStylePath(dir);
  const source = fs.readFileSync(originFilePath, "utf-8");
  const fileLibPath = path.join(libPath, dir, "index.css");

  console.log(`编译 ${dir}/index.less`);

  // https://github.com/youzan/vant/blob/26449eb1eaa1b5a4c05f6482addf6f23b2ba8d01/packages/vant-cli/src/compiler/compile-less.ts#L18
  // http://lesscss.org/usage/#less-options
  // notice: then set the filename field on options to be the filename of the main file. less will handle all the processing of the imports.
  less.render(source, { filename: originFilePath }, (error, output) => {
    if (error) throw new Error(error);
    fs.outputFileSync(fileLibPath, cleanCSS.minify(output.css).styles);
  });
};

exports.pureCssCompiler = (dir) => {
  const originPath = path.join(srcPath, dir);
  if (!fs.existsSync(originPath)) return void 0;

  const dirs = fs.readdirSync(originPath);
  for (let i = 0; i < dirs.length; i++) {
    const source = fs.readFileSync(path.join(originPath, dirs[i]), "utf-8");
    const outputPath = path.join(
      libPath,
      "style",
      dirs[i].replace(".less", ".css")
    );
    console.log(`编译 ${originPath}/${dirs[i]}`);

    less.render(source, (error, output) => {
      if (error) throw new Error(error);
      // console.log("less.render output____", output);
      fs.outputFileSync(outputPath, cleanCSS.minify(output.css));
    });
  }
};
