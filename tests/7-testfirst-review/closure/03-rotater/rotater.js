/* eslint-disable no-unused-vars */
function rotater(str) {
  let direction = 1;
  return function (rotations) {
    if (rotations === str.length && str.length !== 0) {
      direction *= -1;
    }

    // let effectiveRotation = rotations % str.length;
    // if (effectiveRotation < 0) {
    //   effectiveRotation += str.length; // add str.length to make it positive
    // }
    let result;
    if (direction === 1) {
      result = str.slice(rotations) + str.slice(0, rotations); //left rotation
    } else {
      result = str.slice(-rotations) + str.slice(0, -rotations); //right rotation
    }
    return result;
  };
}
