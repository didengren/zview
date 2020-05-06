const dependencyTree = require("dependency-tree");
const path = require("path");
const fs = require("fs-extra");
const { STYLE_EXTS } = require("../common/constants");

const whiteList = ["popup"];
const emptyStyleComponents = ["bem", "utils"];

function getComponentNameFromPath(file) {
  let last = file.lastIndexOf("/");
  file = file.substr(0, last);
  last = file.lastIndexOf("/");
  return file.substr(last + 1);
}

/**
 component: button
 result: [button]
 components: [bem, button, cell - group, content - card, dialog, ...]
 whiteList: [popup]
 checkList: [popup, bem, button, cell - group, content - card, ..., loading]
 directory: "/Users/xunianzu/Downloads/esc-ui-master/lib"
 filename: "@/lib/button/index.js"


 obj: {
   '@/lib/loading/loading.js': {
     '@/lib/utils/index.js': {
       '@/lib/bem/index.js': {}
     }
   },
   '@/lib/utils/index.js': {
     '@/lib/bem/index.js': {}
   }
 }

 file in Object.keys(obj): ["@/lib/loading/loading.js", "@/lib/utils/index.js"]

 name: ["loading", "utils"]

 result: ["button", "loading"]
   -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
   obj: {
     '@/lib/utils/index.js': {
       '@/lib/bem/index.js': {}
     }
   }
 file in Object.keys(obj): ["@/lib/utils/index.js"]
 name: ["utils"]
 result: ["button", "loading"]
   -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
 */
function getDependence(component) {
  const result = [component];
  const components = require("./getComponent")("style");
  const checkList = whiteList.concat(components);
  const directory = path.resolve(__dirname, "../lib");
  const filename = path.join(directory, component, "index.js");
  const dependence = dependencyTree({
    directory,
    filename,
    filter: (path) => !~path.indexOf("node_modules")
  });

  const search = (obj) => {
    Object.keys(obj).forEach((file) => {
      const name = getComponentNameFromPath(file);
      if (checkList.some((x) => x === name)) {
        if (whiteList.every((x) => x !== name)) {
          result.push(name);
        }
        obj[file] && search(obj[file]);
      }
    });
  };
  search(dependence[filename]);
  return result;
}

exports.genStylDepsImportDeclaration = (component) => {
  const styleDepsArr = [...new Set(getDependence(component))];
  const outputPath = path.join(
    __dirname,
    "../lib",
    component,
    "style/index.js"
  );
  if (emptyStyleComponents.some((item) => item === component))
    fs.ensureFileSync(path.join(__dirname, "../lib", component, "index.css"));
  console.log("styleDepsArr_____", component, styleDepsArr);
  const source = styleDepsArr
    .map((item) => {
      const reqPath =
        component === item ? "../index.css" : `../../${item}/index.css`;
      return `require("${reqPath}");`;
    })
    .join("\n");
  console.log(`组件 ${component} 注入依赖样式 ${styleDepsArr.join("/")}`);
  fs.outputFileSync(outputPath, source);
};

exports.genPackageEntryStyle = (dirname) => {
  const pkgPath = path.resolve(__dirname, "../packages");
  const libPath = path.resolve(__dirname, "../lib");
  let origin = path.join(pkgPath, `${dirname}/index${STYLE_EXTS[1]}`);
  let dest = path.join(libPath, `${dirname}/index${STYLE_EXTS[1]}`);
  fs.copySync(origin, dest);
};
