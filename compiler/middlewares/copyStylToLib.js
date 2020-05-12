const fs = require("fs-extra");

module.exports = function copyStylToLib(ctx) {
  console.log("Run CopyStylToLib");

  let origin = ctx.sourcePath;
  fs.ensureFileSync(origin);
  let dest = ctx.sourcePath.replace("/packages/", "/lib/");

  fs.copySync(origin, dest);

  ctx.setSourcePath(dest);
  console.log("Run CopyStylToLib Success");

  return ctx;
};
