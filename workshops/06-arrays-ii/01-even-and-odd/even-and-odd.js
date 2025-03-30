// YOUR CODE BELOW
function evenAndOdd(array) {
  let even = [];
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }

  return [even, odd];
}

// Alternatively using filter (shortest way)

// const evenAndOdd = (array) => [
//   array.filter((num) => num % 2 == 0),
//   array.filter((num) => num % 2),
// ];

//Alternatively using reduce method
// function evenAndOdd(array) {
//   return array.reduce(
//     ([even, odd], num) => {
//       num % 2 === 0 ? even.push(num) : odd.push(num);
//       return [even, odd];
//     },
//     [[], []]
//   );
// }

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
