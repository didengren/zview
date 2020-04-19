const { addSideEffect } = require("@babel/helper-module-imports");

module.exports = function() {
  return {
    visitor: {
      ImportDeclaration: {
        exit(path) {
          const { value } = path.node.source;
          console.log(path.node.source, value);
          console.log(
            "======================================================================================"
          );
        }
      }
    }
  };
};
