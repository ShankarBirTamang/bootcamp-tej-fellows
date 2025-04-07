// YOUR CODE BELOW
//Method No.1 : FSA method

// function searchParty(name, world) {
//   // loop through the places in the world
//   for (let place in world) {
//     // if there's a person in this place...
//     if (typeof world[place] === "string") {
//       // ...see if it's the person we're looking for
//       let person = world[place];

//       // if we found them...
//       if (person === name) {
//         // return an array with the current place in it
//         return [place];
//       }
//     }

//     // else, if there's an array of people in this place...
//     else if (Array.isArray(world[place])) {
//       // ...see if the name we're looking for is in the array
//       let people = world[place];

//       // if the person we're looking for is in the array...
//       if (people.includes(name)) {
//         // ...return an array with the place in it
//         return [place];
//       }
//     }

//     // else, there must be another object in this place
//     else {
//       let nextObject = world[place];
//       let resultFromNextObject = searchParty(name, nextObject);

//       // if we found the person in the nextObject...
//       if (resultFromNextObject) {
//         // return a new array, with the current place concated in front of the resultFromNextObject
//         return [place].concat(resultFromNextObject);
//       }
//     }
//   }

//   // if we looped through the world and never found the person, return null
//   return null;
// }

let world = {
  Fullstack: {
    "11th floor": "Marge",
    "25th floor": "Francis",
  },
  Subway: ["Jackie", "Grumio"],
};

console.log(searchParty("Francis", world));
// => ['Fullstack', '25th floor']
console.log(searchParty("Franco", world));
// => null

//Method no2. using spread operator
function searchParty(name, world) {
  for (let place in world) {
    let value = world[place];
    if (typeof value === "string") {
      if (value === name) {
        return [place];
      }
    } else if (Array.isArray(value)) {
      if (value.includes(name)) {
        return [place];
      }
    } else if (typeof value === "object") {
      let result = searchParty(name, value);
      if (result) return [place, ...result];
    }
  }
  return null;
}
