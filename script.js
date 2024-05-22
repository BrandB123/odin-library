let library = [];

function Book(title, author, numberOfPages, status){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages; // should be a number in numeric chars
    this.status = status; // should be 'read' or 'unread'
} 

function addBook(title, author, numberOfPages, status){
    library.push(new Book(title, author, numberOfPages, status));
}


// loop through array to display books in library
function displayBooks(){
    let container = document.querySelector(".book-container");
    
    for (book of library){
        let bookTile = document.createElement("div");
        let title = document.createElement("p");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let status = document.createElement("button");
        let deleteButton = document.createElement("button");

        bookTile.classList.add("book-tile");
        title.textContent = book.title;
        title.className = "book-title";
        author.textContent = book.author;
        author.className = "book-author";
        pages.textContent = `${book.numberOfPages} pages`;
        pages.className = "book-pages";
        status.textContent = book.status;
        status.className = "book-status";
        deleteButton.textContent = "delete";
        deleteButton.className = "delete-btn";

        bookTile.appendChild(title);
        bookTile.appendChild(author);
        bookTile.appendChild(pages);
        bookTile.appendChild(status);
        bookTile.appendChild(deleteButton);

        container.appendChild(bookTile);
      
    }
}

window.addEventListener("load", () => {
    displayBooks();
  });

let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
    let addBookForm = document.querySelector(".add-book-form");
    addBookForm.style.visibility = "visible";
});



/*let addBookForm = document.querySelector(form);
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let bookTitle = document.querySelector("#title").value;
    let bookAuthor = document.querySelector("#author").value;
    let bookLength = document.querySelector("#number_of_pages").value;
    let bookStatus = document.getElementsByName("status");

    addBook(bookTitle, bookAuthor, bookLength, "read");
    displayBooks();
    let addBookForm = document.querySelector(".add-book-form");
    addBookForm.style.visibility = "hidden";
});*/



function addToLibrary(event){

    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookLength = document.getElementById("number_of_pages").value;
    let bookStatus = document.getElementsByName("status");

    addBook(bookTitle, bookAuthor, bookLength, "read");
    displayBooks();
    let addBookForm = document.querySelector(".add-book-form");
    addBookForm.style.visibility = "hidden";
    event.preventDefault(); 
}

let deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", () => {
    return console.log("DELETE BUTTON IN PROGRESS")
});


// add a button to change the status of the book