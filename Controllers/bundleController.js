const Bundle = require("../Models/B_bundle");
const mongoose = require("mongoose");

exports.getBundle = async (req, res) => {
  try {
    const bundles = await Bundle.find();
    res.status(200).json(bundles);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getBundleDetById = async (req, res) => {
  const { _id } = req.params;

  try {
    const bundle = await Bundle.findById(_id); 

    if (bundle) {
      res.status(200).json(bundle);
    } else {
      res.status(404).json({ message: "Bundle not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message, 
    });
  }
};
