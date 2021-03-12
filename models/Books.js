const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add book title']

    },
    author: {
        type: String,
        trim: true,
        required: [true, "Please enter the name of the author"]
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    } 
})

module.exports = mongoose.model('Book', BookSchema);