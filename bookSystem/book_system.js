let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescrition = document.getElementById('bookDescription').value
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value);
    if (bookName && authorName && bookDescrition && !isNaN(pagesNumber)){
        const book = {
            name:bookName,
            authorName: authorName,
            bookDescrition: bookDescrition,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Por favor complete los datos completamente')
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Número de libro: ${index + 1}</h1>
        <p><strong>Nombre del libro: </strong>${book.name}</p>
        <p><strong>Nombre del autor:</strong> ${book.authorName}</p>
        <p><strong>Descripción del libro:</strong> ${book.bookDescription}</p>
        <p><strong>Número de páginas:</strong> ${book.pagesNumber} página(s)</p>
        <button onclick="editbook(${index})">Editar</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editBook (index){
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = bookDescription;
    document.getElementById("pagesNumber").value = book.pagesNumber;
    book.splice(index, 1); //elimina entrada antigua
    showbooks();
}
function clearInputs(){
    document.getElementById('bookName').value ="";
    document.getElementById('authorName').value ="";
    document.getElementById('bookDescription').value = "";
    document.getElementById("pagesNumber").value ="";
}