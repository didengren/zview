const fs = require("fs-extra");
const path = require("path");

// 挖掘深层次文件
exports.isDirectory = (originPath, dir) => {
  const dirs = fs.readdirSync(originPath);
  return dirs.some((item) => item === dir);
};
