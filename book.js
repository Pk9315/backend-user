const express = require("express")
const app = express()

const {initializeDatabase} = require("./db/db.connect")
// const fs = require("fs")
const Book = require("./models/books.models")

app.use(express.json())
initializeDatabase()

// const jsonData = fs.readFileSync("books.json", "utf-8")
// const booksData = JSON.parse(jsonData)
// function bookData(){
//     try{
//         for(const book of booksData){
//             const newBook = new Book({
//                 title: book.title,
//                 author: book.author,
//                 publishedYear: book.publishedYear,
//                 genre: book.genre,
//                 language: book.language,
//                 country: book.country,
//                 rating: book.rating,
//                 summary: book.summary,
//                 coverImageUrl: book.coverImageUrl,
//             })
//             newBook.save()
//         }
//     }catch(error){
//         console.log("error seeding the data", error)
//     }

// }
// bookData()

// write a GET Api
app.get("/", (req,res) =>{
    res.send("Hello everyone")
})

// Write an function for book 
async function newBookData(books){
    try{
        const newBook = new Book(books)
        const savedBook = await newBook.save()
        return savedBook
    }
    catch(error){
        throw error
    }
}

// Write an POST Api for the book

app.post("/books", async(req,res) =>{
    try{
        const getBook = await newBookData(req.body)
        res.status(201).json({message: "Book added successfully.", books: getBook})
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
})


// Write a function to read All books data by using find method
async function readAllBooks(){
    try{
        const readBooks = await Book.find()
        return readBooks
    }
    catch(error){
        throw error
    }
}

// 3. Create an API to get all the books in the database as response. 
// Make sure to do error handling.

app.get("/books", async(req,res) =>{
    try{
        const getAllBook = await readAllBooks()
        if(getAllBook.length != 0){
            res.json(getAllBook)
        }else{
            res.status(404).json({error: "Book Data not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch book"})
    }
})


// Write a function to get book data by their title
async function readBookByTitle(bookTitle){
    try{
        const getBookByTitle = await Book.findOne({title: bookTitle})
        return getBookByTitle
    }
    catch(error){
        throw error
    }
}

// 4. Create an API to get a book's detail by its title. Make sure to do error handling.
app.get("/books/:bookTitle", async(req,res) =>{
    try{
        const savedBook = await readBookByTitle(req.params.bookTitle)
        if(savedBook){
           res.json(savedBook)
        }else{
            res.status(404).json({error: "Book Not Found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch data"})
    }
})

// Write a function for find the author via book database
async function readAllBookByAuthor(authorName){
    try{
        const getAllAuthor = await Book.find({author: authorName})
        return getAllAuthor
    }
    catch(error){
        throw error
    }
}

// 5. Create an API to get details of all the books by an author. Make sure to do error handling.

app.get("/books/author/:authorName", async(req,res) =>{
    try{
        const savedAuthor = await readAllBookByAuthor(req.params.authorName)
        if(savedAuthor != 0){
            res.json(savedAuthor)
        }else{
            res.status(404).json({error: "Author not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch book"})
    }
})

// write a function for genre 
async function readAllBookByGenre(bookGenre){
    try{
        const readBookByGenre = await Book.find({genre: bookGenre})
        return readBookByGenre
    }
    catch(error){
        throw error
    }
}

// 6. Create an API to get all the books which are of "Business" genre.

app.get("/books/genre/:bookGenre", async(req,res) =>{
    try{
        const savedGenre = await readAllBookByGenre(req.params.bookGenre)
        if(savedGenre){
            res.json(savedGenre)
        }else{
            res.status(404).json({error: "Book genre not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch the Book"})
    }

}) 

// Write a function for the book and return the data which is realease 
async function readAllBookByRelease(releaseYear){
    try{
        const savedRelease = await Book.findOne({publishedYear: releaseYear})
        return savedRelease
    }
    catch(error){
        throw error
    }
} 

// 7. Create an API to get all the books which was released in the year 2012.
app.get("/books/publishedYear/:releaseYear", async(req,res) =>{
    try{
        const bookReleaseYear = await readAllBookByRelease(req.params.releaseYear)
        if(bookReleaseYear){
            res.json(bookReleaseYear)
        }else{
            res.status(400).json({error: "Book is not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch Data"})
    }
})

// write a function for updating the books rating by return its id
async function findBookByRating(bookId, dataToUpdate){
    try{
        const bookRating = await Book.findByIdAndUpdate(bookId, dataToUpdate, {new: true})
        return bookRating
    }
    catch(error){
        throw error
    }
}

// 8. Create an API to update a book's rating with the help of its id. Update the rating of the "Lean In" from 4.1 to 4.5. 
// Send an error message "Book does not exist", 
// in case that book is not found. Make sure to do error handling.

app.post("/books/_id/:bookId", async(req,res) =>{
    try{
        const updatedBookId = await findBookByRating(req.params.bookId, req.body)
        if(updatedBookId){
            res.status(200).json({message: "Book updated successfully.", updatedBookId: updatedBookId})
        }else{
            res.status(404).json({error: "Book does not exist"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch the data"})
    }
})

// Write a function for its updated the rating with the help of its title
async function updateBookRatingByTitle(bookTitle, dataToUpdate){
    try{
        const updateBookByTitle = await Book.findOneAndUpdate({title: bookTitle}, dataToUpdate, {new: true})
        return updateBookByTitle
    }
    catch(error){
        throw error
    }
}

// 9. Create an API to update a book's rating with the help of its title. Update the details of the book "Shoe Dog". Use the query .findOneAndUpdate() for this. 
// Send an error message "Book does not exist", 
// in case that book is not found. Make sure to do error handling.

app.post("/books/:title", async(req,res) =>{
    try{
        const updateBook = await updateBookRatingByTitle(req.params.title, req.body)
        
        if(updateBook){
            res.status(200).json({message: "Book updated successfully", updateBook: updateBook})
        }else{
            res.status(404).json({error: "Book does not exist"})
        }
    }
    catch(error){
    console.log("ACTUAL ERROR:", error);
    res.status(500).json({error: error.message})
}
})

// Write a function to delete a particular data by using find
async function findAndDeleteBook(booksId){
    try{
        const deleteBooks = await Book.findByIdAndDelete(booksId)
        return deleteBooks
    }
    catch(error){
        throw error
    }
}

// 10. Create an API to delete a book with the help of a book id,
//  Send an error message "Book not found" in case the book does not exist.
//  Make sure to do error handling.

app.delete("/books/:booksId", async(req,res) =>{
    try{
        const updateBookAfterDelete = await findAndDeleteBook(req.params.booksId)
        if(updateBookAfterDelete){
            res.status(200).json({error: "Book Deleted successfully", updateBookAfterDelete:updateBookAfterDelete})
        }else{
            res.status(404).json({error: "Book not found"})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch book"})
    }
})
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})