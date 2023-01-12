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
  let read = document.getElementById("read").checked;
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
    console.log(myLibrary[i].read);
    if (myLibrary[i].read === true) {
      newBook.innerHTML =
      "<h3>" + myLibrary[i].title + "</h3><br><p>" + myLibrary[i].author + "</p><br><p>" + myLibrary[i].pages + " pages</p><br><p class='stateRead'>I have read this book.</p><br><button class='changeRead'>I have not read this</button><button class='remove'>Remove</button>";
    } else {
      newBook.innerHTML =
      "<h3>" + myLibrary[i].title + "</h3><br><p>" + myLibrary[i].author + "</p><br><p>" + myLibrary[i].pages + " pages</p><br><p class='stateRead'>I have not read this book.</p><br><button class='changeRead'>I have read this</button><button class='remove'>Remove</button>";
    }
    bookList.appendChild(newBook);
    document.getElementsByClassName("remove")[i].addEventListener("click", function () {
      myLibrary.splice(i, 1);
      formList();
    });
    document.getElementsByClassName("changeRead")[i].addEventListener("click", function () {
      let stateRead = document.getElementsByClassName("stateRead")[i];
      let buttonRead = document.getElementsByClassName("changeRead")[i];
      if (myLibrary[i].read === true) {
        myLibrary[i].read = false;
        stateRead.innerHTML = "I have not read this book.";
      } else {
        myLibrary[i].read = true;
        stateRead.innerHTML = "I have read this book.";
      }
      formList();
    });
  }
}
