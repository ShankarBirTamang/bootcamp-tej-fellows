/* eslint-disable no-unused-vars, no-prototype-builtins */
function alternate(func) {
  let shouldCall = true;
  return function () {
    if (shouldCall) {
      func();
    }
    shouldCall = !shouldCall; //toggle for next call
  };
}

function twice(func) {
  let callCount = 0;
  return function () {
    if (callCount < 2) {
      callCount++;
      return func();
    } else {
      return 0;
    }
  };
}
