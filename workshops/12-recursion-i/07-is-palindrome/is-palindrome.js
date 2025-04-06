// YOUR CODE BELOW
function isPalindrome(word) {
  word = word.toLowerCase(); // case-insensitive making
  if (word.length <= 1) return true; //base case : empty or one letter string is a palindrome
  if (word[0] !== word[word.length - 1]) return false; // if first and last letter are not equal , it's not a palindrome
  return isPalindrome(word.slice(1, -1)); // check the substring without the first and last characters
}

console.log(isPalindrome("Kayak")); // => true
console.log(isPalindrome("NEVERODDOREVEN")); // => true
console.log(isPalindrome("Tacocat")); // => true
console.log(isPalindrome("SELFLESS")); // => false
