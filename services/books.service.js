const Book = require('../models/Book');

const createBook = async (bookInfo) => {
    const book = await Book.create(bookInfo);
    return book;
}

const getAllBooks = async () => {
    const books = await Book.find();
    return books;
}

const getBookById = async (id) => {
    const book = await Book.findById(id);
    if(!book) {
        throw new Error("No such book exists")
    }
    return book;
}

const updateBook = async (id, updateBody) => {
    const book = await Book.findOneAndUpdate({
        _id: id
    },updateBody, {
        new: true
    })

    if(!book) {
        throw new Error("No Such book exists")
    }
    return book;
}

const deleteBook = async (id) => {
    const book = await Book.findOneAndDelete({_id: id});

    if(!book) {
        throw new Error("No such book exists")
    } 
    return book;
}




module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}