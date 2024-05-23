let library = [];

function Book(title, author, numberOfPages, status){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages; // should be a number in numeric chars
    if (status === true){
        this.status = "read";
    } else {
        this.status = "unread"
    }
} 

function addBook(title, author, numberOfPages, status){
    library.push(new Book(title, author, numberOfPages, status));
}


// loop through array to display books in library
function displayBooks(){
    let container = document.querySelector(".book-container");
    // clear container 
    container.innerHTML='';

    // insert add-book-tile
    let addBookTile = document.createElement("div");
    let addBookTileContent = document.createElement("div");
    let addBookBtn = document.createElement("button");
    let addBookParagraph = document.createElement("p");

    addBookTile.className = "add-book-tile";
    addBookTileContent.className = "add-book";
    addBookBtn.className = "add-btn";
    addBookBtn.textContent = "+";
    addBookParagraph.textContent = "Add Book";

    addBookTileContent.appendChild(addBookBtn);
    addBookTileContent.appendChild(addBookParagraph);
    addBookTile.appendChild(addBookTileContent);
    container.appendChild(addBookTile);

    let addBtn = document.querySelector(".add-btn");
    addBtn.addEventListener("click", () => {
        let addBookForm = document.querySelector(".add-book-form");
        addBookForm.style.visibility = "visible";
    });


    let index = 0;

    for (book of library){
        let bookTile = document.createElement("div");
        let title = document.createElement("p");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let status = document.createElement("button");
        let deleteButton = document.createElement("button");

        bookTile.className = "book-tile";
        bookTile.id = index;
        title.textContent = book.title;
        title.className = "book-title";
        author.textContent = book.author;
        author.className = "book-author";
        pages.textContent = `${book.numberOfPages} pages`;
        pages.className = "book-pages";
        status.textContent = book.status;
        status.classList.add(`status-btn-${index}`);
        status.classList.add("book-status");
        deleteButton.textContent = "delete";
        deleteButton.classList.add(`delete-btn-${index}`);
        deleteButton.classList.add("delete-btn"); 

        bookTile.appendChild(title);
        bookTile.appendChild(author);
        bookTile.appendChild(pages);
        bookTile.appendChild(status);
        bookTile.appendChild(deleteButton);

        container.appendChild(bookTile);

        if (library.length >= 1){
            let deleteBtn = document.querySelector(`.delete-btn-${index}`);
            deleteBtn.addEventListener("click", (event) => {
                let bookCard = event.target.parentNode.id;
                deleteBook(Number(bookCard));
            });

            let statusBtn = document.querySelector(`.status-btn-${index}`);
            statusBtn.addEventListener("click", (event) => {
                let libraryIndex = event.target.parentNode.id;
                console.log("CLICKED!!")
                updateStatus(libraryIndex);
            })
        }
        index += 1;
    }
}



function addToLibrary(event){

    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookLength = document.getElementById("number_of_pages").value;
    let bookStatus = document.getElementsByName("status")[0].checked;

    addBook(bookTitle, bookAuthor, bookLength, bookStatus);
    displayBooks();
    let addBookForm = document.querySelector(".add-book-form");
    addBookForm.style.visibility = "hidden";
    event.preventDefault(); 
}


function deleteBook(index){
    library.splice(index, 1);
    let tempLibrary = library;
    displayBooks();
}

function updateStatus(index){
    if (library[index].status === "read"){
        library[index].status = "unread";
    } else {
        library[index].status = "read";
    }
    displayBooks();
}

window.addEventListener("DOMContentLoaded", () => {
    displayBooks();
});