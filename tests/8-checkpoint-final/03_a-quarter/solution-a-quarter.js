/* eslint-disable no-unused-vars, no-prototype-builtins */
function aQuarter(func) {
  let callCount = 0;
  return function (...args) {
    callCount++;
    if (callCount % 4 === 0) {
      return func(...args);
    } else {
      return "something went wrong :/";
    }
  };
}
