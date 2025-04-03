### **Pass by Value vs. Pass by Reference in JavaScript**

In JavaScript, function arguments can be passed in two ways: **pass by value** and **pass by reference**.

---

## **1. Pass by Value**

When a **primitive data type** (such as `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, or `bigint`) is passed to a function, JavaScript creates a **copy** of the value. This means that changes inside the function do **not** affect the original value.

### **Example: Pass by Value**

```javascript
function changeValue(x) {
  x = x + 10;
  console.log("Inside function:", x);
}

let num = 5;
changeValue(num);
console.log("Outside function:", num);
```

### **Output:**

```
Inside function: 15
Outside function: 5
```

📌 **Explanation:**

- The variable `num` (with value `5`) is passed to `changeValue`.
- Inside the function, a **copy** of `num` is modified.
- The original value of `num` remains unchanged.

---

## **2. Pass by Reference**

When a **non-primitive data type** (such as `object` or `array`) is passed to a function, JavaScript passes a **reference** to the memory location of the object. This means changes inside the function **affect the original object**.

### **Example: Pass by Reference**

```javascript
function modifyArray(arr) {
  arr.push(4);
  console.log("Inside function:", arr);
}

let numbers = [1, 2, 3];
modifyArray(numbers);
console.log("Outside function:", numbers);
```

### **Output:**

```
Inside function: [1, 2, 3, 4]
Outside function: [1, 2, 3, 4]
```

📌 **Explanation:**

- The array `numbers` is passed to `modifyArray`.
- The function modifies the **original** array by adding `4`.
- Since objects are passed by reference, the change persists outside the function.

---

## **Key Differences:**

| Feature                      | Pass by Value                         | Pass by Reference                             |
| ---------------------------- | ------------------------------------- | --------------------------------------------- |
| **Data Type**                | Primitives (`number`, `string`, etc.) | Objects (`arrays`, `functions`, etc.)         |
| **Copy or Reference?**       | Creates a **copy** of the value       | Passes a **reference** to the original object |
| **Changes Affect Original?** | ❌ No                                 | ✅ Yes                                        |
| **Example Data**             | `let x = 10;`                         | `let obj = {name: "John"};`                   |

---

## **Does JavaScript Always Use Pass by Reference for Objects?**

Not exactly! **JavaScript always passes function arguments by value**, but for objects, the value being passed is a **reference** to the memory location. This is why modifying an object's properties inside a function affects the original object.

However, **reassigning** an object inside a function does **not** change the original:

```javascript
function reassign(obj) {
  obj = { name: "New" }; // Creates a new object
  console.log("Inside function:", obj);
}

let person = { name: "Alice" };
reassign(person);
console.log("Outside function:", person);
```

### **Output:**

```
Inside function: { name: 'New' }
Outside function: { name: 'Alice' }
```

📌 **Explanation:**

- The function assigns `obj` to a new object `{ name: "New" }`, but this only affects the local variable.
- The original object `person` remains unchanged.

---

### **Conclusion**

- **Primitives** are passed **by value** (modifications inside functions do not affect the original).
- **Objects and arrays** are passed **by reference** (modifications inside functions affect the original).
- **Reassigning** an object inside a function does not affect the original reference.
