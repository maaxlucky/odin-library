"use strict";


// import {createBook, eraseLibrary, openModal, removeParent, switchColor} from "./func.js";
const addBtn = document.querySelector('.add-btn')
const dialog = document.querySelector('dialog')
const submitBtn = document.querySelector('.submit')
const removeBtn = document.querySelector('.remove')
const readBtn = document.querySelector('.read')
const author = document.querySelector('.input-author')
const title = document.querySelector('.input-title')
const pages = document.querySelector('.input-pages')
const bookLib = document.querySelector('.books')
const checkbox = document.querySelector('.check')
const myLibrary = []

class Book{

    constructor(title, author, pages, checkbox) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.checkbox = checkbox;
    }
}

class Card {
    constructor() {
        this.cardDiv = document.createElement('div')
        this.cardTitle = document.createElement('p')
        this.cardAuthor = document.createElement('p')
        this.pages = document.createElement('p')
        this.read = document.createElement('button')
        this.remove = document.createElement('button')
    }
    compose() {
        this.cardDiv.classList.add('book')
        this.cardDiv.appendChild(this.cardTitle)
        this.cardDiv.appendChild(this.cardAuthor)
        this.cardDiv.appendChild(this.pages)
        this.cardDiv.appendChild(this.read)
        this.read.classList.add('read')
        this.read.textContent = 'Read'
        this.cardDiv.appendChild(this.remove)
        this.remove.textContent = 'Remove'
        this.remove.classList.add('remove')
    }
}


function switchColor(button) {
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

function removeParent(button, array){
    button.addEventListener('click', () => {
        button.parentElement.remove();
        array.splice(`${button.id}`, 1)
    })
}

function openModal(button, modal) {
    button.addEventListener('click', () => {
        modal.showModal();
    })
}

function eraseLibrary(library) {
    let child = library.lastElementChild;
    while(child){
        library.removeChild(child)
        child = library.lastElementChild
    }
}

submitBtn.addEventListener('click', (event) => {
    eraseLibrary(bookLib)
    event.preventDefault();
    let book = new Book(title.value, author.value, pages.value, checkbox.checked)
    myLibrary.push(book)
    console.log(myLibrary)
    addToLibrary(myLibrary, bookLib)
    dialog.close(pages.value)
})

function addToLibrary(bookArray, bookLib) {
    for (let i = 0; i < bookArray.length; i++) {
        let card = new Card()
        card.compose()
        card.cardTitle.textContent = bookArray[i].title
        card.cardAuthor.textContent = bookArray[i].author
        card.pages.textContent = bookArray[i].pages
        card.cardDiv.setAttribute('id', `${i}`)
        card.remove.setAttribute('id', `${i}`)
        bookArray[i].checkbox ? card.read.textContent = 'Read' : card.read.textContent = 'Not read'
        bookArray[i].checkbox ? card.read.style.backgroundColor = '#9FFF9C' : card.read.style.backgroundColor = '#E58C8C'
        bookLib.appendChild(card.cardDiv)
        removeParent(card.remove, myLibrary)
        switchColor(card.read)
    }
}

openModal(addBtn, dialog)