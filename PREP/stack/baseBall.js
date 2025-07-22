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
