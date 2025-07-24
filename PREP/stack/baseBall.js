/*
ops = ["5","2","C","D","+"]

Pseudo code : 
1. empty stack | stack = []
2. visit each op through for loop
  i) if it is 'C' , remove the previous score | stack.pop()
  ii) if it is 'D' , a new score = double the previous |stack.push(...)
  iii) if it is '+' , a new score = sum of previous 2 score | stack.push(...)
  iv) if it just a number | stack.push(...)
3. sum all the scores and return











*/
function calPoints(ops) {
  const stack = [];

  for (const op of ops) {
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      const last = stack[stack.length - 1];
      stack.push(last * 2);
    } else if (op === "+") {
      const last = stack[stack.length - 1];
      const secondLast = stack[stack.length - 2];
      stack.push(last + secondLast);
    } else {
      stack.push(parseInt(op));
    }
  }
  return stack.reduce((sum, score) => sum + score, 0);
}

ops = ["5", "2", "C", "D", "+"];
calPoints(ops);
