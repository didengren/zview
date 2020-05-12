/**
 * compile task: genStyleEntry
 * middleware: 提取lib/${dir}/index.css到lib/${dir}/style/index.js [genStylDepsImportDeclaration]
 */
module.exports = async (ctx) => {
  const generalComponents = require("../common/tools/getDirsFromPackages")(
    "general_components"
  );

  const genStylDepsImportDeclaration = require("../compiler/middlewares/genStylDepsImportDeclaration");
  const composeFn = require("../common/tools/compose")(
    genStylDepsImportDeclaration
  );

  for (let i = 0; i < generalComponents.length; i++) {
    ctx.setDirname(generalComponents[i]);
    composeFn(ctx);
    console.log("-----------------------------------------------------");
  }
};
