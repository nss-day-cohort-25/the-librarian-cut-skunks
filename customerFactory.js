//Customer array to be used for the library object
LibraryDatabase.customers = []

//Function to pass customer details through
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
       },
       checkoutABook:{
           value: function(){},
           enumerable: false,
           writable: true
       },
       returnBook:{
           value: function(){},
           enumerable: false,
           writable: true
       }
       
   })   //As the customer is created, push it to the database
   LibraryDatabase.customers.push(customer)
}