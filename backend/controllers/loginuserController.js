const User = require('../models/User');
const Company = require('../models/Company');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST /api/users/login
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: 'Email, password, and role are required' });
    }

    // Choose collection based on role
    let account;
    if (role === 'user') {
      account = await User.findOne({ email });
    } else if (role === 'company') {
      account = await Company.findOne({ email });
    } else {
      return res.status(400).json({ message: 'Invalid role selected' });
    }

    // Check account existence
    if (!account) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: account._id, role }, 'your_jwt_secret', {
      expiresIn: '7d',
    });

    // Set cookie (optional for session auth)
    res.cookie('token', token, {
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Success response
    res.status(200).json({
      success: true,
      message: `${role === 'company' ? 'Company' : 'User'} login successful`,
      user: {
        _id: account._id,
        email: account.email,
        role,
        token,
      },
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
