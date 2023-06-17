
const bookApiEndpoint = '';

const bookList = document.querySelector('.book-list');

const fetchBooks = async () => {
  try {
    const response = await fetch(bookApiEndpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching book data:', error);
    return [];
  }
};

// Function to display book data
const displayBooks = (books) => {
  bookList.innerHTML = '';

  books.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('h3');
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    bookCard.appendChild(author);

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${book.genre}`;
    bookCard.appendChild(genre);

    const year = document.createElement('p');
    year.textContent = `Year of Publishing: ${book.year}`;
    bookCard.appendChild(year);

    const availability = document.createElement('p');
    availability.textContent = `Availability: ${book.availableCopies} copies`;
    bookCard.appendChild(availability);

    bookList.appendChild(bookCard);
  });
};


fetchBooks()
  .then((books) => {
    displayBooks(books);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
