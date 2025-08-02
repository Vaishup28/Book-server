const bookList = require("../Models/B_mystery");
const mongoose = require("mongoose");

exports.getMysteryById = async (req, res) => {
  const mysteryParam = req.params._id;

  try {
    let Mys;

    if (mongoose.Types.ObjectId.isValid(mysteryParam)) {
      Mys = await bookList.findById(mysteryParam);
    }


    if (!Mys) {
      Mys = await bookList.findOne({ id: parseInt(mysteryParam) });
    }

    
    if (Mys) {
      res.status(200).json({ Mys });
    } else {
      res.status(404).json({ message: "Book not found" });
    }

  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};
