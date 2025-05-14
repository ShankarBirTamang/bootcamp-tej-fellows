/* eslint-disable no-unused-vars */
function makeIterator(array = []) {
  let currentIndex = 0;
  return {
    getNext: function () {
      return {
        done: currentIndex === array.length,
        value: array[currentIndex++],
      };
    },
    getIndex: function () {
      return currentIndex;
    },
  };
}
