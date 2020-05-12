const dependencyTree = require("dependency-tree");
const path = require("path");
const fs = require("fs-extra");
const {
  WHITE_LIST,
  EMPTY_STYLE_COMPONENTS
} = require("../../common/constants");

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
 WHITE_LIST: [popup]
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
  const components = require("../../common/tools/getDirsFromPackages")(
    "general_components"
  );
  const checkList = WHITE_LIST.concat(components);
  const directory = path.resolve(__dirname, "../../lib");
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
        if (WHITE_LIST.every((x) => x !== name)) {
          result.push(name);
        }
        obj[file] && search(obj[file]);
      }
    });
  };
  search(dependence[filename]);
  return result;
}

module.exports = function genStylDepsImportDeclaration(ctx) {
  console.log("Run GenStylDepsImportDeclaration");

  const styleDepsArr = [...new Set(getDependence(ctx.dirname))];
  const outputPath = path.join(
    __dirname,
    "../../lib",
    ctx.dirname,
    "style/index.js"
  );
  if (EMPTY_STYLE_COMPONENTS.some((item) => item === ctx.dirname))
    fs.ensureFileSync(
      path.join(__dirname, "../../lib", ctx.dirname, "index.css")
    );
  const source = styleDepsArr
    .map((item) => {
      const reqPath =
        ctx.dirname === item ? "../index.css" : `../../${item}/index.css`;
      return `require("${reqPath}");`;
    })
    .join("\n");
  console.log(`组件 ${ctx.dirname} 注入依赖样式 ${styleDepsArr.join("/")}`);
  fs.outputFileSync(outputPath, source);
  console.log("Run GenStylDepsImportDeclaration Success");

  return ctx;
};
