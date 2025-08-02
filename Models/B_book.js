const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    booktype: {
        type: String,
        required: true
    },
    book: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },  
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book', bookSchema, 'books');

