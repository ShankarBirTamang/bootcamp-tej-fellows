// YOUR CODE BELOW
function mySplice(array, startIndex, deleteCount, newValue) {
  let removedElements = [];
  let keptElements = [];

  //keeping all elements before the start index
  for (let i = 0; i < startIndex; i++) {
    keptElements.push(array[i]);
  }

  //at startIdx , add the newValue
  if (newValue !== undefined) {
    keptElements.push(newValue);
  }
  //keeping all elements that are removed at removedElements
  for (let i = startIndex; i < startIndex + deleteCount; i++) {
    removedElements.push(array[i]);
  }
  //keeping all elements that are remained at keptElements Array
  for (let i = startIndex + deleteCount; i < array.length; i++) {
    keptElements.push(array[i]);
  }
  //making original array empty
  while (array.length) {
    array.pop();
  }

  //pushing only those elements that are kept in the keptElements array
  for (let i = 0; i < keptElements.length; i++) {
    array.push(keptElements[i]);
  }

  return removedElements;
}

let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, "apples"); // => [2]

console.log(myArray);
