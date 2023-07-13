function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id);
}

function findBookById(books, id) {
  return books.find((book) => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let resultTrue = [];
  let isEveryFalse;
  //result.push
  //every
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      result.push(book);
    } else {
      resultTrue.push(book);
    }
  });

  let finalArray = [];
  finalArray.push(result);
  finalArray.push(resultTrue);
  //result.push(books.filter((book) => book.borrows.returned === true));
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  //go through the books borrow history
  //for each borrower, look up acc info
  
let result = [];
let borrowed = book.borrows;
borrowed.forEach((book) => {
  let accountMatch = accounts.find((account)=> account.id === book.id);
  let matchingObject = accountMatch;
  if(matchingObject['returned'] = book.returned){
    result.push(matchingObject);
  }
});
return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
