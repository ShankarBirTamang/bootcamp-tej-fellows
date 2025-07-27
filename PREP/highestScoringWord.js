function high(x) {
  let words = x.split(" ");
  let map = {};
  for (let word of words) {
    let letterArray = word.split("");
    let score = letterArray.reduce(
      (acc, char) => acc + char.charCodeAt(0) - 96,
      0
    );
    if (!map[score]) {
      map[score] = word;
    }
  }
  let maxScore = Math.max(...Object.keys(map));
  return map[maxScore];
}

high("man i need to take a taxi up to ubudi");

// function high(x) {
//   return x
//     .split(' ')
//     .map(word => ({
//       word,
//       score: word
//         .split('')
//         .reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0)
//     }))
//     .reduce((highest, current) => current.score > highest.score ? current : highest)
//     .word;
// }
