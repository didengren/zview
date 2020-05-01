const fs = require("fs-extra");
const path = require("path");
const { STYLE_EXTS } = require("./constants");

const srcPath = path.join(__dirname, "../packages");
const getStylePath = (name) =>
  path.join(srcPath, name, `index${STYLE_EXTS[1]}`);

exports.checkComponentHasStyle = (component) =>
  fs.existsSync(getStylePath(component));
