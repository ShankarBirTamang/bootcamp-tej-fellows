### Reverse Array

Write a function that accepts an array and reverses that array in place. The
behavior should mimic the behavior of the native .reverse() array method.
However, your reverse function should accept the array to operate on as an
argument, rather than being invoked as a method on that array.

Do not use the native .reverse() method in your own implementation.

```javascript
let myArray = [1, 2, 3, 4];
reverse(myArray);
console.log(myArray); // [4, 3, 2, 1]
```

.
.
.
.
.
.

.
.
.

This function **`reverseArray()`** reverses an array **in place** using the **`pop()`** and **`unshift()`** methods. Let’s go step by step:

---

---

### **Step-by-Step Execution**

#### **Step 1: Initialize an empty array**

```javascript
let originalElements = [];
```

- This array will temporarily hold the reversed elements.

---

#### **Step 2: Move elements from `array` to `originalElements` using `pop()`**

```javascript
while (array.length) {
  originalElements.push(array.pop());
}
```

- `pop()` removes the last element of `array` and returns it.
- `push()` adds that element to `originalElements`.
- This effectively reverses the order of elements and empties `array`.

##### **Example Execution**

```javascript
let arr = [1, 2, 3, 4];
originalElements = []; // Initially empty

// Iteration 1: pop() 4 -> originalElements = [4]
// Iteration 2: pop() 3 -> originalElements = [4, 3]
// Iteration 3: pop() 2 -> originalElements = [4, 3, 2]
// Iteration 4: pop() 1 -> originalElements = [4, 3, 2, 1]

// Now, array is empty []
```

---

#### **Step 3: Move elements back from `originalElements` to `array` using `unshift()`**

```javascript
while (originalElements.length) {
  array.unshift(originalElements.pop());
}
```

- `pop()` removes the last element from `originalElements`.
- `unshift()` adds it to the beginning of `array`.
- This preserves the reversed order.

##### **Example Execution**

```javascript
// originalElements = [4, 3, 2, 1], array = []

// Iteration 1: pop() 1 -> unshift(1) -> array = [1]
// Iteration 2: pop() 2 -> unshift(2) -> array = [2, 1]
// Iteration 3: pop() 3 -> unshift(3) -> array = [3, 2, 1]
// Iteration 4: pop() 4 -> unshift(4) -> array = [4, 3, 2, 1]

// Now, array is reversed
```

---

### **Final Output**

```javascript
let arr = [1, 2, 3, 4];
reverseArray(arr);
console.log(arr); // [4, 3, 2, 1]
```

---

### **Key Takeaways**

1. **Uses `pop()` and `unshift()` instead of a built-in `reverse()` method**.
2. **Modifies the original array (in-place reversal)**.
3. **Time Complexity: O(n²)**
   - `unshift()` is **O(n)** because it shifts all elements.
   - In the worst case, this runs `n` times → total **O(n²)**.

### **Better Alternative**

Using a simple **two-pointer approach** (O(n) complexity):

```javascript
function reverseArray(array) {
  let left = 0,
    right = array.length - 1;

  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]]; // Swap
    left++;
    right--;
  }

  return array;
}
```

This approach is **much faster** because swapping is **O(1)** instead of using **`unshift()`** which is **O(n)**.
