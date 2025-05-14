/* eslint-disable no-unused-vars */

class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }
  sale(itemID) {
    const item = this.inventory[itemID];
    item.stock -= 1;
    return `1 ${item.name} - Thank you and come again!`;
  }
  stockTotal() {
    const total = Object.values(this.inventory).reduce(
      (sum, item) => sum + item.stock,
      0
    );
    return total > 0 ? `${total} item(s)` : "Out of Stock";
  }
}
