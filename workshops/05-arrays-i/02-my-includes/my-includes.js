// YOUR CODE BELOW
// function myIncludes(arrNumbers, searchValue) {
//   let result = false;
//   for (let i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] === searchValue) {
//       result = true;
//       break;
//     }
//   }
//   return result;
// }

//Alternatively
function myIncludes(arrNumbers, searchValue) {
  let result = false;
  result = arrNumbers.filter((num) => num === searchValue).length > 0;
  return result;
}

console.log(myIncludes([10, 20, 30], 20));
console.log(myIncludes(["apples", "bananas", "citrus"], "pears"));
console.log(myIncludes([1, 2, 3, "4"], 4));
