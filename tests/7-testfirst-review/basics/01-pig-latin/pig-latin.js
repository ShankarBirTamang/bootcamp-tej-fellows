/* eslint-disable no-unused-vars */
function pigify(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word.length === 0) return ""; // empty string
      console.log("word:", word); //checkpoint

      let consonantCluster = "";
      let i = 0;

      while (i < word.length) {
        const currChar = word[i];
        const nextChar = i + 1 < word.length ? word[i + 1] : "";
        //check for 'qu' sequence
        if (currChar === "q" && nextChar === "u") {
          consonantCluster += "qu";
          i += 2;
          console.log("consonantCluster:", consonantCluster); //checkpoint
          break;
        }
        //check for consonant (not vowel)
        else if (!vowels.includes(currChar)) {
          consonantCluster += currChar;
          i++;
        } else {
          break;
        }
      }
      //if we moved any consonants to the cluster
      if (i > 0) {
        return word.slice(i) + consonantCluster + "ay";
      }
      //if words starts with vowels
      else {
        return word + "ay";
      }
    })
    .join(" ");
}

console.log(pigify("queen"));
console.log(pigify("apple"));
console.log(pigify("banana"));
console.log(pigify("cherry"));
console.log(pigify("eat pie"));
console.log(pigify("three"));
console.log(pigify("school"));
console.log(pigify("quiet"));
console.log(pigify("square"));
console.log(pigify("the quick brown fox"));
