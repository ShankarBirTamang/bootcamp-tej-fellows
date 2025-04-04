// YOUR CODE BELOW
function chainReaction(startingValue, functionArray) {
  let result = startingValue;
  functionArray.forEach((callBackFunction) => {
    result = callBackFunction(result);
    console.log("result: ", result);
  });
  return result;
}

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]); // => -15
