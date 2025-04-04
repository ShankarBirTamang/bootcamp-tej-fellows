// YOUR CODE BELOW
function whosASpecial(specialPets) {
  let message = "";
  specialPets.forEach((pet) => {
    message += `${pet.name} the ${pet.species} is very special! `;
  });

  return message.trim();
}

let specialPets = [
  {
    name: "Sadie",
    species: "cat",
  },
  {
    name: "Layla",
    species: "cat",
  },
  {
    name: "Bogie",
    species: "dog",
  },
];

console.log(whosASpecial(specialPets));
