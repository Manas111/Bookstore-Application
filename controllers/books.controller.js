
const bookService = require('../services/books.service')

const createBook = async (req, res, next) => {
    try {
        const book = await bookService.createBook(req.body);
        return res.send({success: true, book})
    }catch(err) {
        next(err.message)
    }
}

const getAllBooks = async (req, res, next) => {
    try {
        const books = await bookService.getAllBooks();
        return res.send({success: true, books})
    }   catch(err) {
        next(err.message)
    } 
}

const getBookById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await bookService.getBookById(id);
        return res.send({book: book})
    }catch(err) {
        next(err.message)
    }
}

const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const books = await bookService.updateBook(id, body);
        return res.send({book: books})
    }catch(err) {
        next(err.message)
    }
}

const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await bookService.deleteBook(id);
        return res.send({book})
    }catch(err) {
        next(err.message)
    }
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}
