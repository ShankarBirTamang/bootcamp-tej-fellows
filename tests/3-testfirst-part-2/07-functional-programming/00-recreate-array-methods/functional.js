/* eslint-disable no-unused-vars */

// Array.prototype.myForEach = function (callBackFunction) {
//   for (let i = 0; i < this.length; i++) {
//     callBackFunction(this[i], i);
//   }
// };

// const myArray = ["soccer", "swimming", "softball", "water-polo"];
// myArray.myForEach((sport, i) => console.log(sport + " index : " + i));

/*

Warmup - Re-Implement the Array.prototype.forEach method

*/

const forEach = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

forEach(["soccer", "swimming", "softball", "water-polo"], (sport) =>
  console.log(sport)
);

/*

Re-Implement the Array.prototype.map method

*/

const doubler = (element) => element * 2;
// console.log(doubler(15));

function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}
// console.log(map([1, 2, 3], doubler));
// console.log(map([1, 2, 3], (elem) => elem * 3));

// Re-Implement the filter method
// `evenFilter` returns true if a number is even
const evenFilter = (element) => {
  if (element % 2 === 0) return true;
  else return false;
};

// `oddFilter` returns true if a number is odd
const oddFilter = (element) => {
  return !evenFilter(element);
};

function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], evenFilter));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], oddFilter));

/*

Re-Implement the Array.prototype.include method

*/
function includes(collection, value) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === value) return true;
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      if (collection[key] === value) return true;
    }
  }
  return false;
}

// console.log(includes([1, 2, 3], 2));
// console.log(
//   includes(
//     {
//       moe: 1,
//       larry: 3,
//       curly: 9,
//     },
//     3
//   )
// );
// console.log(includes([1, 3, 9], 2));

/*

countWords

*/
function countWords(count, sentence) {
  const words = sentence.split(" ");
  return count + words.length;
}
// console.log(countWords(0, "this is a sentence with 7 words"));
// console.log(countWords(5, "this is a sentence with 7 words"));

/*

Reimplement the Array.prototype.reduce methods

*/

let add = (a, b) => a + b;

function reduce(collection, initialValue, callback) {
  let accumulator = initialValue;
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i]);
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      accumulator = callback(accumulator, collection[key]);
    }
  }
  return accumulator;
}
// console.log(reduce([3, 5, 7], 0, add));
wordArray = ["hello there this is line 1", "and this is line 2"];

// console.log(reduce(wordArray, 0, countWords));

// Use reduce inside a sum function that takes an array of integers

function sum(array) {
  return reduce(array, 0, (a, b) => a + b);
}
// console.log(sum([1, 2, 3]));

/*

every() methods

*/

const isEven = (num) => {
  return num % 2 === 0;
};

const getValue = (i) => {
  return i;
};

function every(array, callback) {
  return reduce(array, true, (acc, current) => acc && callback(current));
}

console.log(every([], getValue));
console.log(every([0, 10, 28], isEven));
console.log(every([0, 11, 28], isEven));

/*

some() methods

*/
function some(array, callback) {
  return reduce(array, false, (acc, current) => acc || callback(current));
}
console.log(some([1, 11, 29], isEven));
console.log(some([1, 10, 29], isEven));
