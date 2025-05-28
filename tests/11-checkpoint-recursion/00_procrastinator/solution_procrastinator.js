/* eslint-disable no-unused-vars */
function procrastinator(str) {
  let index = 0;
  return function () {
    let char = str[index];
    index = (index + 1) % str.length;
    return char;
  };
}
