const Hindi = require("../Models/B_Hindi");
const mongoose = require('mongoose');

exports.getHindiColl = async (req, res) => {
   try {
       const hindi = await Hindi.find();
       res.status(200).json(hindi);
     } catch (error) {
       res.status(500).json({ message: "Server error", error: error.message });
     }
   };

exports.getHinDetailsById = async (req, res) => {
  const { _id } = req.params; 

  try {
      const hindi = await Hindi.findById(_id); 
  
      if (hindi) {
        res.status(200).json(hindi);
      } else {
        res.status(404).json({ message: "Hindi book not found" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Server error",
        error: error.message, 
      });
    }
  };
  