/* eslint-disable no-unused-vars */
function concatString() {
  return Array.from(arguments).join("");
}

const result = concatString("This", " ", "should", " ", "be done with join");
console.log(result);

//-------- 2nd part
const callThisFunction = () => "Called Value";
const andThisFunction = () => " and Other Value";

function yourFunctionRunner() {
  let result = "";
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]();
  }
  return result;
}

console.log(yourFunctionRunner(callThisFunction, andThisFunction));

//--- 3rd part
function makeAdder(num) {
  return function (numToAdd) {
    return num + numToAdd;
  };
}

const adderOf2function = makeAdder(2);
const adderOf10Function = makeAdder(10);

console.log(adderOf2function(5));
console.log(adderOf10Function(22));

//----- 4th part
const sayHello = () => "Hello!";
const sayGoodbye = () => "Goodbye!";

function once(func) {
  let hasBeenCalled = false;
  let result;
  return function () {
    if (!hasBeenCalled) {
      result = func.apply(this, arguments); //checkpin
      hasBeenCalled = true;
      return result;
    }
    return "the function has already been called...";
  };
}
console.log(typeof once(sayHello));

let funcReturned = once(sayGoodbye);
console.log(funcReturned());

const isItFriday = () => {
  return "TODAY IS FRIDAY!! TGIF!!!";
};
funcReturned = once(isItFriday);
console.log(funcReturned());
console.log(funcReturned());

let num = 50;
const addTen = () => (num += 10);
const increment = once(addTen);

console.log(increment());
console.log(increment());
console.log(increment());

//---- 5th part

function createObjectWithClosures() {
  let value = 0;
  return {
    oneIncrementer: function () {
      value += 1;
    },
    tensIncrementer: function () {
      value += 10;
    },
    getValue: function () {
      return value;
    },
    setValue: function (newValue) {
      value = newValue;
    },
  };
}

sharedObj = createObjectWithClosures();
console.log(typeof sharedObj.oneIncrementer);
sharedObj.oneIncrementer();
console.log(sharedObj.getValue());
sharedObj.tensIncrementer();
console.log(sharedObj.getValue());
sharedObj.setValue(7.5);
console.log(sharedObj.getValue());

//---- 6th part

secret = dontSpillTheBeans("I'm proposing to my significant other this Friday");

function dontSpillTheBeans(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

console.log(secret.getSecret());
secret.setSecret("It's a surprise, don't say anything");
console.log(secret.getSecret());
console.log(Object.keys(secret));
console.log(Object.keys(secret).length);
