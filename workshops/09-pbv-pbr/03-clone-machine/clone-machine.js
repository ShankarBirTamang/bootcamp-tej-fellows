// YOUR CODE BELOW
function cloneMachine(parent) {
  let child = {
    name: parent.name + "Clone",
    species: parent.species,
    offspring: [],
  };
  parent.offspring.push(child.name);
  return child;
}

let dolly = {
  name: "Dolly",
  species: "sheep",
  offspring: [],
};

let dollyClone = cloneMachine(dolly);

console.log(dollyClone); // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly); // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}
