const fs = require("fs-extra");
const path = require("path");

const baseExcludes = ["style", ".DS_Store"];
const hasStyleExcludes = ["mixins", "utils"];

function getExcludesFn(type) {
  let excludes;
  switch (type) {
    case undefined:
      excludes = baseExcludes;
      break;
    case "style":
      excludes = baseExcludes.concat(hasStyleExcludes);
      break;
    default:
      break;
  }
  return excludes;
}

module.exports = function(type) {
  const dirs = fs.readdirSync(path.resolve(__dirname, "../packages"));
  const exclds = getExcludesFn(type);
  return dirs.filter((item) => !~exclds.indexOf(item));
};
