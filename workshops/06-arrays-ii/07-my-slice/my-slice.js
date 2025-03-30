// YOUR CODE BELOW

function mySlice(originalArray, startIdx, endIdx) {
  // If startIdx is not provided, return a copy of the original array
  if (startIdx === undefined) {
    return [...originalArray];
  }

  // Handle negative indices for startIdx and endIdx
  if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }
  if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }

  // If endIdx is undefined, include elements until the end of the array
  if (endIdx === undefined) {
    endIdx = originalArray.length;
  }

  // Initialize an empty array to store the result
  let resultArray = [];

  // Iterate through the array from startIdx to endIdx (excluding endIdx)
  for (let i = startIdx; i < endIdx; i++) {
    // Push each element from the original array to the resultArray
    resultArray.push(originalArray[i]);
  }

  return resultArray;
}

console.log(mySlice([1, 2, 3], 1, 2)); // => [2]
console.log(mySlice([1, 2, 3], 1)); // => [2, 3]
console.log(mySlice([1, 2, 3])); // => [1, 2, 3]
console.log(mySlice([1, 2, 3], -1)); // => [3]
console.log(mySlice([1, 2, 3], -2, -1)); // => [2]
