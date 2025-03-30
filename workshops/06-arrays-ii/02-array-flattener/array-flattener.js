// YOUR CODE BELOW

function arrayFlattener(twoDArray) {
  let flatArray = [];
  for (let i = 0; i < twoDArray.length; i++) {
    let element = twoDArray[i];
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        let innerElement = element[j];
        flatArray.push(innerElement);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
}
console.log(arrayFlattener([1, [2, 3], 4]));
