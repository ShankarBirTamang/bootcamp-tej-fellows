// YOUR CODE BELOW
// function sumNums(num) {
//   if (num >= 1) {
//     console.log(num);

//     return num + sumNums(num - 1);
//   } else {
//     return num; // base case
//   }
// }

//Alternatively
function sumNums(n) {
  if (n === 1) return 1; // base case: sum of 1 is 1
  return n + sumNums(n - 1); // recursive step: add current number to sum of (n - 1)
}

console.log(sumNums(3));
