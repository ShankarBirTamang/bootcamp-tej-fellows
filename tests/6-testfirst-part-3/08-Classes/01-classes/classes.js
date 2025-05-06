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

// **********************************************************
// 2nd part
class Cat extends Mammal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  meow() {
    return "meow";
  }
  sayHello() {
    return `My name is ${this.name}, I'm a Cat`;
  }
  haveBaby(color) {
    let child = super.haveBaby();
    child.color = color;
    return child;
  }
}
let cat = new Cat("Whiskers", "Grey");
console.log("cat instanceof Mammal:", cat instanceof Mammal);
console.log("cat instanceof Cat:", cat instanceof Cat);
console.log("cat.offspring:", cat.offspring);
console.log("cat.name:", cat.name);
console.log("cat.color:", cat.color);
console.log("cat.meow():", cat.meow());
console.log("typeof Cat.prototype.sayHello:", typeof Cat.prototype.sayHello);
console.log("cat.sayHello():", cat.sayHello());

let greenCat = cat.haveBaby("green");
console.log("cat.offspring:", cat.offspring);
console.log("greenCat.name:", greenCat.name);
console.log("greenCat.color:", greenCat.color);

// **********************************************************
// 3rd part
class Dog extends Mammal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    return "RUFF RUFF";
  }
  sayHello() {
    return `My name is ${this.name}, I'm a Dog`;
  }
  haveBaby(breed) {
    let baby = super.haveBaby();
    baby.breed = breed;
    return baby;
  }
}
let dog = new Dog("Gleyber", "corgi");
console.log("dog.name:", dog.name);
console.log("dog.offspring:", dog.offspring);
console.log("dog.bark():", dog.bark());
console.log("dog.sayHello():", dog.sayHello());

let beagle = dog.haveBaby("beagle");
console.log("dog.offspring:", dog.offspring);
console.log("beagle.name:", beagle.name);
console.log("beagle.breed:", beagle.breed);
