// e.g.
// function compose(f, g) {
//   return function(x) {
//     return f(g(x));
//   };
// }

function compose() {
  var args = Array.prototype.slice.apply(arguments);
  if (args.constructor === Array && args.length > 0) args.reverse();
  return function() {
    var start = args.length - 1;
    var result = args[start].apply(this, arguments);
    while (start) {
      result = args[--start].call(this, result);
    }
    return result;
  };
}

module.exports = compose;
