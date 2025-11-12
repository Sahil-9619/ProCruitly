const User = require('../models/User');
const Company = require('../models/Company')
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const registerUser = async (req, res) => {
    try{
        const {email, password, role} = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser){
          return res.status(400).json({message: 'User already exists'});
        }

         // Validate input
         if (!email || !password || !role) {
           return res.status(400).json({ message: 'All fields are required' });
         }

         const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
         if (!passwordRegex.test(password)) {
         return res.status(400).json({ message: 'Password must contain letters and numbers' });
            }
         //Hash the password....
        const hashedPassword = await bcrypt.hash(password, 10);

        //User Creation
        if (role === 'user') {
      const newUser = new User({ email, password: hashedPassword,role });
      await newUser.save();
      return res.status(201).json({ message: 'User created successfully!' });
    } else if (role === 'company') {
      const newCompany = new Company({ email, password: hashedPassword,role });
      await newCompany.save();
      return res.status(201).json({ message: 'Company created successfully!' });
    } else {
      return res.status(400).json({ message: 'Invalid role selected' });
    }} catch(err) {
        console.error('Signup error:', err);
        res.status(500).json({message: 'Server error'});
    }
};

module.exports = {registerUser};