//two pointers approach
// [ 1 , 0 ,1 , 0 , 0 ,1 ] => [0,0,0,1,1,1]
function sortBinaryArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] === 0) {
      left++;
    } else if (arr[right] === 1) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}

console.log(sortBinaryArray([1, 0, 1, 0, 0, 1]));
