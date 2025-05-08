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
