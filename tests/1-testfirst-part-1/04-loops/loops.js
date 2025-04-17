/* eslint-disable no-unused-vars */

//Function 1
function repeat(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("TEJ\n", 5));

//Function 2
function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
console.log(sum([1, 2, 3, 4, 5]));

//Function 3 : Join elements of arr into a string with an optional delimiter
function join(arr, delimiter = "") {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += delimiter;
    }
  }
  return result;
}
console.log(join([1, 2, 3, 4, 5], "+"));

//Function 4 :Create a grid pattern where # and spaces alternate like a checkerboard.
// Each row ends with \n.
function gridGenerator(size) {
  let result = "";
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      str = (row + col) % 2 === 0 ? "#" : " ";
      result += str;
    }
    result += "\n";
  }
  return result;
}

console.log(gridGenerator(10));

//Function 5 : Convert an object to a query string (e.g., {a:1, b:2} → 'a=1&b=2'),
// using only for...in and hasOwnProperty, no Object.keys.
function paramify(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(`${key}=${obj[key]}`);
    }
  }
  return result.sort().join("&");
}
const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
console.log(paramify(object));

//Function 6:Same as paramify but uses Object.keys(obj) instead of for...in.
function paramifyObjectKeys(obj) {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .sort()
    .join("&");
}
const object1 = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
console.log(paramifyObjectKeys(object1));

//Function 7 :Implementing a simple sorting algorithm (e.g., using selection sort) without using Array.prototype.sort.
function sort(arr) {
  let sorted = arr.slice(); //Making copy to avoid mutating the input

  for (let i = 0; i < sorted.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[j] < sorted[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element of unsorted part of the array
    [sorted[i], sorted[minIndex]] = [sorted[minIndex], sorted[i]];
  }
  return sorted;
}

let unsorted = [17, -43, 216, 3, -9, 27];
console.log(sort(unsorted));
unsorted = ["toad", "prune", "pretzel", "aardvark", "tuna", "weasel"];
console.log(sort(unsorted));
