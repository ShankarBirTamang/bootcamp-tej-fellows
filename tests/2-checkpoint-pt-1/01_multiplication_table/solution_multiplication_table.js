/* eslint-disable no-unused-vars */
function multiplicationTable(rows, cols) {
  let table = [];
  for (let i = 1; i <= rows; i++) {
    let rowArr = [];
    for (let j = 1; j <= cols; j++) {
      rowArr.push(i * j);
    }
    table.push(rowArr);
  }
  return table;
}

const smallTable = multiplicationTable(3, 0);
const mediumTable = multiplicationTable(6, 0);
const largeTable = multiplicationTable(9, 0);

console.log(smallTable);
console.log(mediumTable);
console.log(largeTable);

console.log(multiplicationTable(2, 3));
