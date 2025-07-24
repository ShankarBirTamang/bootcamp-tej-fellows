/*
Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".


Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

var backspaceCompare = function (s, t) {
  function buildStack(str) {
    const stack = [];
    for (let char of str) {
      if (char === "#") {
        stack.pop(); // backspace
      } else {
        stack.push(char);
      }
    }
    return stack.join("");
  }

  return buildStack(s) === buildStack(t);
};

backspaceCompare("ab#c", "ad#c");
