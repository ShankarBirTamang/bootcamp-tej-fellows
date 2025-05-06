/* eslint-disable no-unused-vars */
class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }
  sayHello() {
    return `My name is ${this.name}, I'm a Mammal`;
  }

  haveBaby() {
    let baby = new Mammal(`Baby ${this.name}`);
    this.offspring.push(baby);
    return baby;
  }
}

let myMammal = new Mammal("Joe");
console.log("myMammal instanceof Mammal:", myMammal instanceof Mammal);
console.log("myMammal.offspring : ", myMammal.offspring);
console.log(
  "myMammal.hasOwnProperty('sayHello'):",
  myMammal.hasOwnProperty("sayHello")
);

console.log("myMammal.sayHello() :", myMammal.sayHello());
let child = myMammal.haveBaby();
console.log("child.name:", child.name);
console.log("child.offspring:", child.offspring);
console.log("myMammal.offspring:", myMammal.offspring);
