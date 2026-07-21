const fontSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

for (let i = 0; i < fontSize.length; i++) {
    const link = fontSize[i];
    link.addEventListener('click', function(event) {
        event.preventDefault();
        for (let j = 0; j < fontSize.length; j++) {
            fontSize[j].classList.remove('font-size_active');
        }
        this.classList.add('font-size_active');
        const size = this.dataset.size;
        book.classList.remove('book_fs-small', 'book_fs-big');
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
}