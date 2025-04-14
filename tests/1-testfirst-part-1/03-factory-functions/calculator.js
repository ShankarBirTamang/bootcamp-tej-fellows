/* eslint-disable no-unused-vars */
let calculator;
let secondCalculator;

function createCalculator() {
  return {
    total: 0,
    value: function () {
      return this.total;
    },
    add: function (num) {
      this.total += num;
    },
    subtract: function (num) {
      this.total -= num;
    },
    clear: function () {
      this.total = 0;
    },
  };
}

calculator = createCalculator();
secondCalculator = createCalculator();

console.log(calculator.value());
console.log(secondCalculator.value());

calculator.add(3);
calculator.subtract(2);
secondCalculator.add(15);
secondCalculator.add(13);
secondCalculator.subtract(10);
secondCalculator.clear();

console.log(calculator.value());
console.log(secondCalculator.value());

//*************************************** */
let arrayOfCalculatorInstances;
let updatedInstances;

const addSquareMethod = (arrInstances) => {
  return arrInstances.map((instance) => {
    instance.square = function () {
      return this.total * this.total;
    };
    return instance;
  });
};

//********************** */
const humanCalcPrototype = {
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  },
};

const createHumanCalculator = () => {
  const humanCalc = Object.create(humanCalcPrototype);
  humanCalc.total = -10;

  return humanCalc;
};
