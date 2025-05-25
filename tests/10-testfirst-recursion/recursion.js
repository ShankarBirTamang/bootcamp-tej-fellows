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

function sumTheDigits() {}

function countTheVowels() {}

function recSmallestInt() {}

function fib() {}

function stringify() {}

function search() {}

function recursiveMap() {}
