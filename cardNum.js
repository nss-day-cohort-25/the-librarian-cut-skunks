let k = 1;
function issueCardNum (first, last) {  
  
  for (let i = 0; i < LibraryDatabase.customers.length; i++) {
    if (LibraryDatabase.customers[i].firstName === first && LibraryDatabase.customers[i].lastName === last) {
        LibraryDatabase.customers[i].libraryCard = k++; 
    }
  }
  
}

console.log(issueCardNum("Matthew", "Kelly"));
console.log(issueCardNum("Rachael", "Babcock"))
console.log(LibraryDatabase.customers);







