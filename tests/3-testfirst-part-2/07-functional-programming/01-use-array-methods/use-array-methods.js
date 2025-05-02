/* eslint-disable no-unused-vars */

function indexAndValue(array) {
  let result = [];
  result = array.map((value, index) => ({
    index,
    value,
  }));

  return result;
}

const arrayOfObjects = indexAndValue([22, 33, 44, 55]);
// console.log(arrayOfObjects);

const objects = arrayOfObjects.every((obj) => typeof obj === "object");
// console.log(objects);
// console.log(arrayOfObjects.length);

const arrayReturned = indexAndValue([22]);
// console.log(arrayReturned.length);
// console.log(arrayReturned[0]);
console.log(indexAndValue(["hurricane", "tornado", "typhoon"]));

/*

capitalize() method

*/

const capitalize = (str) => str.toUpperCase();

console.log(capitalize("hello world"));

function swapCase(str) {
  let result = "";
  result = str
    .split(" ")
    .map((value, index) => (index % 2 === 0 ? capitalize(value) : value))
    .join(" ");

  return result;
}

console.log(swapCase("i need to get my 10,000 steps in!"));

/*

filter method

*/

function extensionSearch(ext, files) {
  return files.filter((file) => file.endsWith("." + ext));
}

console.log(
  extensionSearch("txt", [
    "hello.txt",
    "hello.png",
    "hello.csv",
    "mlb.txt",
    "mls.png",
  ])
);

console.log(
  extensionSearch("csv", [
    "groceries.csv",
    "todos.csv",
    "songs.txt",
    "picture01.png",
  ])
);

/*
using reduce : getPopulation()
*/
const arrayOfCountries = [
  { name: "China", population: 1386395000 },
  { name: "Costa Rica", population: 4905000 },
  { name: "Brazil", population: 209288000 },
  { name: "France", population: 67118000 },
  { name: "Germany", population: 82695000 },
  { name: "Finland", population: 5511300 },
  { name: "Canada", population: 36290000 },
  { name: "United States", population: 325700000 },
];
const population = getPopulation(arrayOfCountries, [
  "Brazil",
  "United States",
  "Costa Rica",
]);

function getPopulation(countries, selectedCountries) {
  return countries.reduce((sum, country) => {
    if (
      selectedCountries.length === 0 ||
      selectedCountries.includes(country.name)
    ) {
      return sum + country.population;
    }
    return sum;
  }, 0);
}

// console.log(population);

/*

action hero reduce function

 */
const superheroes = [
  {
    name: "Bruce Wayne",
    alias: "Batman",
    powerLevel: 50,
    universe: "DC Comics",
    race: "Human",
  },
  {
    name: "Wade Wilson",
    alias: "Deadpool",
    powerLevel: 90,
    universe: "Marvel Comics",
    race: "Mutant",
  },
  {
    name: "Peter Parker",
    alias: "Spiderman",
    powerLevel: 70,
    universe: "Marvel Comics",
    race: "Human",
  },
  {
    name: "Kristin Wells",
    alias: "Superwoman",
    powerLevel: 99,
    universe: "DC Comics",
    race: "Kryptonian",
  },
  {
    name: "Barry Allen",
    alias: "The Flash",
    powerLevel: 80,
    universe: "DC Comics",
    race: "Human",
  },
  {
    name: "Diana Prince",
    alias: "Wonder Woman",
    powerLevel: 90,
    universe: "DC Comics",
    race: "Human",
  },
  {
    name: "Ororo Munroe",
    alias: "Storm",
    powerLevel: 85,
    universe: "Marvel Comics",
    race: "Mutant",
  },
  {
    name: "Helen Parr",
    alias: "Elastigirl",
    powerLevel: 70,
    universe: "Dark Horse Comics",
    race: "Human",
  },
];

function keyifyArrayOfObjects(key, arr) {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
}

const superheroesObject = keyifyArrayOfObjects("alias", superheroes);
// console.log(superheroesObject);

/*

powerlevel Average

*/
function powerLevelAverage(superheroes) {
  const total = superheroes.reduce((sum, hero) => sum + hero.powerLevel, 0);
  return Math.round(total / superheroes.length);
}
const averagePowerLevel = powerLevelAverage(superheroes);
// console.log(averagePowerLevel);

/*

mapReduce ( Recreating map using reduce)

*/
const mappedArray = mapReduce([1, 2, 3], (val) => {
  return val * 2;
});

function mapReduce(arr, callback) {
  return arr.reduce((acc, curr, i, a) => {
    acc.push(callback(curr, i, a));
    return acc;
  }, []);
}

//
/*

filterReduce( Recreating filter using reduce)

*/
const filteredArray = filterReduce([1, 2, 3], (val) => {
  return val <= 2;
});

function filterReduce(array, callback) {
  return array.reduce((acc, curr, i, a) => {
    if (callback(curr, i, a)) acc.push(curr);
    return acc;
  }, []);
}

console.log(filteredArray);
console.log(
  filterReduce(["steel", "bronze", "silver", "iron"], (val) => {
    return val.length >= 6;
  })
);

/*

inYourBudget (method chaining - missing test example was cut off)

*/
function inYourBudget(maxPrice, items) {
  return items.filter((item) => item.price < maxPrice).map((item) => item.item);
}

let valueReturned = inYourBudget(100, [
  { item: "tv", price: 499 },
  { item: "monitor", price: 99 },
]);
console.log(valueReturned);
valueReturned = inYourBudget(39, [
  { item: "groceries", price: 19 },
  { item: "dvd", price: 29 },
  { item: "concert-tickets", price: 199 },
  { item: "parking-ticket", price: 35 },
  { item: "tv-subscription", price: 33 },
  { item: "clothes", price: 200 },
]);
console.log(valueReturned);

/*

separate and return names

*/
function separateAndReturnNames(superheroes, nameType, maxLength) {
  superheroes.map((hero) => {
    const [firstName, lastName] = hero.name.split(" ");
    hero.firstName = firstName;
    hero.lastName = lastName;
    return hero;
  });

  return superheroes
    .map((hero) => hero[nameType])
    .filter((name) => name.length <= maxLength);
}
console.log(separateAndReturnNames(superheroes, "lastName", 5));
console.log(separateAndReturnNames(superheroes, "lastName", 4));
console.log(separateAndReturnNames(superheroes, "firstName", 4));

/*

todoList

*/
let todoList = [
  { name: "Brush Teeth", duration: 2, priority: "high" },
  { name: "Walk Linus (the dog)", duration: 10, priority: "high" },
  { name: "Watch Netflix", duration: 60, priority: "low" },
  { name: "Go to work", duration: 560, priority: "high" },
  { name: "Ride bike to work", duration: 30, priority: "medium" },
  { name: "Plan a vacation", duration: 60, priority: "medium" },
  { name: "Order items in shopping cart", duration: 15, priority: "low" },
];
function priorityTodoDuration(listToDo) {
  return listToDo
    .filter((task) => task.priority === "high")
    .reduce((sum, task) => sum + task.duration, 0);
}

console.log(priorityTodoDuration(todoList));
