// YOUR CODE BELOW
function compareObjects(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log(keys1);

  //number of keys are same or not
  if (keys1.length !== keys2.length) return false;
  // Checking if all keys and values are the same
  for (let key of keys1) {
    if (object1[key] !== object2[key]) return false;
  }
  return true;
}

console.log(compareObjects({ name: "nick" }, { name: "nick" }));
console.log(compareObjects({ name: "zeke" }, { name: "zeke", age: 12 }));
console.log(compareObjects({ age: 25 }, { age: 25 })); // true
console.log(compareObjects({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
