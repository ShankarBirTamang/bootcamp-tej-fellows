/* eslint-disable no-unused-vars */
function presses(string) {
  const keypad = {
    a: 1,
    b: 2,
    c: 3,
    d: 1,
    e: 2,
    f: 3,
    g: 1,
    h: 2,
    i: 3,
    j: 1,
    k: 2,
    l: 3,
    m: 1,
    n: 2,
    o: 3,
    p: 1,
    q: 2,
    r: 3,
    s: 4,
    t: 1,
    u: 2,
    v: 3,
    w: 1,
    x: 2,
    y: 3,
    z: 4,
    " ": 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    0: 1,
  };
  let pressedAmt = 0;
  let pressedString = string.toLowerCase();
  for (let char of pressedString) {
    pressedAmt += keypad[char];
  }

  return pressedAmt;
}

console.log(presses("Hello World"));
console.log(presses("THREE3"));
