// YOUR CODE BELOW
function myForEach(myArray, myCallBackFunction) {
  for (let i = 0; i < myArray.length; i++) {
    myCallBackFunction(myArray[i], i);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum); // 6
