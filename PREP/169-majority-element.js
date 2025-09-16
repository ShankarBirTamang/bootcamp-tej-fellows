//simplest 4ms

var majorityElement = (nums) => {

  let count = {};
  let threshold = Math.floor(nums.length / 2);

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > threshold) {
      return num;
    }
  }
  return null;
};

//using MAP object  7ms
// var majorityElement = (nums) => {
//   let count = new Map();
//   let threshold = Math.floor(nums.length / 2);

//   for (let num of nums) {
//     count.set(num, (count.get(num) || 0) + 1);
//     if (count.get(num) > threshold) {    //return early if majority found
//       return num;
//     }
//   }
//   return null;
// };

//counting all at first  //13ms
// var majorityElement = function (nums) {
//   let counts = {};
//   let threshold = Math.floor(nums.length / 2);

//   for (let num of nums) {
//     counts[num] = (counts[num] || 0) + 1;
//   }

//   for (let num in counts) {
//     if (counts[num] > threshold) {
//       return Number(num);
//     }
//   }

  return null;
};

//Boyer-Moore Voting Algorithm
var majorityElement = function (nums) {
  debugger;
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Verify candidate
  let freq = nums.filter((n) => n === candidate).length;
  let threshold = Math.floor(nums.length / 2);
  if (freq > threshold) {
    return candidate;
  }
  return null; // No majority
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([2, 2, 1, 3, 4]));
