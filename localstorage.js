// Put the object into storage
let LocalLibraryDatabase = localStorage.setItem('LibraryDatabase', JSON.stringify(LibraryDatabase));

// Retrieve the object from storage
LocalLibraryDatabase = JSON.parse(localStorage.getItem('LibraryDatabase'));

// console.log('typeof retrievedObject: ' + typeof retrievedObject);
// console.log('Value of retrievedObject: ' + retrievedObject);