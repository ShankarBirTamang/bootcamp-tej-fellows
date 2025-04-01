// YOUR CODE BELOW
let me2 = {
  name: "Tarana",
  getGreeting: function (tme) {
    return `Hi ${tme.name}, my name is ${this.name}.`;
  },
};
let you = { name: "Alyssa" };
console.log(me2.getGreeting(you)); // Hi Alyssa, my name is Tarana
