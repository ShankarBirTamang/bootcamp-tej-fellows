// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
  const length = originalArray.length;

  // If rotateNum is 0, return a copy of the original array
  if (rotateNum === 0) {
    return originalArray.slice();
  }

  //Handling both positive and negative rotations
  rotateNum = rotateNum % length;
  if (rotateNum < 0) {
    rotateNum += length;
  }

  // New array to hold the result
  let resultArray = [];

  // Rotate the array
  for (let i = 0; i < length; i++) {
    resultArray[i] = originalArray[(i - rotateNum + length) % length];
  }

  return resultArray;
}

console.log(rotateArray([1, 2, 3, 4, 5], 1)); // => [5, 1, 2, 3, 4]
console.log(rotateArray([1, 2, 3, 4, 5], -1)); // => [2, 3, 4, 5, 1]
console.log(rotateArray([1, 2, 3, 4, 5], 0)); // => [1, 2, 3, 4, 5]
