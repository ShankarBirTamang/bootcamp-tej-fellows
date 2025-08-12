var longestPalindrome = function (s) {
  let flag = false;
  if (s.length === 1) return 1;
  let letterMap = {};
  let count = 0;
  for (let char of s) {
    if (letterMap[char]) {
      count += 2;
      letterMap[char]--;
    } else {
      letterMap[char] = 1;
    }
  }
  let flagValue = Object.values(letterMap);
  flag = flagValue.includes(1);
  return flag ? count + 1 : count;
};

longestPalindrome("abccccdd");
