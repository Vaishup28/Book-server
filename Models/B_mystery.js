const mongoose = require('mongoose');

const mysterySchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mystery',  mysterySchema, 'mystery');


// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     // id: {
//     //     type: Number,
//     //     required: true,
//     //     unique: true
//     // },
//     name: {
//         type: String,
//         required: true
//     },
//     booktype: {
//         type: String,
//         required: true
//     },
//     book: {
//         type: String,
//         required: true
//     },
//     city: {
//         type: String,
//         required: true
//     },  
//     image: {
//         type: String,
//         required: true
//     }
// });

// // const Book = mongoose.model('Book', bookSchema, 'Books');

// module.exports = mongoose.model('Books', bookSchema );