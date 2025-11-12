const Admin = require("../models/adminlogin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// === Admin Registration ===
exports.registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    console.error("Error during admin registration:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// === Admin Login ===
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Generate JWT token (you forgot this part)
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      "yourSecretKey", // change to env variable later
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("Error during admin login:", err);
    res.status(500).json({ message: "Server error" });
  }
};
