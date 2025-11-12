const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express()

const PORT=3000

const authRoutes = require('./routes/authRoutes');
const loginuserRoutes = require('./routes/loginuserRoutes');
const formRoutes = require('./routes/formRoutes');
const ContactRoutes = require('./routes/ContactRoutes');
const adminRoutes = require("./routes/adminRoutes");

//middleware
//app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/auth',authRoutes);
app.use('/api/users', loginuserRoutes);
app.use('/api/userform', formRoutes);
app.use('/api/contactUs', ContactRoutes);
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/admin", adminRoutes);



//mongoDb connect

mongoose.connect('mongodb://127.0.0.1:27017/procruitly', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

//Root
app.get("/",(req,res)=>{
    res.send("Server is Running")
});

//calling server
app.listen(PORT,()=>{
    console.log("Server is running on PORT ",PORT)
})
