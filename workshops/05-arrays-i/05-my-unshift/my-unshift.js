// function myUnshift(array, value) {
//   let newArray = [value];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

//Alternatively without using push method (Simple way)
// function myUnshift(arr, value) {
//   let newArr = [value]; // Start with the new value
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i + 1] = arr[i]; // Shift elements to the right
//   }
//   return newArr;
// }

//Alternatively , shortest way using spread operator
const myUnshift = (arr, value) => [value, ...arr];

// Test cases
console.log(myUnshift([1, 2, 3], 0)); // => [0, 1, 2, 3]
console.log(myUnshift([], 5)); // => [5]
console.log(myUnshift(["b", "c"], "a")); // => ['a', 'b', 'c']
console.log(myUnshift([1, 2, 3], 0));
