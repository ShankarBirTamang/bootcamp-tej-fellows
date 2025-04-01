// YOUR CODE BELOW
function frequencyAnalysis(originalString) {
  originalString = originalString.toLowerCase();
  let frequency = {};
  for (let i = 0; i < originalString.length; i++) {
    let char = originalString[i];
    let count = 0;
    for (let j = 0; j < originalString.length; j++) {
      if (char === originalString[j]) {
        count++;
        frequency[char] = count;
      }
    }
  }
  console.log(frequency);
  return frequency;
}

frequencyAnalysis("abca"); // => {a: 2, b: 1, c: 1}
