const Offer = require("../Models/B_offer");
const mongoose = require('mongoose');

exports.getOffers = async (req, res) => {
  try {
     const offer = await Offer.find();
     res.status(200).json(offer);
   } catch (error) {
     res.status(500).json({ message: "Server error", error: error.message });
   }
 };
exports.getOfferDetailsById = async (req, res) => {
  const { _id } = req.params;  

  try {
      const offer = await Offer.findById(_id); 
  
      if (offer) {
        res.status(200).json(offer);
      } else {
        res.status(404).json({ message: "Offers not found" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Server error",
        error: error.message, 
      });
    }
  };
  