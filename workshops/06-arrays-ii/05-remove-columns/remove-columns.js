// YOUR CODE BELOW
// function removeColumns(originalGrid, numColumnsToRemove) {
//   let updatedGrid = [];

//   for (let rowIndex = 0; rowIndex < originalGrid.length; rowIndex++) {
//     let currentRow = originalGrid[rowIndex];
//     let updatedRow = currentRow.slice(
//       0,
//       currentRow.length - numColumnsToRemove
//     );
//     updatedGrid.push(updatedRow);
//   }

//   return updatedGrid;
// }

//Alternatively using map (shortest possible way)
const removeColumns = (originalGrid, numColumnsToRemove) => {
  return originalGrid.map((currentRow) =>
    currentRow.slice(0, currentRow.length - numColumnsToRemove)
  );
};

console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    2
  )
);
