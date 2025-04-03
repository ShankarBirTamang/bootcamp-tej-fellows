// YOUR CODE BELOW
function veryOdd(allNums) {
  let oddNums = [];
  for (let i = 0; i < allNums.length; i++) {
    if (allNums[i] % 2) {
      oddNums.push(allNums[i]);
    }
  }
  return oddNums;
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log("oddNums:", oddNums); // [1, 3, 5, 7];
console.log("allTheNums:", allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]
