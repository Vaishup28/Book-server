const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  productType: {
    type: String, 
    required: true,
    enum: ['Bundle', 'Candle', 'Hindi', 'Kids', 'Monsoon', 'Mystery', 'Offer'], 
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
}, { timestamps: true }); 


module.exports = mongoose.model('Cart', cartSchema);
