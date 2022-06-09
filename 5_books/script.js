const books = document.querySelectorAll('li');
const bookList = document.querySelector('.bookList');

bookList.addEventListener('click', (evt) => {
    for (i = 0; i < books.length; i++) {
        bookList.classList.remove('orange');
        books[i].classList.remove('orange');
    }
    evt.target.classList.add('orange');
});