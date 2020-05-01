const { addSideEffect } = require("@babel/helper-module-imports");

module.exports = function() {
  const lessSuffixRegExp = /^\.\.\/style\/[a-zA-Z]+\.less$/;
  return {
    visitor: {
      ImportDeclaration: {
        exit(path) {
          const { value } = path.node.source;
          // console.log(path.node.source, value);
          // console.log(
          //   "======================================================================================"
          // );
          if (lessSuffixRegExp.test(value)) {
            addSideEffect(path, value.replace(lessSuffixRegExp, ".css"));
            console.log("path______", path);
            console.log(
              "======================================================================================"
            );
            path.remove();
          }
        }
      }
    }
  };
};
