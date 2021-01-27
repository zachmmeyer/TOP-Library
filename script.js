let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read: ${
    this.read ? "yes" : "no"
  }`;
};

const sorcerorsStone = new Book(
  "Harry Potter and The Sorceror's Stone",
  "J.K. Rowling",
  223,
  false
);
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);

//console.log(sorcerorsStone.info());
// console.log(theHobbit.info());

myLibrary.push(theHobbit);
myLibrary.push(sorcerorsStone);

console.log(myLibrary);
