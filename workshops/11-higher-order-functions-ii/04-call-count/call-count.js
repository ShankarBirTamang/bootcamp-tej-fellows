// YOUR CODE BELOW
function callCount() {
  let count = 0;
  return () => ++count;
}

let newFunction1 = callCount();
let newFunction2 = callCount();

console.log(newFunction1());
console.log(newFunction1());
console.log(newFunction2());
console.log(newFunction2());

/*
📦 What is a Closure?
A closure is:

A function that remembers and can access variables from its 
outer (enclosing) function, 
even after that outer function has finished executing.
*/
