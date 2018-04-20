const customers = []

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
   customers.push(customer)
}
// createCustomer = (firstName, lastName, genre, address)   
console.log(createCustomer("Rachael", "Babcock","classics", "123 Ewing Lane"))
console.log(customers)