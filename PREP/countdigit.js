function digPow(n, p) {
  debugger;
  let myArray = n.toString().split("");
  let total = myArray.reduce((acc, curr) => {
    debugger;
    let newValue = curr ** p;
    acc += newValue;
    p++;
    return acc;
  }, 0);
  let k = total / n;
  return Number.isInteger(k) ? k : -1;
}

digPow(695, 2);
digPow(92, 1);
