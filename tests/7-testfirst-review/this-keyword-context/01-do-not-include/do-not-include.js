/* eslint-disable no-unused-vars, no-extend-native */
Array.prototype.doNotInclude = function (indices) {
  let indicesToExclude;
  if (Array.isArray(indices)) {
    indicesToExclude = indices;
  } else {
    indicesToExclude = [indices]; // convert to array
  }
  return this.filter((_, index) => !indicesToExclude.includes(index));
};
