
LibraryDatabase.bookInventory = [];


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

    
    LibraryDatabase.bookInventory.push(book);
   
}





console.log(LibraryDatabase);


