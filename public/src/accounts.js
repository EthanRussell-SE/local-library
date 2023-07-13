function findAccountById(accounts, id) {
  let result = accounts.find((acc) => acc.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  //let accLastName = Object.keys(accounts.name);
  accounts.sort((wordA, wordB) => (wordA.name.last > wordB.name.last ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;

  books.forEach((book) =>
    book.borrows.forEach((borrow) => {
      if (account.id === borrow.id) {
        result++;
      }
    })
  );
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];

  books.forEach((book) => {
    book.borrows.forEach((borrow)=> {
      if(!borrow.returned && borrow.id == account.id){
        book.author = authors.find((author) => author.id === book.authorId);
        result.push(book);
      }
    });
  });
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
