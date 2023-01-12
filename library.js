let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}

document.getElementById("addBook").addEventListener("click", function () {
  openForm();
});

document.getElementById("cancel").addEventListener("click", function () {
  closeForm();
});

document.getElementById("submit").addEventListener("click", function () {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  let book = new Book(title, author, pages, read);
  closeForm();
  addBookToLibrary(book);
  formList();
});

function openForm() {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("addBook").style.display = "none";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("addBook").style.display = "block";
}

function formList() {
  let bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let newBook = document.createElement("div");
    newBook.className = "book";
    if (myLibrary[i].read == "read") {
      newBook.innerHTML =
        myLibrary[i].title +
        " by " +
        myLibrary[i].author +
        ", " +
        myLibrary[i].pages +
        " pages, I have read this book.";
    } else {
      newBook.innerHTML =
        myLibrary[i].title +
        " by " +
        myLibrary[i].author +
        ", " +
        myLibrary[i].pages +
        " pages, I have not read this book.";
    }
    bookList.appendChild(newBook);
  }
}
