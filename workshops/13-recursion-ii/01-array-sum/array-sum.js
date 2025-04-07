// YOUR CODE BELOW

//Method No.1
// function arraySum(arrNumbers) {
//   let sum = 0;
//   for (let item of arrNumbers) {
//     if (Array.isArray(item)) {
//       sum += arraySum(item); // recursive call
//     } else {
//       sum += item; //Add number directly
//     }
//   }
//   return sum;
// }

//Method no2. Using reduce method
// function arraySum(arrNumbers) {
//   return arrNumbers.reduce((sum, item) => {
//     if (Array.isArray(item)) {
//       return sum + arraySum(item);
//     } else {
//       return sum + item;
//     }
//   }, 0);
// }

//Method no3. FSA method
function arraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    // if the current element is an inner array...
    if (Array.isArray(element)) {
      // ...add the sum of the inner array to the sum variable
      sum += arraySum(element);
    }

    // else, the element must be a number; just add it to the sum
    else {
      sum += element;
    }
  }

  return sum;
}

console.log(arraySum([1, [2, 3, [4]]])); // => 10
