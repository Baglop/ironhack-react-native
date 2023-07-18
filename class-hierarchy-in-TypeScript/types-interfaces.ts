type Person = {
    name: string,
    age: number,
    email: string
}

const person: Person = {
    name: 'Jorge',
    age: 25,
    email: 'jorge@email.com'
}

interface Book {
    title: string,
    author: string,
    pages: number
}

const books: Book[] = [
    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        pages: 464
    },
    {
        title: 'Operating System Concepts',
        author: 'Abraham Silberschatz',
        pages: 972
    },
    {
        title: 'Software Architecture',
        author: 'Neal Ford, Mark Richards, Pramod Sadalag, Zhamak Dehghani',
        pages: 459
    }
]

function displayBookInfo(book: Book) {
    console.log('\nTitle:', book.title)
    console.log('Author:', book.author)
    console.log('Pages:', book.pages)
}

books.map(book => {
    displayBookInfo(book)
})