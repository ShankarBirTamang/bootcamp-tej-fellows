// YOUR CODE BELOW
let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

function callThemAll(myObject, myValue) {
  let result = [];

  for (let myMethod in myObject) {
    if (typeof myObject[myMethod] === "function") {
      console.log("myMethod: ", myMethod); //checkpoint
      result.push(myObject[myMethod](myValue));
    }
  }
  console.log(result); //checkpoint
  return result;
}

callThemAll(addsNums, 100);
/*
return result(array) = push(returnValue)
*/
