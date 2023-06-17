
const bookApiEndpoint = '';


const bookList = document.querySelector('.book-list');
const loadingElement = document.getElementById('loading');


let page = 1;
const perPage = 10;


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


const displayBooks = (books) => {
  books.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

   

    bookList.appendChild(bookCard);
  });
};


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


fetchBooks()
  .then((books) => {
    displayBooks(books);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

window.addEventListener('scroll', handleLazyLoad);

