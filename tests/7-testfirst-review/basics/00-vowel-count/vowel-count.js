/* eslint-disable no-unused-vars */

function vowelsCount(str) {
  arrayString = str.toLowerCase().split("");
  let initialCount = { a: 0, e: 0, i: 0, o: 0, u: 0, total: 0 };
  let vowels = "aeiou";
  return arrayString.reduce((counts, char) => {
    if (vowels.includes(char)) {
      counts[char]++;
      counts.total++;
    }
    return counts;
  }, initialCount);
}
