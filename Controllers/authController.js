const User = require('../Models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signupUser = async (req, res) => {
  const { name, email, password } = req.body;

 if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  }catch (err) {
    console.error("Sign Up Error:", err);  
    res.status(500).json({ message: "Server Error", error: err });
  }
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body; 

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Invalid credentials");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login Error:", err.message); 
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
