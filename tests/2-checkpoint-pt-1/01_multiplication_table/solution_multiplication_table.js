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

