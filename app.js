let bookNames = document.querySelectorAll('#book-list li .name')
console.log(bookNames)

//Accessing list of elements and consoling their text-content
bookNames.forEach((bookName) => {
    console.log(bookName.textContent)
})

//Changing the textContent
bookNames.forEach((bookName) => {
    bookName.textContent += ' myCustomText'
})

//appending to existing innerHtml
let bookList = document.querySelector('#book-list')
console.log(bookList.innerHTML)
bookList.innerHTML += '<p>Nishant</p>'