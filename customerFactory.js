//Customer array to be used for the library object
LibraryDatabase.customers = []

//Function to pass customer details through using parameters of customers' first name, last name, preferred genre, and address
const createCustomer = (firstName, lastName, genre, address) => {

    let customer = Object.create({}, {
        firstName:{
            value: firstName,
            enumerable: true,
       },
        lastName:{
            value: lastName,
            enumerable: true,
       },
       favGenre:{
           value: genre,
           enumerable: true,
       },
       libBooks: {
           value: [],
           enumerable: true
       },
       address:{
           value: address,
           enumerable: true
       },
       libraryCard:{
           value: "",
           enumerable: true,
           writable: true
       }, //checkoutABook method to iterate over the book's current status (true/false) and if available, add to customer's bookshelf
       checkoutABook:{
           value: function(){},
           enumerable: false,
           writable: true
       }, //returnBook method to iterate over the book's checked out status and take it out of the customer's bookshelf
       returnBook:{
           value: function(){},
           enumerable: false,
           writable: true
       }
       
   })   //As the customer is created, push it to the database
   LibraryDatabase.customers.push(customer)
}