/* Create an array of objects representing books with properties like title, author, and year. 

*** Write a function that takes the array and returns a new array with only the book titles. 
*** Print the result.

*/

const titleOfBooks = (arr) => {
    let bookTitles = []
    // const bookTitles = arr.map(book => book.title)

    for (i = 0; i < arr.length; i++) {
        bookTitles.push(arr[i].title)
    }
    return bookTitles
}

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 }
];


console.log(titleOfBooks(books));