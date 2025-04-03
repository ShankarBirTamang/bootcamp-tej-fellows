### Very Odd Mutant

'
Write a function, 'veryOddMutant'. The function accepts an array of numbers.
The function should mutate the given array by replacing every even number in the
array with the string 'normie'.

'veryOddMutant' should return a count of the number of even numbers it replaced.

```javascript
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log("allTheNums:", allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log("countRemoved:", countRemoved);
// 4
```

<!-- ### Explanation of Solution :

Your `veryOddMutant` function is an example of **pass by reference** in JavaScript.

---

### **How is `veryOddMutant` Related to Pass by Reference?**

1. **Arrays are Objects in JavaScript:**

   - `allTheNums` (an array) is passed to `veryOddMutant`.
   - Since arrays are objects, their reference (memory address) is passed to the function.

2. **Modifying the Original Array:**
   - The function loops through `allNums` and replaces even numbers with `"normie"`.
   - Since `allNums` refers to the same memory location as `allTheNums`, any modification inside the function directly affects `allTheNums`.

---

### **Step-by-Step Execution**

```javascript
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);
```

- `allTheNums` is passed by reference to `veryOddMutant`.
- The function changes all even numbers to `"normie"`, modifying `allTheNums` directly.

### **Final Values**

```javascript
console.log("allTheNums:", allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log("countRemoved:", countRemoved);
// 4
```

---

### **Key Takeaway**

- Since objects (arrays) are passed by reference, modifying `allNums` inside `veryOddMutant` also modifies `allTheNums` outside the function.
- This is different from **pass by value**, where changes inside a function wouldn’t affect the original variable. -->
