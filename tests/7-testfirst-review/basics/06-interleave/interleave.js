function interleave(...strings) {
  let maxLength = Math.max(...strings.map((str) => str.length));
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    for (const str of strings) {
      if (i < str.length) {
        result.push(str[i]);
      }
    }
  }
  return result.join("");
}
