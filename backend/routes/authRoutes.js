const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/authController');

router.post("/Homepage",registerUser)

module.exports = router;