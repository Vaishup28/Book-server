// const bookList = require('../Models/books.json');
const bookList = require('../Models/B_book');
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookList.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.getbookById = async (req,res) => {

    const bookId = req.params._id;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).json({
            message: 'Invalid book ID format'
        });
    }

    try {
        const book = await bookList.findById(bookId);

        if (book) {
            res.status(200).json({ book });
        } else {
            res.status(404).json({
                message: 'Book not found'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Server error',
            error: err.message
        });
    }
};


exports.getbookByCity = async (req, res) => {
  const city = req.params.city;

  try {
    const filteredBooks = await Book.find({
      city: { $regex: new RegExp(city, 'i') } 
    });

    if (filteredBooks.length > 0) {
      res.status(200).json({ bookList: filteredBooks });
    } else {
      res.status(404).json({
        message: 'No books found for this city'
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Server error',
      error: err.message
    });
  }
};

exports.getbookByType = async (req, res) => {
  try {
    const booktype = req.params.booktype.toLowerCase();

    const allBooks = await Book.find(); 

    const filteredBooks = allBooks.filter(
      (book) => book.booktype?.toLowerCase() === booktype
    );

    if (filteredBooks.length > 0) {
      res.status(200).json({ bookList: filteredBooks });
    } else {
      res.status(404).json({ message: "No books found for this type." });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};


exports.signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
  
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid email or password" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });
  
      const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });
  
      res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  

