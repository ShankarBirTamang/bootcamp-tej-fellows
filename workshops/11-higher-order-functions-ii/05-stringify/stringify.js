// YOUR CODE BELOW
function stringify(callBackFn) {
  return () => {
    console.log("stringify called");
    let result = callBackFn();
    return String(result);
  };
}

function returnsANumber() {
  return 100;
}

let newFunction = stringify(returnsANumber);
console.log(newFunction()); // => '100'
