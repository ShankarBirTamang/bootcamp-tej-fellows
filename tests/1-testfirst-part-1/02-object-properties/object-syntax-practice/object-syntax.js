/* eslint-disable no-unused-vars */

const name = "Cody";
const loud = "loud";

const dog = {
  bark() {
    return "ruff ruff!";
  },
  name,
  [`${loud}Bark`]: () => dog.bark().toUpperCase(),
};

const { bark } = dog;
