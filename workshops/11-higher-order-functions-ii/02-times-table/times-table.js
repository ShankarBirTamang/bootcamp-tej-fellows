// YOUR CODE BELOW
function timesTable(number1) {
  return (number2) => {
    return number1 * number2;
  };
}

let ninesTable = timesTable(9);
console.log(ninesTable(8)); // => 72

let twelvesTable = timesTable(12);
console.log(twelvesTable(100)); // => 1200
