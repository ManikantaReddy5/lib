// Define the API endpoint for book data
const bookApiEndpoint = 'https://api.example.com/books';

// DOM elements
const bookList = document.querySelector('.book-list');
const loadingElement = document.getElementById('loading');

// Pagination variables
let page = 1;
const perPage = 10;

// Function to fetch book data from the API
const fetchBooks = async () => {
  try {
    const response = await fetch(`${bookApiEndpoint}?page=${page}&perPage=${perPage}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching book data:', error);
    return [];
  }
};

// Function to display book data
const displayBooks = (books) => {
  books.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    // Create book card content (title, author, genre, year, availability)

    bookList.appendChild(bookCard);
  });
};

// Function to handle lazy loading
const handleLazyLoad = () => {
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.offsetHeight;

  if (scrollTop + windowHeight >= documentHeight - 100) {
    page++;
    fetchBooks()
      .then((books) => {
        displayBooks(books);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
};

// Fetch and display initial book data
fetchBooks()
  .then((books) => {
    displayBooks(books);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

// Add event listener for lazy loading
window.addEventListener('scroll', handleLazyLoad);

