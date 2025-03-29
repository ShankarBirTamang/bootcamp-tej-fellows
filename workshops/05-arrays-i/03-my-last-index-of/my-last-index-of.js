// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx) {
  // If startIdx is not provided, we set it to the last of the array
  if (!startIdx || startIdx >= array.length) startIdx = array.length - 1;
  //Also ensuring , startIdx is within bounds
  if (startIdx < 0) startIdx = 0;
  //Looping backwards from startIdx
  for (let i = startIdx; i >= 0; i--) {
    if (array[i] === searchValue) {
      return i;
    }
  }
  //if not found , return -1
  return -1;
}

console.log(myLastIndexOf(["gee", "gee", "gee", "gee", "baby", "baby"], "gee"));
console.log(myLastIndexOf(["Tiffany", "Sunny", "Yoona"], "Jessica"));
console.log(
  myLastIndexOf(["the", "girls", "bring", "the", "boys", "out"], "the", 2)
);
