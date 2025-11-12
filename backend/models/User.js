const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address'],
    },

    password : {
        type : String,
        required : true,
        minlength: [6, 'Password must be at least 6 characters'],

    },
    role: {
    type: String,
    enum: ['user', 'company'], // only allow 'user' or 'company'
    required: true
  }
},
{
    timestamps:true
});

module.exports = mongoose.model('User',userSchema);
