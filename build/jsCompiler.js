const fs = require("fs-extra");
const path = require("path");
const babel = require("@babel/core");
const babelConf = {
  configFile: path.join(__dirname, "./babel.config.js")
};
const srcPath = path.resolve(__dirname, "../packages");
const scriptRegExp = /\.(js|ts|tsx)$/;

const isDir = (dir) => fs.lstatSync(dir).isDirectory();
const isScript = (fileName) => scriptRegExp.test(fileName);

module.exports = function jsCompiler(dir) {
  dir = /^\//.test(dir) ? dir : path.join(srcPath, dir);
  const fileNames = fs.readdirSync(dir);
  fileNames.forEach((item) => {
    const filePath = path.join(dir, item);
    const fileLibPath = filePath.replace("/packages/", "/lib/");

    if (isDir(filePath)) jsCompiler(filePath);

    if (isScript(item)) {
      console.log(`打包 ${filePath.replace(srcPath, "")}`);
      const { code } = babel.transformFileSync(filePath, babelConf);
      fs.outputFileSync(fileLibPath.replace(scriptRegExp, ".js"), code);
    }
  });
};
