/* eslint-disable no-unused-vars, no-throw-literal*/

function RPNCalculator() {
  this.stack = [];
}

RPNCalculator.prototype.push = function (num) {
  this.stack.push(num);
};

RPNCalculator.prototype._checkStack = function () {
  if (this.stack.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }
};

RPNCalculator.prototype.plus = function () {
  this._checkStack();
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a + b);
};

RPNCalculator.prototype.value = function () {
  return this.stack[this.stack.length - 1];
};

RPNCalculator.prototype.minus = function () {
  this._checkStack();
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a - b);
};

RPNCalculator.prototype.times = function () {
  this._checkStack();
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a * b);
};

RPNCalculator.prototype.divide = function () {
  this._checkStack();
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a / b);
};


