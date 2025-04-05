// YOUR CODE BELOW
// function partial(callBackFn, argumentA) {
//   return function (argumentB) {
//     return callBackFn(argumentA, argumentB);
//   };
// }

//Alternate solution:
//using arrow anonymous function
const partial = (callBackFn, argumentA) => (argumentB) =>
  callBackFn(argumentA, argumentB);

function summer(a, b) {
  return a + b;
}

let sumFive = partial(summer, 5);
console.log(sumFive(10));
// => 15;
