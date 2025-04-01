// YOUR CODE BELOW

let me = {
  name: "kat",
  //   getGreeting: () => `Hi, my name is ${this.name}.`, //this.name => undefined
  getGreeting: function () {
    return `Hi, my name is ${this.name}.`;
  },
};
console.log(me.name); // 'kat'
console.log(me.getGreeting());
// => 'Hi, my name is kat.'

/*
The this keyword in an arrow function is lexically bound, 
meaning it does not refer to the object (me) 
but rather the surrounding scope, 
which is likely the global object (window in browsers, global in Node.js).
*/
