/* eslint-disable no-unused-vars, no-prototype-builtins */

// The .hasOwnProperty() method is a built-in JavaScript method used to
// check whether an object has a specific property as its own property,
// not inherited from its prototype.

const rectanglePrototype = {
  getArea: function () {
    return this.height * this.width;
  },
};
function rectangle(color, height, width) {
  const rectangleInstance = Object.create(rectanglePrototype);

  rectangleInstance.color = color;
  rectangleInstance.height = height;
  rectangleInstance.width = width;

  return rectangleInstance;
}
function findObjPropsHasOwn(obj) {
  keys = [];
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys.join(", ");
}

const greenRectangle = { color: "green" };
console.log(findObjPropsHasOwn(greenRectangle));
const yelloRectangle = { color: "yellow", height: 8, width: 5 };
console.log(findObjPropsHasOwn(yelloRectangle));

const blueRectangle = rectangle("blue", 5, 3);
console.log(findObjPropsHasOwn(blueRectangle));

// ---- 2nd part

function findObjKeys(obj) {
  return Object.keys(obj).join(", ");
}
console.log(findObjKeys(greenRectangle));
console.log(findObjKeys(yelloRectangle));
console.log(findObjKeys(blueRectangle));
