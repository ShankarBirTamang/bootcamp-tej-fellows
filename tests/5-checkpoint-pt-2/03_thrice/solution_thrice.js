/* eslint-disable no-unused-vars */
function thrice(callback) {
  let count = 0;
  return function () {
    while (count < 3) {
      count++;
      return callback();
    }
  };
}

let eight;

eight = thrice(() => 8);

console.log(typeof eight);
const value = eight() + eight() + eight();
console.log(typeof value + " : " + value);
console.log(eight());
