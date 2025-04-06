// YOUR CODE BELOW
// function backwardString(stringValue) {
//   let strLength = stringValue.length;
//   if (strLength == 0) return;
//   console.log(stringValue[strLength - 1]);
//   backwardString(stringValue.slice(0, -1));
// }

//Alternative solution using index
// function backwardString(str, index = str.length - 1) {
//   if (index < 0) return;
//   console.log(str[index]);
//   backwardString(str, index - 1);
// }

//FSA method
function backwardString(str) {
  if (str.length === 1) {
    console.log(str);
  } else {
    console.log(str[str.length - 1]);
    backwardString(str.slice(0, -1));
  }
}

backwardString("happy");
