const fs = require("fs-extra");
const path = require("path");

// 判断dir是否是文件夹
exports.isDirectory = (originPath, dir) => {
  const dirs = fs.readdirSync(originPath);
  return dirs.some((item) => item === dir);
};
