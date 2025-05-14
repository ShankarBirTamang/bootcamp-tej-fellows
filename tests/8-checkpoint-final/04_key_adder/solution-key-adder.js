/* eslint-disable no-unused-vars, no-prototype-builtins */
function keyAdder() {
  let sum = 0;
  const ownProps = Object.keys(this);
  for (const key of ownProps) {
    if (typeof this[key] === "number" && this.hasOwnProperty(key)) {
      sum += this[key];
    }
  }
  return sum;
}
