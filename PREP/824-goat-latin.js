function toGoatLatin(sentence) {
  debugger;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const words = sentence.split(" ");

  return words
    .map((word, index) => {
      debugger;
      const firstChar = word[0].toLowerCase();
      let newWord;

      if (vowels.has(firstChar)) {
        newWord = word + "ma";
      } else {
        newWord = word.slice(1) + word[0] + "ma";
      }
      let endA = "a".repeat(index + 1);
      newWord += endA;
      return newWord;
    })
    .join(" ");
}

let sentence = "The quick brown fox jumped over the lazy dog";
toGoatLatin(sentence);
