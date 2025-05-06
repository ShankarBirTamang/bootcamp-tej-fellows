/* eslint-disable no-unused-vars */
function reject(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// let arrayOfNumbers = [4, -57, 1778, -43, 9, 89, -345];
// let isNegNum = (num) => {
//   return num < 0;
// };

// let positiveNumsOnly = reject(arrayOfNumbers, isNegNum);
// console.log(positiveNumsOnly);

// //2nd part
// let arrayOfWords = [
//   "testing",
//   "bye",
//   "fly",
//   "hello",
//   "too",
//   "zoo",
//   "pie",
//   "function",
// ];

// let greaterThanThree = (word) => {
//   return word.length > 3;
// };

// let wordsLessThanThree = reject(arrayOfWords, greaterThanThree);
// console.log(wordsLessThanThree);

// // isNegNum(4);
// // isNegNum(-4);
// // greaterThanThree(5);
// // greaterThanThree(-4);
// console.log(reject([-4, 5, 10], isNegNum));
// console.log(reject(["one", "three", "five", "three"], greaterThanThree));
