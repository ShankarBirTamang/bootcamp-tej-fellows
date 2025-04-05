// YOUR CODE BELOW
function cacheSavings(myCallBackFn) {
  //create an object to store the returned values
  //the keys will be the arguments given to the callback
  //the values will be the returned value from the callback

  let cache = {};

  return function (argument) {
    //check if the argument is already in the cache
    if (!(argument in cache)) {
      //if not, call the callback with the argument
      // and store the returned value in the cache
      let callBackResult = myCallBackFn(argument);
      cache[argument] = callBackResult;
    }
    //return the value from the cache
    return cache[argument];
  };
}

function adds10(num) {
  let start = Date.now();
  let end = Date.now();

  // pause for 3 seconds, to make the function expensive!
  while (end - start < 3000) {
    end = Date.now();
  }

  return num + 10;
}

let cachedAdds10 = cacheSavings(adds10);

console.log(cachedAdds10(20)); // => returns 30, takes 3 seconds!
console.log(cachedAdds10(0)); // returns 10, takes 3 seconds!
console.log(cachedAdds10(20)); // => returns 30, takes no time at all!
