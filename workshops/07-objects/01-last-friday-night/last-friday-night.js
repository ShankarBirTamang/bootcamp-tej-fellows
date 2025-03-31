// YOUR CODE BELOW
function lastFridayNight(arrayTransactions) {
  let spentAmount = 0;
  for (let i = 0; i < arrayTransactions.length; i++) {
    let transaction = arrayTransactions[i];
    spentAmount += transaction.amount;
  }
  return spentAmount;
}

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];

console.log(lastFridayNight(transactions));
