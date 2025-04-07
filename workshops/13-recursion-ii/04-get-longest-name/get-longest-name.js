// YOUR CODE BELOW

let family = {
  "Beverly Marquez": {
    "Nina Rhone": {
      "William Rhodes": null,
      "Paul Nell": null,
      "Sir Paddington the Fourth, of the county Wilstonshire": null,
    },
  },
};
let count = 0;
function getLongestName(family) {
  let longestName = "";
  for (let name in family) {
    if (name.length > longestName.length) {
      longestName = name;
      console.log(
        "Longest Name before recursion ",
        ++count + " : " + longestName
      ); //checkpoint
    }
    let children = family[name];
    if (children) {
      console.log(children); //checkpoint
      let childLongest = getLongestName(children);

      if (childLongest.length > longestName.length) {
        longestName = childLongest;
        console.log("Longest Name After recursion: ", longestName);
      }
    }
  }
  console.log("Longest Name Returned : ", longestName); //checkpoint

  return longestName;
}

console.log(getLongestName(family)); // => 'Sir Paddington the Fourth, of the county Wilstonshire'
