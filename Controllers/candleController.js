const Candle = require("../Models/B_candle");
const mongoose = require('mongoose');
exports.getCandle = async (req, res) => {
  try {
      const candles = await Candle.find();
      res.status(200).json(candles);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

exports.getCandleDetailsById =  async (req, res) => {
  const { _id } = req.params; 
   try {
      const candle = await Candle.findById(_id); 
  
      if (candle) {
        res.status(200).json(candle);
      } else {
        res.status(404).json({ message: "Candle not found" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Server error",
        error: error.message, 
      });
    }
  };
  