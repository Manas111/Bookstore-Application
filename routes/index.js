const express = require('express');
const router = express.Router();
const authRoutes = require('../routes/auth.router');
const booksRoutes = require('../routes/books.router')
const verify = require('../utils/authenticate')

router.use('/auth', authRoutes)
router.use('/book', verify , booksRoutes);


module.exports = router;
