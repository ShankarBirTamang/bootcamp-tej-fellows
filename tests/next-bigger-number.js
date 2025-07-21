function nextBigger(n) {
  debugger;
  let digits = n.toString().split("");

  // Step 1: Find pivot - the first digit from the right that is smaller than the one after
  let i = digits.length - 2;
  let iDigit = digits[i];
  let nxtDigit = digits[i + 1];
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i < 0) return -1; // No bigger number possible

  // Step 2: Find the smallest digit on the right side of i that is larger than digits[i]
  let j = digits.length - 1;
  let jDigit = digits[j];
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Step 3: Swap
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Step 4: Reverse the part after index i
  let left = digits.slice(0, i + 1);
  let right = digits.slice(i + 1).reverse();

  let result = parseInt([...left, ...right].join(""), 10);
  return result;
}

console.log(nextBigger(20172)); // 21
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(513)); // 531
console.log(nextBigger(9)); // -1
console.log(nextBigger(111)); // -1
console.log(nextBigger(531)); // -1
