// YOUR CODE BELOW
// function dogBreeder(dogName, dogAge = 0) {
//   let dog = {};
//   if (typeof dogName === "number") {
//     dog.name = "Steve";
//     dog.age = dogName;
//   } else {
//     dog.name = dogName;
//     dog.age = dogAge;
//   }

//   console.log(dog);
//   return dog;
// }

// dogBreeder("Sam", 12); // => {name: 'Sam', age: 12}
// dogBreeder(15); // => {name:'Steve', age: 15}

//Alternatively , (shorter way)
const dogBreeder = (name = "Steve", age = 0) =>
  typeof name === "number"
    ? { name: "Steve", age: name }
    : { name: name, age: age };

console.log(dogBreeder("Sam", 12));
console.log(dogBreeder(15));
