// All of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Keep in mind, there are a few test specs that require functions that are not solved
// recursively (you need to define those functions on your own).

/* eslint-disable no-unused-vars */
function factorialIterative(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function factorial(num) {
  if (num === 0) return 1; //base case
  else return num * factorial(num - 1); //Recursive case
}

function sumTheDigits(array) {
  if (array.length === 0) return 0;
  else return array[0] + sumTheDigits(array.slice(1));
}

function countTheVowels(str) {
  if (str.length === 0) return 0;
  const firstChar = str[0].toLowerCase();
  const isVowel = ["a", "e", "i", "o", "u"].includes(firstChar);
  return (isVowel ? 1 : 0) + countTheVowels(str.slice(1)); //Recursive case
}

function recSmallestInt(array) {
  if (array.length === 1) return array[0];
  const firstChar = array[0];
  const smallestOfRest = recSmallestInt(array.slice(1)); //recursive call
  return firstChar < smallestOfRest ? firstChar : smallestOfRest;
}

function fib(n) {
  if (n === 0 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function type(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

function stringify(value) {
  const valueType = type(value);
  if (valueType === "Undefined") return "undefined";
  if (valueType === "Null") return "null";
  if (valueType === "Number") return value.toString();
  if (valueType === "String") return `"${value}"`;
  if (valueType === "Boolean") return value.toString();

  //Handle arrays
  if (valueType === "Array") {
    const elements = value.map((element) => stringify(element));
    return `[${elements.join(",")}]`;
  }

  //Handle objects
  if (valueType === "Object") {
    const properties = Object.keys(value).map((key) => {
      return `"${key}":${stringify(value[key])}`;
    });
    return `{${properties.join(",")}}`; //return object string
  }
}

function search(matchFn) {
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    //If element is an array , search recursively
    if (Array.isArray(element)) {
      if (search.call(element, matchFn)) return true;
    }
    //check if current element matches
    else if (matchFn(element)) {
      return true;
    }
  }
  return false;
}

function recursiveMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      result = result.concat(recursiveMap(element, callback));
    } else {
      result.push(callback(element));
    }
  }
  return result;
}

//Alternatively
function recursiveMap(arr, callback) {
  if (arr.length === 0) return [];

  const [first, ...rest] = arr;
  if (Array.isArray(first)) {
    return recursiveMap(first, callback).concat(recursiveMap(rest, callback));
  }
  return [callback(first)].concat(recursiveMap(rest, callback));
}
