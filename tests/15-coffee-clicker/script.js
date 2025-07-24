/* eslint-disable no-alert */

// Add your localStorage functions here
function storeToLocalStorage(data) {
  localStorage.setItem("CoffeeCount", JSON.stringify(data));
}

function loadPreviousValue() {
  const saved = localStorage.getItem("CoffeeCount");
  if (saved) {
    return JSON.parse(saved);
  }
  return null;
}

/**************
 *   SLICE 1
 **************/

function updateCoffeeView(coffeeQty) {
  const coffeeCounter = document.getElementById("coffee_counter");
  coffeeCounter.innerText = coffeeQty;
}

function clickCoffee(data) {
  data.coffee += 1;
  updateCoffeeView(data.coffee);
  renderProducers(data);
  storeToLocalStorage(data); // Save after clicking
}

/**************
 *   SLICE 2
 **************/

function unlockProducers(producers, coffeeCount) {
  producers.forEach((producer) => {
    if (coffeeCount >= producer.price / 2) {
      producer.unlocked = true;
    }
  });
}

function getUnlockedProducers(data) {
  return data.producers.filter((producer) => producer.unlocked);
}

function makeDisplayNameFromId(id) {
  return id
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function makeProducerDiv(producer) {
  const containerDiv = document.createElement("div");
  containerDiv.className = "producer";

  const titleDiv = document.createElement("div"); //title
  titleDiv.className = "producer-title";
  titleDiv.innerText = makeDisplayNameFromId(producer.id);

  const leftColumn = document.createElement("div");
  leftColumn.className = "producer-column";

  const rightColumn = document.createElement("div");
  rightColumn.className = "producer-column";

  const button = document.createElement("button");
  button.id = `buy_${producer.id}`;
  button.className = "buy-button";
  button.innerText = "Buy";

  const qtyDiv = document.createElement("div");
  qtyDiv.innerText = `Quantity: ${producer.quantity}`;

  const cpsDiv = document.createElement("div");
  cpsDiv.innerText = `Coffee/second : ${producer.cps}`;

  const costDiv = document.createElement("div");
  costDiv.innerText = `Cost: ${producer.price} coffee`;

  leftColumn.appendChild(titleDiv);
  leftColumn.appendChild(button);

  rightColumn.appendChild(qtyDiv);
  rightColumn.appendChild(cpsDiv);
  rightColumn.appendChild(costDiv);

  containerDiv.appendChild(leftColumn);
  containerDiv.appendChild(rightColumn);

  return containerDiv;
}

function deleteAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderProducers(data) {
  unlockProducers(data.producers, data.coffee);
  const unlockedProducers = getUnlockedProducers(data);
  const producerContainer = document.getElementById("producer_container");
  deleteAllChildNodes(producerContainer);
  unlockedProducers.forEach((producer) => {
    producerContainer.appendChild(makeProducerDiv(producer));
  });
}

/**************
 *   SLICE 3
 **************/

function getProducerById(data, producerId) {
  return data.producers.find((producer) => producer.id === producerId);
}

function canAffordProducer(data, producerId) {
  const producer = getProducerById(data, producerId);
  return data.coffee >= producer.price;
}

function updateCPSView(cps) {
  const cpsDisplay = document.getElementById("cps");
  cpsDisplay.innerText = cps;
}

function updatePrice(oldPrice) {
  return Math.floor(oldPrice * 1.25);
}

function attemptToBuyProducer(data, producerId) {
  const producer = getProducerById(data, producerId);
  if (!canAffordProducer(data, producerId)) {
    return false;
  }

  data.coffee -= producer.price;
  producer.qty += 1;
  producer.price = updatePrice(producer.price);
  data.totalCPS += producer.cps;
  storeToLocalStorage(data); // Save after buying
  return true;
}

function buyButtonClick(event, data) {
  if (event.target.tagName !== "BUTTON") return;

  const producerId = event.target.id.replace("buy_", "");
  const success = attemptToBuyProducer(data, producerId);

  if (!success) {
    window.alert("Not enough coffee");
    return;
  }
  updateCoffeeView(data.coffee);
  updateCPSView(data.totalCPS);
  renderProducers(data);
}

function tick(data) {
  data.coffee += data.totalCPS;
  updateCoffeeView(data.coffee);
  renderProducers(data);
  storeToLocalStorage(data); // Save after each tick
}

/*************************
 *  Start your engines!
 *************************/

// You don't need to edit any of the code below
// But it is worth reading so you know what it does!

// So far we've just defined some functions; we haven't actually
// called any of them. Now it's time to get things moving.

// We'll begin with a check to see if we're in a web browser; if we're just running this code in node for purposes of testing, we don't want to 'start the engines'.

// How does this check work? Node gives us access to a global variable /// called `process`, but this variable is undefined in the browser. So,
// we can see if we're in node by checking to see if `process` exists.
if (typeof process === "undefined") {
  // Load saved data or use default data
  let data = loadPreviousValue() || window.data;

  // If we loaded saved data, update the views
  if (loadPreviousValue()) {
    updateCoffeeView(data.coffee);
    updateCPSView(data.totalCPS);
    renderProducers(data);
  }

  // Add an event listener to the giant coffee emoji
  const bigCoffee = document.getElementById("big_coffee");
  bigCoffee.addEventListener("click", () => clickCoffee(data));

  // Add an event listener to the container that holds all of the producers
  // Pass in the browser event and our data object to the event listener
  const producerContainer = document.getElementById("producer_container");
  producerContainer.addEventListener("click", (event) => {
    buyButtonClick(event, data);
  });

  // Call the tick function passing in the data object once per second
  setInterval(() => tick(data), 1000);
}
// Meanwhile, if we aren't in a browser and are instead in node
// we'll need to exports the code written here so we can import and
// Don't worry if it's not clear exactly what's going on here;
// We just need this to run the tests in Mocha.
else if (process) {
  module.exports = {
    updateCoffeeView,
    clickCoffee,
    unlockProducers,
    getUnlockedProducers,
    makeDisplayNameFromId,
    makeProducerDiv,
    deleteAllChildNodes,
    renderProducers,
    updateCPSView,
    getProducerById,
    canAffordProducer,
    updatePrice,
    attemptToBuyProducer,
    buyButtonClick,
    tick,
  };
}
