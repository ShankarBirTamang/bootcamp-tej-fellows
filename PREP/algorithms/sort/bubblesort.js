function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));

/*
What is Bubble Sort?
Bubble sort is a simple sorting algorithm that repeatedly steps through the array, compares adjacent items, and swaps them if they are in the wrong order.
The largest elements “bubble” up to the end of the array with each pass.

How It Works
Start from the first element.

Compare the current element with the next element.

If the current element is greater than the next, swap them.

Move to the next pair and repeat until the end.

After one full pass, the largest element will be at the end.

Repeat the process for the remaining elements until no swaps are needed.

Example
Let’s sort:

plaintext
Copy
Edit
[5, 3, 8, 4, 2]
Pass 1:
Compare 5 and 3 → swap → [3, 5, 8, 4, 2]

Compare 5 and 8 → no swap

Compare 8 and 4 → swap → [3, 5, 4, 8, 2]

Compare 8 and 2 → swap → [3, 5, 4, 2, 8]
✅ Largest element 8 is now in the last position.

Pass 2:
Compare 3 and 5 → no swap

Compare 5 and 4 → swap → [3, 4, 5, 2, 8]

Compare 5 and 2 → swap → [3, 4, 2, 5, 8]
✅ Second largest 5 is in position 4.

Pass 3:
Compare 3 and 4 → no swap

Compare 4 and 2 → swap → [3, 2, 4, 5, 8]
✅ Third largest 4 is in position 3.

Pass 4:
Compare 3 and 2 → swap → [2, 3, 4, 5, 8]
✅ Array is now sorted.
*/
