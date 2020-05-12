module.exports = (arr) => {
  function getNumByType(type) {
    switch (type) {
      case "var":
        return 1;
      case "mixins":
        return 2;
      case "base":
        return 4;
      default:
        return 3;
    }
  }
  arr.sort((a, b) => getNumByType(a) - getNumByType(b));

  return arr;
};
