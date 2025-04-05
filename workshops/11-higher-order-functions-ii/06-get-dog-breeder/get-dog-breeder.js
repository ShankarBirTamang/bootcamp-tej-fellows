// YOUR CODE BELOW
const getDogBreeder = (defaultName, defaultAge) =>
  function dogBreeder(newName = defaultName, newAge = defaultAge) {
    // If only one argument and it's a number → change age
    if (typeof newName === "number") {
      return { name: defaultName, age: newName };
    }

    return { name: newName, age: newAge };
  };

let puppyFarm = getDogBreeder("Snoopy", 0);
let rescueShelter = getDogBreeder("Odie", 3);

console.log(puppyFarm("Olaf", 3)); // => {name: 'Olaf', age: 3};
console.log(puppyFarm(2)); // => {name: 'Snoopy', age: 2}
console.log(rescueShelter()); // => {'Odie', 3}
