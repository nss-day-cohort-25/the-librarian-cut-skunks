LibraryDatabase.customers = []

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
       
   })
   LibraryDatabase.customers.push(customer)
}
// createCustomer = (firstName, lastName, genre, address)   

