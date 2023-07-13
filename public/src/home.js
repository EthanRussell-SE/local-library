function getTotalBooksCount(books) {
  let result = 0;

  for (let i = 0; i < books.length; i++) {
    result++;
  }

  return result;
}

function getTotalAccountsCount(accounts) {
  let result = 0;

  if (accounts) {
    for (let i = 0; i < accounts.length; i++) {
      result++;
    }
  }
  return result;
}

function getBooksBorrowedCount(books) {
  let result = 0;

  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.returned === false) {
        result++;
      }
    });
  });
  return result;
}

function getMostCommonGenres(books) {
  let genres = [];
  let count = 0;
  books.forEach((book) => {
    const foundGenre = genres.find((genre) => genre.name === book.genre);
    if (foundGenre) {
      foundGenre.count++;
    } else {
      if (count != 5) {
        genres.push({ name: book.genre, count: 1 });
        count++;
      }
    }
  });
  genres.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));

  return genres;
  //sort and slides
}

function getMostPopularBooks(books) {
  let popBooks = [];
  let count = 0;
  let borrowCount = 0;
  books.forEach((book) => {
    borrowCount = book.borrows.length;
    popBooks.push({ name: book.title, count: borrowCount });
  });
  popBooks.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));
  for (let i = 0; i < popBooks.length; i++) {
    if (popBooks.length != 5) {
      popBooks.pop();
    }
  }

  return popBooks;
}

function getMostPopularAuthors(books, authors) {
  let popAuthors = [];
  let borrowCount = 0;
  let authorName;
  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.id) {
        authorName = author.name.first + " " + author.name.last;
        borrowCount = book.borrows.length;
        popAuthors.push({ name: authorName, count: borrowCount });
      }
    });
  });
  popAuthors.sort((authorA, authorB) =>
    authorA.count < authorB.count ? 1 : -1
  );
  for (let i = 0; i < popAuthors.length; i++) {
    if (popAuthors.length != 5) {
      popAuthors.pop();
    }
  }

  return popAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
