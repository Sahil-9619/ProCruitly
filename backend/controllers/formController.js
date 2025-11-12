const mongoose = require("mongoose");
const Form = require("../models/form");

// ✅ Submit form data
exports.submitForm = async (req, res) => {
  try {
    const userId = req.cookies?.userId; // make sure cookie-parser is enabled
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Not logged in. Please log in first.",
      });
    }

    const formData = req.body;
    formData.userId = userId; // link form to logged-in user

    const newForm = new Form(formData);
    await newForm.save();

     if (req.file) {
      formData.profilePhoto = req.file.filename;
    }

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully!",
      data: newForm,
    });
  } catch (error) {
    console.error("Error saving form:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while saving form.",
      error: error.message,
    });
  }
};

exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find(); // get all forms, no filter
    res.status(200).json({
      success: true,
      data: forms,
    });
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching form details",
      error: error.message,
    });
  }
};

exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: form });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching user", error: error.message });
  }
};
