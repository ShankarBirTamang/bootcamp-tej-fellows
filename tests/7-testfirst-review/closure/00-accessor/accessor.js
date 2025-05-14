/* eslint-disable no-unused-vars */
function accessor(obj) {
  return function (key, value) {
    if (arguments.length === 1) {
      return obj[key];
    } else {
      obj[key] = value;
    }
  };
}
