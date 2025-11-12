const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  // === 1. Personal Details ===
  fullName: { type: String, required: true },
  dob: { type: Date },
  phone: { type: String },
  email: { type: String, required: true },
  gender: { type: String },
  location: { type: String },

  // === 2. Education ===
  //education: [
    
      institution1: {type: String},
      degree1:{type: String},
      yearOfCompletion1:{type: String},
      cgpa1: {type: String},

      institution2: {type: String},
      degree2:{type: String},
      yearOfCompletion2:{type: String},
      cgpa2: {type: String},

      institution3: {type: String},
      degree3:{type: String},
      yearOfCompletion3:{type: String},
      cgpa3: {type: String},

  // === 3. Job Category ===
  jobCategories: [String],

  // === 4. Experience ===
  
    
  companyName1: String,
  position1: String,
  duration1: String,
  description1: String,
    
  companyName2: String,
  position2: String,
  duration2: String,
  description2: String,
    
  companyName3: String,
  position3: String,
  duration3: String,
  description3: String,
    

  // === 5. Technical Skills ===
  technicalSkill1: String,
  technicalSkill2: String,
  technicalSkill3: String,
  technicalSkill4: String,
  technicalSkill5: String,

  // === 6. Soft Skills ===
  softSkill1: String,
  softSkill2: String,
  softSkill3: String,
  softSkill4: String,
  softSkill5: String,

  // === 7. Portfolio Links ===
  linkedin: { type: String },
  github: { type: String },

  // === 8. Uploads ===
  profilePhoto: { type: String }, // store file path or URL
  resume: { type: String }, // store resume file path

  // === 9. About Me ===
  aboutMe: { type: String },

  createdAt: { type: Date, default: Date.now },
});

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
