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


function createBook(id,title,author,price,rating){
  const book = Object.create(bookPrototype);
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}

