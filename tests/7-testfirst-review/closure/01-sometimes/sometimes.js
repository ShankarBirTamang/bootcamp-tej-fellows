/* eslint-disable no-unused-vars */
function sometimes(callback) {
  let count = 0;
  return function (...args) {
    count++;
    if (count <= 3) {
      return callback.apply(this, args);
    } else if (count % 2 === 0) {
      return "I do not know!";
    } else {
      return callback.apply(this, args);
    }
  };
}
