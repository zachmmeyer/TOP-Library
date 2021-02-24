function Library() {
  this.books = [];
  
  this.loadFromLocalStorage = () => {
    const tempBooks = localStorage.getItem("books");
    if (tempBooks) {
      this.books = JSON.parse(tempBooks);
    }
  }

  this.push = (book) => {
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  this.clear = () => {
    localStorage.clear();
    this.books = [];
  }
};

const myLibrary = new Library();
myLibrary.loadFromLocalStorage();
console.log(myLibrary.books);

const bookForm = document.querySelector("#add-book-form");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  bookForm.reset();
});

const clearStorage = document.querySelector("#clearStorage");
clearStorage.addEventListener("click", () => {
  myLibrary.clear();
})

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

function addBookToLibrary() {
  const formTitle = document.forms["add-book-form"]["title"].value;
  const formAuthor = document.forms["add-book-form"]["author"].value;
  const formPages = document.forms["add-book-form"]["pages"].value;
  const formRead = document.forms["add-book-form"]["read"].value;

  if (formTitle == "" || formAuthor == "" || formPages == "") {
    //Does not submit book missing information to library
  } else {
    const book = new Book(formTitle, formAuthor, formPages, formRead);
    myLibrary.push(book);
  }
}
