const fs = require("fs-extra");
const path = require("path");
const { CLS_OF_DIRS_IN_PACKAGES, STYLE_EXTS } = require("../constants");

const baseExcludes = ["style", ".DS_Store"];
const hasStyleExcludes = ["mixins", "utils"];
const onlyHasStyle = ["style"];

function getExcludesFn(type) {
  let excludes;
  switch (type) {
    case undefined || CLS_OF_DIRS_IN_PACKAGES[0]:
      excludes = baseExcludes.concat(hasStyleExcludes);
      break;
    case CLS_OF_DIRS_IN_PACKAGES[1]:
      excludes = baseExcludes;
      break;
    case CLS_OF_DIRS_IN_PACKAGES[2]:
      excludes = undefined;
      break;
    default:
      break;
  }
  return excludes;
}

module.exports = function(type) {
  let dirs;
  const exclds = getExcludesFn(type);
  if (exclds === undefined) {
    dirs = fs.readdirSync(
      path.resolve(__dirname, `../../packages/${onlyHasStyle[0]}`)
    );
    return dirs.map((item) => item.replace(STYLE_EXTS[1], ""));
  } else {
    dirs = fs.readdirSync(path.resolve(__dirname, "../../packages"));
    return dirs.filter((item) => !~exclds.indexOf(item));
  }
};
