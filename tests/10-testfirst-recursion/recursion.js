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

function fib() {}

function stringify() {}

function search() {}

function recursiveMap() {}
