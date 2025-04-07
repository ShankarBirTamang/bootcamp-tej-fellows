// YOUR CODE BELOW
function theTruthCounts(givenValues) {
  let truthCounts = 0;
  for (let i = 0; i < givenValues.length; i++) {
    let currentValue = givenValues[i];
    if (Array.isArray(currentValue)) {
      truthCounts += theTruthCounts(currentValue);
    } else if (currentValue) {
      truthCounts++; // increment truth counts
    }
  }
  return truthCounts;
}

const count = theTruthCounts([0, [true, ["yes"]]]); // => 2
console.log(count);
