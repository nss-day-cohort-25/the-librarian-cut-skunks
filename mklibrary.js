//Book array to be used for the library object
LibraryDatabase.bookInventory = [];

//function to pass book info through using parameters from the book's title, author, genre, and ISBN
function makeBooks (title, author, genre, isbn) {
    let book = Object.create({}, {
        title: {
            value: title,
            writable: false,
            enumerable: true
            
        },
        author: {
            value: author,
            writable: false,
            enumerable: true
            
        },
        genre: {
            value: genre,
            writable: false,
            enumerable: true
            
        },
        ISBN: {
            value: isbn,
            writable: false,
            enumerable: true
            
        },
        checkedOut: {
            value: false,
            writable: true,
            enumerable: false,
            
        },
        dueDate: {
            value: " ",
            writable: true,
            enumerable: true
            
        },
    })

    //As the book is created, push it to the database
    LibraryDatabase.bookInventory.push(book);
   
}