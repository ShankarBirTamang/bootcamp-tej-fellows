### My Splice

Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
array method. However, mySplice should accept the array to operate on as an
argument, rather than being invoked as a method on that array.

mySplice only needs to take one element to add to the array (the .splice method
can actually take any number of values to add).

Do not use .splice in your function.

```javascript
let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples')) // => [2]

console.log(myArray)    // [1,'apples', 3]
```

.
.
.
.
.
.

The `splice()` method in JavaScript is used to add, remove, or replace elements in an array.

### **Syntax**:

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

### **Parameters**:

1. **`start`** – The index at which to start changing the array.
2. **`deleteCount`** (optional) – The number of elements to remove from the array.
3. **`item1, item2, ...`** (optional) – Elements to add at the `start` position.

### **Return Value**:

- Returns an array containing the removed elements.
- If no elements are removed, it returns an empty array.

---

### **Examples**:

#### **1. Removing elements**

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 2); // Removes 2 elements from index 1

console.log(fruits); // ["Apple", "Orange"]
```

#### **2. Adding elements**

```javascript
let fruits = ["Apple", "Orange"];
fruits.splice(1, 0, "Banana", "Mango"); // Inserts without removing

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

#### **3. Replacing elements**

```javascript
let fruits = ["Apple", "Banana", "Mango"];
fruits.splice(1, 1, "Grapes"); // Replaces "Banana" with "Grapes"

console.log(fruits); // ["Apple", "Grapes", "Mango"]
```
