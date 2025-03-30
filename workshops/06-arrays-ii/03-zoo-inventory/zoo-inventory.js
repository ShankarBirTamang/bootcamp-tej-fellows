// YOUR CODE BELOW
function zooInventory(myZoo) {
  let flatArray = [];
  for (let i = 0; i < myZoo.length; i++) {
    let animal = myZoo[i];
    let name = animal[0];
    let species = animal[1][0];
    let age = animal[1][1];
    let sentence = `${name} the ${species} is ${age}.`;
    flatArray.push(sentence);
  }
  return flatArray;
}

let zoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]],
];

console.log(zooInventory(zoo));
