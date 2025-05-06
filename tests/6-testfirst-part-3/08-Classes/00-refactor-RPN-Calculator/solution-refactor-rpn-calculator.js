/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
class RPNCalculator {
  constructor() {
    this.array = [];
  }
  push(num) {
    this.array.push(num);
  }
  value() {
    if (this.array.length === 0) {
      return "rpnCalculatorInstance is empty";
    }
    let length = this.array.length;
    return this.array[length - 1];
  }
  plus() {
    this.checkStackSize();
    const a = this.array.pop();
    const b = this.array.pop();
    this.array.push(a + b);
  }
  minus() {
    this.checkStackSize();
    const a = this.array.pop();
    const b = this.array.pop();
    this.array.push(b - a);
  }
  times() {
    this.checkStackSize();
    const a = this.array.pop();
    const b = this.array.pop();
    this.array.push(a * b);
  }

  divide() {
    this.checkStackSize();
    const a = this.array.pop();
    const b = this.array.pop();
    this.array.push(b / a);
  }

  checkStackSize() {
    if (this.array.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
  }
}
try {
  let rpnCalculatorInstance = new RPNCalculator();

  rpnCalculatorInstance.push(2);
  rpnCalculatorInstance.push(3);
  console.log("After push 2, 3:", rpnCalculatorInstance.array);

  console.log("Current value:", rpnCalculatorInstance.value());

  rpnCalculatorInstance.plus();
  console.log("After plus:", rpnCalculatorInstance.array);

  rpnCalculatorInstance.push(2);
  console.log("After push 2:", rpnCalculatorInstance.array);

  rpnCalculatorInstance.push(3);
  console.log("After push 3:", rpnCalculatorInstance.array);

  rpnCalculatorInstance.times();
  console.log("After times:", rpnCalculatorInstance.array);

  rpnCalculatorInstance.minus();
  console.log("After minus:", rpnCalculatorInstance.array);

  // This will throw an error - let's catch it
  console.log("Attempting divide on single value...");
  rpnCalculatorInstance.divide();
} catch (e) {
  console.log("Calculator error:", e);
}
