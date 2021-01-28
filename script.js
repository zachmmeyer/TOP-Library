let myLibrary;

//Check for existing library in storage
if (!localStorage.getItem("myLibrary")) {
  myLibrary = new Array();
  console.log("Initializing new library");
} else {
  const tempLibrary = localStorage.getItem("myLibrary");
  myLibrary = JSON.parse(tempLibrary);
  console.log("Restoring library from storage");
}

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

  if (document.forms["add-book-form"]["clearStorage"].checked) {
    localStorage.clear();
  } else if (formTitle == "" || formAuthor == "" || formPages == "") {
    //Does not submit book missing information to library
  } else {
    const book = new Book(formTitle, formAuthor, formPages, formRead);
    myLibrary.push(book);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }
}

console.log(myLibrary);
