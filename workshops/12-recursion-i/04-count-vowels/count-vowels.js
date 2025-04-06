// YOUR CODE BELOW
function countVowels(stringValue) {
  let vowels = "aeiouAEIOU";
  if (stringValue.length === 0) return 0; // base case: no characters left
  let isVowels = vowels.includes(stringValue[0]);
  return isVowels + countVowels(stringValue.slice(1)); // recursive call
}

console.log(countVowels("Four score and seven years")); // => 9
