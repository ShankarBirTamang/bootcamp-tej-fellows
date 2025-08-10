//two pointers approach
// [ 1 , 0 ,1 , 0 , 0 ,1 ] => [0,0,0,1,1,1]
// function sortBinaryArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] === 0) {
//       left++;
//     } else if (arr[right] === 1) {
//       right--;
//     } else {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }
//   return arr;
// }

// console.log(sortBinaryArray([1, 0, 1, 0, 0, 1]));

//Dutch National flags problems sorting 0,1 and 2

function sortColors(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++;
      low++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else {
      mid++;
    }
  }
  return arr;
}

console.log(sortColors([0, 2, 1, 1, 2, 0]));
