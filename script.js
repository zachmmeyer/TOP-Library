function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'has not read yet'}`;
  }
}

const sorcerorsStone = new Book("Harry Potter and The Sorceror's Stone", "J.K. Rowling", 223, true);

console.log(sorcerorsStone.info());
