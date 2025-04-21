/* eslint-disable no-unused-vars, no-prototype-builtins */

//Shared Prototype Object
const bookPrototype = {
  getInfo: function () {
    return `${this.title} by ${this.author}`;
  },
  getPrice: function () {
    return this.price;
  },
  addRating: function (ratingStr) {
    if (typeof ratingStr === "string" && /^[*]{1,5}$/.test(ratingStr)) {
      this.rating.push(ratingStr);
    }
  },
  getRating: function () {
    if (this.rating.length === 0) return 0;
    //converting each star into number
    const total = this.rating.reduce((sum, stars) => sum + stars.length, 0);
    return total / this.rating.length;
  },
};

//factory function
function createBook(id, title, author, price, rating) {
  const bookInstance = Object.create(bookPrototype);
  bookInstance.id = id;
  bookInstance.title = title;
  bookInstance.author = author;
  bookInstance.price = price;
  bookInstance.rating = rating || [];
  return bookInstance;
}

const book = createBook(1, "Catch 22", "Joseph Heller", 19.99);

console.log(book.id);
console.log(book.title);
console.log(book.author);
console.log(book.price);
console.log(book.rating);

const theCatInTheHat = createBook(3, "The Cat in the Hat", "Dr. Seuss", 1.99);

console.log(typeof theCatInTheHat.getPrice());
console.log(theCatInTheHat.getPrice());

const goodnightMoon = createBook(
  2,
  "Goodnight Moon",
  "Margaret Wise Brown",
  14.99
);
console.log(typeof goodnightMoon.getInfo());
console.log(goodnightMoon.getInfo());

goodnightMoon.addRating("*****");
goodnightMoon.addRating("***");
goodnightMoon.addRating("*");
goodnightMoon.addRating("****");
goodnightMoon.addRating("**");

console.log(goodnightMoon.rating);

console.log(goodnightMoon.getRating());
