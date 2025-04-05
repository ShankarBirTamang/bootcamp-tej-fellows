// YOUR CODE BELOW

//with different name function for each state

// function billerBuilder(state) {
//   if (state === "NY") {
//     return applyNYTaxes;
//   }
//   return applyNJTaxes;

//   function applyNJTaxes(price) {
//     return price * 1.05 * 1.06625;
//   }

//   function applyNYTaxes(price) {
//     return price * 1.03 * 1.04;
//   }
// }

let newYorkBiller = billerBuilder("NY");
console.log(newYorkBiller(100));
// => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = billerBuilder("NJ");
console.log(newJersBiller(100));
// => 111.

// Alternate solution:
// directly with anonymous function

// function billerBuilder(state) {
//   if (state === "NY") {
//     return (price) => price * 1.03 * 1.04;
//   } else return (price) => price * 1.05 * 1.06625;
// }

//Alternate Solution with a single function and closure
function billerBuilder(state) {
  return (price) => {
    if (state === "NY") {
      return price * 1.03 * 1.04;
    } else {
      return price * 1.05 * 1.06625;
    }
  };
}
