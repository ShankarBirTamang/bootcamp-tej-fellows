// YOUR CODE BELOW
function myJoin(array, separator = ",") {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    let element = array[i] === null ? "" : array[i];
    result += element;
    if (i < array.length - 1) {
      result += separator;
    }
  }

  return result;
}

console.log(myJoin(["let's", "make", "a", "list"], " "));
console.log(myJoin(["a", "b", "c"], "+"));
console.log(myJoin(["Peter", "Paul", "Mary"]));
