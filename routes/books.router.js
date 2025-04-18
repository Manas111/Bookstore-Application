const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller')


router.post('/', booksController.createBook)

router.get('/', booksController.getAllBooks)

router.get('/:id', booksController.getBookById)

router.patch('/:id', booksController.updateBook)

router.delete('/:id', booksController.deleteBook)


module.exports = router;
