const fs = require("fs-extra");
const path = require("path");
const { CLS_OF_DIRS_IN_PACKAGES } = require("../../common/constants");

const baseExcludes = ["style", ".DS_Store"];
const hasStyleExcludes = ["mixins", "utils"];
const onlyHasStyle = ["style"];

function getExcludesFn(type) {
  let excludes;
  switch (type) {
    case undefined | CLS_OF_DIRS_IN_PACKAGES[0]:
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
  const dirs = fs.readdirSync(path.resolve(__dirname, "../packages"));
  const exclds = getExcludesFn(type);
  return dirs.filter((item) =>
    exclds ? !~exclds.indexOf(item) : onlyHasStyle[0] === item
  );
};
