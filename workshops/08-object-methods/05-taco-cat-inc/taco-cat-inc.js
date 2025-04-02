// let tacoCatInc = {
//   gourmetShell: {
//     "hard treat shell": { cost: 2, quantity: 100 },
//     "soft treat shell": { cost: 1.5, quantity: 100 },
//   },

//   gourmetFishFilling: {
//     salmon: { cost: 5, quantity: 100 },
//     tuna: { cost: 5.5, quantity: 100 },
//     sardines: { cost: 1.5, quantity: 100 },
//   },

//   gourmetVeggie: {
//     "cat grass": { cost: 1, quantity: 100 },
//   },

//   gourmetSeasoning: {
//     "cat nip": { cost: 0.5, quantity: 100 },
//     "treat dust": { cost: 0.1, quantity: 100 },
//   },

//   cash: 0,

//   currentInventory: function () {
//     let currentValue = 0;
//     let gourmetCategories = Object.keys(this);
//     // console.log(gourmetCategories); //checkpoint
//     for (let category of gourmetCategories) {
//       if (typeof this[category] === "object") {
//         let currentCategory = this[category];
//         // console.log("category: ", category);  //checkpoint
//         for (let product in currentCategory) {
//           let currentProduct = currentCategory[product];
//           currentValue += currentProduct.cost * currentProduct.quantity;
//           // console.log("value: ", currentValue); //checkpoint
//         }
//       }
//     }
//     console.log(currentValue);
//     return currentValue;
//   },

//   sale: function (currentOrder) {
//     let currentOrderCategories = Object.keys(currentOrder);
//     let gourmetCategories = Object.keys(this);
//     for (let category of gourmetCategories) {
//       if (typeof this[category] === "object") {
//         let currentCategory = this[category];
//         // console.log(currentCategory);      //checkpoint
//         for (let product in currentCategory) {
//           // console.log("all products: ",product);            //checkpoint
//           for (let item of currentOrderCategories) {
//             if (currentOrder[item] === product) {
//               this.cash += currentCategory[product].cost;
//               currentCategory[product].quantity -= 1;
//               console.log("ordered product:", product); //checkpoint
//               console.log("value:", currentCategory[product]); //checkpoint
//             }
//           }
//         }
//       }
//     }
//     console.log(this.cash);

//     return this.cash;
//   },
// };

// tacoCatInc.currentInventory();
// // YOUR CODE BELOW

// let order = {
//   gourmetShell: "hard treat shell",
//   gourmetFishFilling: "salmon",
// };

// tacoCatInc.sale(order);
// tacoCatInc.sale(order);
// console.log(tacoCatInc.cash); // => 14
// console.log("Tuna quantity: ", tacoCatInc.gourmetFishFilling.tuna.quantity); // tuna is never ordered must be salmon
// tacoCatInc.currentInventory();

// ***************************************************************
// //Alternatively ...
let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,
};

// tacoCatInc.currentInventory = function () {
//   let category = Object.keys(this);
//   let costValue = 0;
//   for (let index in category) {
//     if (typeof this[category[index]] !== "object") continue;
//     let product = Object.keys(this[category[index]]);
//     console.log(product);
//     for (let pIndex in product) {
//       let currentProductValue = this[category[index]][product[pIndex]];
//       costValue += currentProductValue.cost * currentProductValue.quantity;
//       console.log(costValue);
//     }
//   }
//   return costValue;
// };

//Alternatively (shorter way)
tacoCatInc.currentInventory = function () {
  let total = 0;
  for (let category in this) {
    if (typeof this[category] !== "object") continue;
    let items = this[category];
    for (let itemName in items) {
      let itemObj = items[itemName];
      total += itemObj.cost * itemObj.quantity;
    }
  }
  console.log("Current Inventory:", total);
  return total;
};

let order = {
  gourmetShell: "hard treat shell",
  gourmetFishFilling: "salmon",
};

tacoCatInc.sale = function (newOrder) {
  let finalPrice = 0;
  // loop through all of the categories in the order
  for (let category in newOrder) {
    // the choices are the keys in the order object
    let choice = newOrder[category];
    // add the cost of the choice to the final price
    finalPrice += this[category][choice].cost;
    // also add the cost of the choice to the cash property
    this.cash += this[category][choice].cost;
    // console.log("cash:", this.cash); //check point

    // also subtract one from the quantity of the chosen item
    this[category][choice].quantity--;
  }
  console.log("final Price: ", finalPrice);
  return finalPrice;
};

tacoCatInc.currentInventory(); // 1710
tacoCatInc.sale(order); // => 7
tacoCatInc.sale(order); // => 7
console.log("tuna quantity:", tacoCatInc.gourmetFishFilling.salmon.quantity); // => 98
console.log("Cash:", tacoCatInc.cash); //14
tacoCatInc.currentInventory(); //1696
