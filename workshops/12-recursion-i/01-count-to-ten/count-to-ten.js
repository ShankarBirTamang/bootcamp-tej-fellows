// YOUR CODE BELOW
// function countToTen(num) {
//   if (num > 10) return;
//   console.log(num);
//   countToTen(num + 1); // recursive call
// }

//FSA method
function countToTen(num) {
  if (num == 10) {
    console.log(num);
  } else {
    console.log(num);
    countToTen(num + 1);
  }
}

countToTen(1);
