
LibraryDatabase.bookInventory = [];


function makeBooks (title, author, genre, isbn) {
    let book = Object.create({
        title: {
            writable: false,
            enumerable: true,
            value: title
        },
        author: {
            writable: false,
            enumerable: true,
            value: author
        },
        genre: {
            writable: false,
            enumerable: true,
            value: genre
        },
        ISBN: {
            writable: false,
            enumerable: true,
            value: isbn
        },
        checkedOut: {
            writable: true,
            enumerable: false,
            value: " "
        },
        dueDate: {
            writable: true,
            enumerable: true,
            value: " "
        },
    })

    
    LibraryDatabase.bookInventory.push(book);
   
}





console.log(LibraryDatabase);


