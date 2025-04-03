### Very Odd

Write a function, veryOdd. The function accepts an array of numbers.
It should return a new array that contains only the odd numbers from the given
array. veryOdd must not mutate the given array.

```javascript
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log("oddNums:", oddNums); // [1, 3, 5, 7];
console.log("allTheNums:", allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]
```

Your `veryOdd` function is an example of **pass by value (for primitives) and pass by reference (for arrays)** but **without modifying the original array**.

---

### **How is `veryOdd` Different from `veryOddMutant`?**

1. **Arrays Are Still Passed by Reference:**

   - `allTheNums` (an array) is passed to `veryOdd`.
   - Since arrays are objects, their reference is passed to the function.

2. **No Modification of the Original Array:**
   - Unlike `veryOddMutant`, which modified `allNums` directly, `veryOdd` **creates a new array (`oddNums`) instead of modifying `allNums`**.
   - This means `allTheNums` remains unchanged.

---

### **Step-by-Step Execution**

```javascript
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);
```

- `allTheNums` is passed by reference, but the function **does not modify it**.
- Instead, a **new array** `oddNums` is created and returned.

### **Final Values**

```javascript
console.log("oddNums:", oddNums);
// [1, 3, 5, 7]

console.log("allTheNums:", allTheNums);
// [1, 2, 3, 4, 5, 6, 7, 8]  (Unchanged)
```

---

### **Key Takeaway**

- `allTheNums` is **not modified** because `veryOdd` does not mutate it.
- A **new array** `oddNums` is created and returned.
- This demonstrates **pass by reference without modification**, unlike `veryOddMutant`, which directly modified the input array.
