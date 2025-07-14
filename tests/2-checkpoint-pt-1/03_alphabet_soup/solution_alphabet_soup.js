/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, bank) {
  let words = phrase.split("");
  let bankWords = bank.split("");

  for (let char of words) {
    let index = bankWords.indexOf(char);
    if (index === -1) return false; // char not found in bank
    bankWords.splice(index, 1);
  }
  return true;
}
