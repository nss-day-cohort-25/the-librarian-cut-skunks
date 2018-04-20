const bookInventory = [];


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

    
    bookInventory.push(book);
}


makeBooks("Harry Potter", "me", "kids", 2323, " ", " ");
makeBooks("Stranger", "you", "fiction", 4343, " ", " ")


console.log(bookInventory);


