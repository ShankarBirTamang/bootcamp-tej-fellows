// YOUR CODE BELOW
function functionLogger(myCallBackFunction, value) {
  console.log("Function starting.");
  let result = myCallBackFunction(value);
  console.log("Function complete.");
  return result;
}

function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
console.log(squareOfFour); // 16
