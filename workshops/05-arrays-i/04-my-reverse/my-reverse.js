// YOUR CODE BELOW

// function myReverse(myArray) {
//   let reversedArray = [];
//   for (let i = myArray.length - 1; i >= 0; i--) {
//     reversedArray.push(myArray[i]);
//   }
//   return reversedArray;
// }

// Alternatively , using unshift method instead of push

// function myReverse(array) {
//   // Create an empty array to store the reversed elements
//   const reversedArray = [];

//   // Loop through the original array from the first element to the last
//   for (let i = 0; i < array.length; i++) {
//     // Use unshift to add the element at the beginning of the new array
//     reversedArray.unshift(array[i]);
//   }

//   // Return the reversed array
//   return reversedArray;
// }

// Alternatively , using foreach method instead of for loop

function myReverse(array) {
  const reversedArray = [];

  array.forEach((element) => {
    reversedArray.unshift(element); // Insert at the beginning
  });

  return reversedArray;
}

console.log(myReverse([1, 2, 3]));
