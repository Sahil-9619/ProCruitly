const mongoose = require('mongoose')


const adminSchema= new mongoose.Schema({
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

    }
},
{
    timestamps:true
});

module.exports = mongoose.model('adminlogin',adminSchema);
