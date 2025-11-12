const express = require('express');
const router = express.Router();
const { submitForm, getAllForms, getFormById } = require('../controllers/formController');
const upload = require("../middleware/upload");
const formController = require("../controllers/formController");

// ✅ Route to submit form data
router.post('/submit', submitForm);

// ✅ Optional: Route to get all submitted forms
router.get('/all', getAllForms);

router.get("/:id", getFormById);

// form submit with image
router.post("/submit", upload.single("profilePhoto"), formController.submitForm);

module.exports = router;
