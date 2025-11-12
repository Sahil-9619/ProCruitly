const ContactUs = require('../models/ContactUs');

const ContactController = async (req, res) => {
  try {
    const { name, email, text } = req.body;

    if (!name || !email || !text) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new ContactUs({ name, email, text });
    await newUser.save();

    res.status(201).json({message:"Saved",contactUs:newUser})
    // ✅ Send success response

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { ContactController };
