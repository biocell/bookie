const express = require('express');
const router = express.Router();
const { getBooks, getBookById, addBook, editBook, deleteBook } = require('../controllers/books');

router
    .route('/')
    .get(getBooks)
    .post(addBook);

router
    .route('/:id')
    .get(getBookById)
    .put(editBook)
    .delete(deleteBook);


module.exports = router;