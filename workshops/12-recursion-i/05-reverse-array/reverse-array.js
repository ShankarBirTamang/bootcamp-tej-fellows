// YOUR CODE BELOW
function reverseArray(arr) {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1]].concat(
    reverseArray(arr.slice(0, arr.length - 1))
  );
}

let arr = [1, 2, 3, 4];
let reversedArr = reverseArray(arr);

console.log(reversedArr); // [4,3,2,1]
console.log(arr); // [1,2,3,4]
