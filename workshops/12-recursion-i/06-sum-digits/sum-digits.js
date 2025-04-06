// YOUR CODE BELOW
function sumDigits(num) {
  if (num < 1) return 0;
  return (num % 10) + sumDigits(Math.floor(num / 10));
}

console.log(sumDigits(1234));
