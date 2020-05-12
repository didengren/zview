// TODO LIST
//
// compile task: genSingleStyle
// middleware: 提取packages/style/下less到lib/style/下 [copyStylToLib]
// middleware: lib/style下编译less [compileLess]
// middleware: 提取packages/dir/index.less到lib/dir/index.less [copyStylToLib]
// middleware: lib/dir下编译less [compileLess]

// compile task: genStyleEntry
// middleware: 提取lib/dir/index.css到lib/dir/style/index.js [genStylDepsImportDeclaration]
//
// compile task: genGlobalStyle
// middleware: 生成lib下入口index.less 单独且最后流程
// middleware: 生成lib下入口index.css 单独且最后流程

const genSingleStyle = require("../compiler/genSingleStyle");
const genStyleEntry = require("../compiler/genStyleEntry");
const genGlobalStyle = require("../compiler/genGlobalStyle");

function SingleStyleCTX() {
  this.dirname = "";
  this.sourcePath = void 0;
}
SingleStyleCTX.prototype = {
  setDirname(dirname) {
    this.dirname = dirname;
  },
  setSourcePath(sourcePath) {
    this.sourcePath = sourcePath;
  }
};

const tasks = [
  {
    text: "Build Single-component Style",
    task: genSingleStyle
  },
  {
    text: "Build Style Entry",
    task: genStyleEntry
  },
  {
    text: "Build Global Style",
    task: genGlobalStyle
  }
];

async function buildStyleBootStrap() {
  const ctx = new SingleStyleCTX();

  for (let i = 0; i < tasks.length; i++) {
    const { text, task } = tasks[i];
    console.log(text);
    await task(ctx);
    console.log(`${text} Success`);
    console.log("=========================================================");
  }
}

buildStyleBootStrap();
