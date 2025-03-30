/*
The .reduce() method in JavaScript is primarily used for reducing an array to 
a single value (or structure) by applying a function iteratively to each element. 

The syntax of the reduce method in JavaScript is:

array.reduce((accumulator, currentValue, currentIndex, array) => {
  // logic to update accumulator
  return updatedAccumulator;
}, initialValue);

Parameters:
accumulator → Holds the accumulated result (initially set to initialValue).

currentValue → The current element being processed.

currentIndex (optional) → The index of the current element.

array (optional) → The original array being reduced.

initialValue → The initial value of the accumulator.

*/
//
// It is commonly used for:

//Summing Values

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

//Finding Maximum or Minimum
const nums = [10, 5, 20, 8];
const max = nums.reduce((acc, num) => (num > acc ? num : acc), nums[0]);
console.log(max); // Output: 20

//Counting Occurrences (Frequency Count)
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

//Flattening Arrays (Nested to Single Level)
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]

//Grouping Data by a Key (Like in Databases)
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 40 },
];
const grouped = people.reduce((acc, person) => {
  acc[person.name] = acc[person.name] || []; // If the name is not already in acc, initialize it as an empty array
  acc[person.name].push(person); // Add the person object to the array
  return acc;
}, {});
console.log(grouped);

// {
//     Alice: [ { name: 'Alice', age: 25 }, { name: 'Alice', age: 40 } ],
//     Bob: [ { name: 'Bob', age: 30 } ]
//   }

/*
What is an Accumulator in reduce?
The accumulator is the value that stores the result of all previous operations in reduce().
*/
