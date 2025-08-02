const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true 
    },
    lang: {
        type: String,
        required: true
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


module.exports = mongoose.model('Offer', offerSchema, 'offer');

