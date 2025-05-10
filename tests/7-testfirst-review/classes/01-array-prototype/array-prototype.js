/* eslint-disable no-unused-vars */
Array.prototype.maap = function (callback) {
  const result = [];
  this.forEach((item, index, array) => {
    result.push(callback(item, index, array));
  });
  return result;
};

Array.prototype.fiilter = function (callback) {
  const result = [];
  this.forEach((item, index, array) => {
    if (callback(item, index, array)) {
      result.push(item);
    }
  });
  return result;
};

Array.prototype.reeduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  this.slice(startIndex).forEach((item, index) => {
    const actualIndex = startIndex + index;
    accumulator = callback(accumulator, item, actualIndex, this);
  });

  return accumulator;
};
