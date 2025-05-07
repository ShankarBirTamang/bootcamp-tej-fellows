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
