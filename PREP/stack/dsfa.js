var isHash = function (char) {
  if (char === "#") {
    this.pop();
  } else {
    this.push(char);
  }
};

var backspaceCompare = function (s, t) {
  let stack1 = [];
  let stack2 = [];

  Array.prototype.isHash = isHash;
  for (let char of s) {
    stack1.isHash(char);
  }
  for (let char of t) {
    stack2.isHash(char);
  }

  return stack1.join("") === stack2.join("");
};
