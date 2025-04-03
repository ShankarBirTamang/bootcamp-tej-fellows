// YOUR CODE BELOW
function reverseArray(array) {
  let originalElements = [];

  //pop all elements from array , and store them in originalElements array
  while (array.length) {
    originalElements.push(array.pop());
  }

  //pop all of the elements from originalElements array and unshift them back into array
  while (originalElements.length) {
    array.unshift(originalElements.pop());
  }
  return array;
}

//Alternatively
// function reverseArray(array) {
//     let left = 0, right = array.length - 1;

//     while (left < right) {
//       [array[left], array[right]] = [array[right], array[left]]; // Swap
//       left++;
//       right--;
//     }

//     return array;
//   }

// let myArray = [1, 2, 3, 4];
// reverseArray(myArray);
// console.log(myArray); // [4, 3, 2, 1]
