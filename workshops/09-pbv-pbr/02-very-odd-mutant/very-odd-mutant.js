// YOUR CODE BELOW
function veryOddMutant(allNums) {
  let count = 0;

  for (let i = 0; i < allNums.length; i++) {
    let num = allNums[i];
    if (num % 2 == 0) {
      allNums[i] = "normie";
      count++;
    }
  }
  return count;
}
// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let countRemoved = veryOddMutant(allTheNums);

// console.log("allTheNums:", allTheNums);
// // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log("countRemoved:", countRemoved);
// // 4
