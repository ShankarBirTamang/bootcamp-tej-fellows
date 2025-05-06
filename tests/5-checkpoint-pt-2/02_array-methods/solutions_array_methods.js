/* eslint-disable no-unused-vars */

//useMap
function useMapToUpperCase(string) {
  const upperCaseStr = string.split(" ").map((word) => word.toUpperCase());
  return upperCaseStr;
}

console.log(useMapToUpperCase("keep It Simple"));

//useFilter
function useFilter(array) {
  let filteredArray = [];
  filteredArray = array.filter((element) => element.includes("@"));
  return filteredArray;
}
const array = useFilter([
  "emilie.io",
  "trace.google.com",
  "kellyscott2@aol.com",
  "helloWorld.com",
  "test@apple.com",
  "snowman@iceland.com",
]);
console.log(Array.isArray(array));

console.log(array);

//sumWith Reduce
function sumWithReduce(array, startingValue = 0) {
  let result = 0;
  result = array.reduce((sum, current) => sum + current, startingValue);
  return result;
}
let sum = sumWithReduce([7, 8, 9, 10]);
console.log(sum);
sum = sumWithReduce([10, 11, 12], 85);
console.log(sum);

//filtersEvensDoubleAndSum
function filterEvensDoubleAndSum(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((sum, current) => sum + current);
}

console.log(filterEvensDoubleAndSum([10, 11, 12]));
