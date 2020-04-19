const fs = require("fs-extra");
const path = require("path");

const baseExcludes = [".DS_Store"];

function getExcludesFn(type) {
  let excludes;
  switch (type) {
    case undefined:
      excludes = baseExcludes;
      break;
    default:
      break;
  }
  return excludes;
}

module.exports = function(type) {
  const dirs = fs.readdirSync(path.resolve(__dirname, "../packages"));
  console.log("packages底下文件____", dirs);
  const exclds = getExcludesFn(type);
  return dirs.filter((item) => !~exclds.indexOf(item));
};
