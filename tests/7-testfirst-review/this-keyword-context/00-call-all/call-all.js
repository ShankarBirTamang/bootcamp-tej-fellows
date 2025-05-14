/* eslint-disable no-unused-vars */
function callAll(obj, funcArray) {
  return funcArray.map(function (fn) {
    return fn.call(obj);
  });
}
