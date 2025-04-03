### Deeper Copy

Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-
dimensional array.

```javascript
let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]]
```

#

### Solution

# Deeper Copy Function

## Overview

The `deeperCopy` function creates a **shallow deep copy** of a **two-dimensional array** (i.e., an array containing nested arrays). Unlike `.slice()`, it ensures that nested arrays are duplicated rather than referenced.

## Function Implementation

```javascript
function deeperCopy(arr) {
  return arr.map((item) => (Array.isArray(item) ? [...item] : item));
}
```

## How It Works

### Uses `.map()`:

- `.map()` iterates over each element of the original array.
- It transforms each element based on the condition inside.

### Checks if the element is an array (`Array.isArray(item)`) :

- If `item` is an **array**, it creates a **new copy** using **spread syntax (`[...]`)**. This ensures that changes to the nested array in the copied version do not affect the original.
- If `item` is **not an array**, it simply keeps the original value.

## Why is this better than `.slice()`?

- `.slice()` only makes a **shallow copy**, meaning nested arrays are still **referenced** rather than duplicated.
- `deeperCopy()` ensures that **nested arrays are copied separately**, preventing unintended modifications.

## Example Usage

```javascript
let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]] ✅ Original remains unchanged

let copy2 = myArray.slice(); // Shallow copy
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]] ❌ Original gets modified
```

## Key Takeaways

- `.slice()` and `[...arr]` only make shallow copies.
- `deeperCopy()` ensures **nested arrays are duplicated**, preventing unintended modifications.
- This function **only works for two-dimensional arrays** (it won’t deeply copy arrays inside arrays inside arrays).
