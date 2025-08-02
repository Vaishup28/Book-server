const Cart = require('../Models/Cart');
const mongoose = require('mongoose');

exports.saveCart = async (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !items || !Array.isArray(items)) {
    return res.status(400).json({ message: "Invalid request payload" });
  }

  try {
    const existingCart = await Cart.findOne({ userId });

    if (existingCart) {
      existingCart.items = items;
      await existingCart.save();
    } else {
      const newCart = new Cart({ userId, items });
      await newCart.save();
    }

    res.status(200).json({ message: 'Cart saved successfully' });
  } catch (error) {
    console.error("Error saving cart:", error);
    res.status(500).json({ message: 'Error saving cart', error: error.message });
  }
};
