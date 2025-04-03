// YOUR CODE BELOW
// function deeperCopy(myArray) {
//   let copy = [];
//   for (let i = 0; i < myArray.length; i++) {
//     if (Array.isArray(myArray)) {
//       let nestedCopy = [];
//       for (let j = 0; j < myArray[i].length; j++) {
//         nestedCopy.push(myArray[i][j]);
//       }
//       copy.push(nestedCopy);
//     } else {
//       copy.push(myArray[i]);
//     }
//   }
//   return copy;
// }

//Alternatively (shortest way)
const deeperCopy = (myArray) =>
  myArray.map((item) => (Array.isArray(item) ? [...item] : item));

//main
let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]]
