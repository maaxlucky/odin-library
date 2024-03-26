export function switchColor(button) {
    button.addEventListener('click', () => {
        if (button.textContent === 'Read') {
            button.textContent = 'Not read';
            button.style.backgroundColor = '#FF9C9C';
        } else if (button.textContent === 'Not read') {
            button.textContent = 'Read';
            button.style.backgroundColor = '#9FFF9C';
        }
    })
}

export function removeParent(button, array){
    button.addEventListener('click', () => {
        button.parentElement.remove();
        array.splice(`${button.id}`, 1)
    })
}

export function openModal(button, modal) {
    button.addEventListener('click', () => {
        modal.showModal();
    })
}

export function eraseLibrary(library) {
    let child = library.lastElementChild;
    while(child){
        library.removeChild(child)
        child = library.lastElementChild
    }
}


// export function createBook(oneBook, oneBookTitle, oneBookAuthor, oneBookPages, oneBookRead, oneBookRemove, bookLib, book){
//     oneBook.classList.add('book')
//     bookLib.appendChild(oneBook)
//     oneBook.appendChild(oneBookTitle)
//     oneBook.appendChild(oneBookAuthor)
//     oneBook.appendChild(oneBookPages)
//     book.checkbox ? oneBookRead.textContent = 'Read' : oneBookRead.textContent = 'Not read'
//     book.checkbox ? oneBookRead.style.backgroundColor = '#9FFF9C' : oneBookRead.style.backgroundColor = '#FF9C9C';
//     oneBookRead.classList.add('read')
//     oneBook.appendChild(oneBookRead)
//     oneBookRemove.textContent = 'Remove'
//     oneBookRemove.classList.add('remove')
//     oneBook.appendChild(oneBookRemove)
//     oneBookTitle.textContent = book.title;
//     oneBookAuthor.textContent = book.author;
//     oneBookPages.textContent = `${book.pages} pages`;
// }
