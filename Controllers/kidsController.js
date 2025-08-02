const Kids = require("../Models/B_kids");
const mongoose = require("mongoose");

exports.getKids = async ( req, res ) => {
     try {
        const kids = await Kids.find();
        res.status(200).json(kids);
      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }
    };

  exports.getKidsDetailsById =  async (req, res) => {
    const { _id } = req.params;
    
      try {
        const kids = await Kids.findById(_id); 
    
        if (kids) {
          res.status(200).json(kids);
        } else {
          res.status(404).json({ message: "Kids book  not found" });
        }
      } catch (error) {
        res.status(500).json({
          message: "Server error",
          error: error.message, 
        });
      }
    };
    