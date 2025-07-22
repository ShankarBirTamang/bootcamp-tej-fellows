function abbreviate(string) {
  debugger;
  let result = "";
  let word = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (/[a-zA-Z]/.test(char)) {
      word += char;
    } else {
      if (word.length >= 4) {
        result += word[0] + (word.length - 2) + word[word.length - 1];
      } else {
        result += word;
      }
      result += char;
      word = "";
    }
  }

  // everything was processed in the loop except the last word if there was no punctuation or space after it.
  // That’s why the final if block exists — to catch any leftover word.
  if (word.length >= 4) {
    result += word[0] + (word.length - 2) + word[word.length - 1];
  } else {
    result += word;
  }

  return result;
}

abbreviate("smooth ride to Kathmandu");
abbreviate("international house of pancakes!");
