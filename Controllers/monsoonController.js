const Monsoon = require("../Models/B_monsoon");
const mongoose = require("mongoose");

exports.getMonsoon = async (req, res) => {
  try {
      const monsoon = await Monsoon.find();
      res.status(200).json(monsoon);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

exports.getMonsoonDettailsById = async (req, res) => {
  const { _id } = req.params; 
 
  
    try {
      const monsoon = await Monsoon.findById(_id); 
  
      if (monsoon) {
        res.status(200).json(monsoon);
      } else {
        res.status(404).json({ message: "Monsoon collection is not found" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Server error",
        error: error.message, 
      });
    }
  };