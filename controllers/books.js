const Book = require('../models/books');

//@desc Get all books
//@routes GET/all/v1/books
//@access Public

exports.getBooks = async (req, res, next) => {
    try {
        const books =await Book.find();
        return res.status(200).json({
            success: true,
            count: books.length,
            data: books
        })
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}
exports.getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            return res.status(400).json({
                success: false,
                error: " Book not found"
            })
        }
        return res.status(200).json({
            success: true,
            data: book
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })   
        
    }
}
exports.addBook = async (req, res, next) => {
    try {
        //const { title, author } = req.body;
        const book = await Book.create(req.body);
        return res.status(201).json({
            success: true,
            data: book
        })
        
        
    } catch (err) {
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: message
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        
        }
    }
}
exports.editBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id);
        if (!book) {
            return res.status(400).json({
                success: false,
                error: 'This book is not in our database'
            })
        }
        await book.updateOne(req.body);
        
        return res.status(200).json({
            success: true,
            data: {}
        });
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })   
        }
    }
exports.deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.param.id)
       
        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'No book found'
            })
        }
        await book.remove();
        return res.status(200).json({
            success: true,
            data: {}
        });
        
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}