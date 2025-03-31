let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW
function petSounds(animalName, countryName) {
  for (let i = 0; i < animalNoises.length; i++) {
    let animalNoise = animalNoises[i];

    if (animalNoise[animalName]) {
      if (animalNoise[animalName][countryName]) {
        let sound = animalNoise[animalName][countryName];

        let formattedAnimalName =
          animalName.charAt(0).toUpperCase() + animalName.slice(1) + "s";

        let sentence = `${formattedAnimalName} in ${countryName} say ${sound}`;

        console.log(sentence); //checkpoint
        return sentence;
      }
    }
  }
  console.log("No data"); //checkpoint
  return "No data";
}

petSounds("dog", "Iceland"); // => Dogs in Iceland say Voff voff!
petSounds("cat", "Korea"); // Cats in Korea say Nyaong!
petSounds("chicken", "Algeria"); //Chickens in Algeria say Cotcotcodet
petSounds("hen", "Nepal"); //No data
