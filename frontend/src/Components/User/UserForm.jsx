import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UserForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
      setFormData({ ...formData, profilePhoto: file.name }); // just store name or later handle upload
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello")

    const userId = Cookies.get("userId");
    if (!userId) {
      alert("Please log in before submitting your profile ❌");
      return;
    }


    try {
      const res = await fetch("http://localhost:3000/api/userform/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ ...formData, userId }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/registered");
        console.log("Saved:", data);
      } else {
        alert(data.error || "Failed to save ❌");
      }
    } catch (err) {
      console.error("Error submitting:", err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0f1020] flex justify-center items-center py-12 px-4">
      <div className="w-screen ">
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-2 tracking-wide">
          Create Your Profile on ProCruitly
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Fill out the form to showcase your skills and connect with top companies.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10 w-full flex flex-col items-center">
          {/* === 1. Personal Details === */}
          <section className="p-6 rounded-2xl bg-gray-900 text-white w-full border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold mb-5 border-l-4 border-cyan-600 pl-3">
              1. Personal Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium ">Date of Birth</label>
                <input
                  name="dob"
                  type="date"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border   border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Gender</label>
                <select
                  name="gender"
                  onChange={handleChange}
                  className="w-full p-3 text-white bg-gray-800 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="City, State, Country"
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                />
              </div>
            </div>
          </section>

          {/* === 2. Education === */}
          <section className="p-6 bg-gray-900 text-white rounded-2xl w-full border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold mb-5 border-l-4 border-cyan-600 pl-3">
              2. Educational Background
            </h2>

            
              <div className="mb-6 border border-cyan-100 rounded-xl p-4">
                <h4 className="text-lg font-medium mb-3">Education 1</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="institution1"
                    type="text"
                    placeholder="Institution Name"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                  <input
                    name="degree1"
                    type="text"
                    placeholder="Degree / Course"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <input
                    name="yearOfCompletion1"
                    type="text"
                    placeholder="Year of Completion"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                  <input
                    name="cgpa1"
                    type="text"
                    placeholder="Percentage / CGPA"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                </div>
              </div>
                <div className="mb-6 border border-cyan-100 rounded-xl p-4">
                <h4 className="text-lg font-medium mb-3">Education 2</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="institution2"
                    type="text"
                    placeholder="Institution Name"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                  <input
                    name="degree2"
                    type="text"
                    placeholder="Degree / Course"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <input
                    name="yearOfCompletion2"
                    type="text"
                    placeholder="Year of Completion"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                  <input
                    name="cgpa2"
                    type="text"
                    placeholder="Percentage / CGPA"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                </div>
              </div>
                <div className="mb-6 border border-cyan-100 rounded-xl p-4">
                <h4 className="text-lg font-medium mb-3">Education 3</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="institution3"
                    type="text"
                    placeholder="Institution Name"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                  <input
                    name="degree3"
                    type="text"
                    placeholder="Degree / Course"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <input
                    name="yearOfCompletion3"
                    type="text"
                    placeholder="Year of Completion"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                  <input
                    name="cgpa3"
                    type="text"
                    placeholder="Percentage / CGPA"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-lg focus:border-cyan-600"
                  />
                </div>
              </div>
          </section>

          {/* === 3. Job Category === */}
          <section className="p-6 w-full bg-gray-900 text-white rounded-2xl border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold mb-5 border-l-4 border-cyan-600 pl-3">
              3. Job Category {" ("}Fill this to get visible to companies!{")"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Web Development",
                "App Development",
                "Data Science",
                "AI & ML",
                "UI/UX Design",
                "Software Development",
                "Cloud Computing",
                "Cybersecurity",
              ].map((category, i) => (
                <label key={i} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-cyan-600 transition">
                  <input
                    type="checkbox"
                    name="jobCategories"
                    value={category}
                    onChange={(e) => {
                      const selected = formData.jobCategories || [];
                      if (e.target.checked) {
                        setFormData({ ...formData, jobCategories: [...selected, category] });
                      } else {
                        setFormData({
                          ...formData,
                          jobCategories: selected.filter((c) => c !== category),
                        });
                      }
                    }}
                    className="accent-cyan-600"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </section>


        
        {/* === 4. Experience === */}
          <section className="p-6  w-full bg-gray-900 text-white rounded-2xl border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold  mb-5 border-l-4 border-cyan-600 pl-3">
              4. Experience
            </h2>
              <div className="mb-6 border border-cyan-100 rounded-xl p-4">
                <h4 className="text-lg font-medium  mb-3">
                  Experience 1
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block  mb-2">Company Name</label>
                    <input
                      type="text"
                      name= "companyName1"
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block  mb-2">Position</label>
                    <input
                      type="text"
                      name ="position1"
                       onChange={handleChange}
                      placeholder="Enter your role"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block  mb-2">Duration</label>
                    <input
                      type="text"
                      name = "duration1"
                       onChange={handleChange}
                      placeholder="e.g. Jan 2023 - Dec 2023"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Description</label>
                    <input
                      type="text"
                      name = "description1"
                       onChange={handleChange}
                      placeholder="Brief about your work"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 border border-cyan-100 rounded-xl p-4">
                <h4 className="text-lg font-medium  mb-3">
                  Experience 2
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block  mb-2">Company Name</label>
                    <input
                      type="text"
                      name= "companyName2"
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block  mb-2">Position</label>
                    <input
                      type="text"
                      name ="position2"
                       onChange={handleChange}
                      placeholder="Enter your role"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block  mb-2">Duration</label>
                    <input
                      type="text"
                      name = "duration2"
                       onChange={handleChange}
                      placeholder="e.g. Jan 2023 - Dec 2023"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Description</label>
                    <input
                      type="text"
                      name = "description2"
                       onChange={handleChange}
                      placeholder="Brief about your work"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 border border-cyan-100 rounded-xl p-4">
                <h4 className="text-lg font-medium  mb-3">
                  Experience 3
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block  mb-2">Company Name</label>
                    <input
                      type="text"
                      name= "companyName3"
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block  mb-2">Position</label>
                    <input
                      type="text"
                      name ="position3"
                       onChange={handleChange}
                      placeholder="Enter your role"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block  mb-2">Duration</label>
                    <input
                      type="text"
                      name = "duration3"
                       onChange={handleChange}
                      placeholder="e.g. Jan 2023 - Dec 2023"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Description</label>
                    <input
                      type="text"
                      name = "description3"
                       onChange={handleChange}
                      placeholder="Brief about your work"
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>
          </section>

          
          <section className="p-6  bg-gray-900 text-white w-full rounded-2xl border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold  mb-5 border-l-4 border-cyan-600 pl-3">
              5. Technical Skills (Up to 5)
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="technicalSkill1"
                   onChange={handleChange}
                  placeholder='Skill 1'
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                />
                <input
                  type="text"
                  name="technicalSkill2"
                   onChange={handleChange}
                  placeholder="Skill 2"
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                />
                <input
                  type="text"
                  name="technicalSkill3"
                   onChange={handleChange}
                  placeholder='Skill 3'
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                />
                <input
                  type="text"
                  name="technicalSkill4"
                   onChange={handleChange}
                  placeholder='Skill 4'
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                />
                <input
                  type="text"
                  name="technicalSkill5"
                   onChange={handleChange}
                  placeholder='Skill 5'
                  className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
                />
            </div>
          </section>



          <section className="p-6 bg-gray-900 text-white w-full rounded-2xl border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold mb-5 border-l-4 border-cyan-600 pl-3">
              6. Soft Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
                  <label  className="flex items-center  gap-3">
                    <input type="checkbox" 
                    name="softSkill1"
                     onChange={handleChange}
                     value="Communication"
                     className="accent-cyan-600" />Communication
                  </label>

                  <label  className="flex items-center gap-3">
                    <input type="checkbox" 
                    name="softSkill2"
                     onChange={handleChange}
                     value="Teamwork"
                     className="accent-cyan-600" />Teamwork
                  </label>

                  <label  className="flex items-center gap-3">
                    <input type="checkbox" 
                    name="softSkill3"
                     onChange={handleChange}
                     value="Leadership"
                     className="accent-cyan-600" />Leadership
                  </label>

                  <label  className="flex items-center gap-3">
                    <input type="checkbox" 
                     name="softSkill4"
                     onChange={handleChange}
                     value="Problem Solving"
                     className="accent-cyan-600" />Problem Solving
                  </label>

                  <label  className="flex items-center gap-3">
                    <input type="checkbox" 
                    name="softSkill5"
                     onChange={handleChange}
                     value="Time Management "
                     className="accent-cyan-600" />Time Management
                  </label>
            </div>
          </section>

          <section className="p-6 w-full bg-gray-900 text-white rounded-2xl border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold  mb-5 border-l-4 border-cyan-600 pl-3">
              7. Links
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="linkedin"
                 onChange={handleChange}
                placeholder="LinkedIn Profile"
                className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
              />
              <input
                type="text"
                name="github"
                 onChange={handleChange}
                placeholder="GitHub / Portfolio Website"
                className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-500 outline-none"
              />
            </div>
          </section>

          {/* === 8. Upload === */}
          <section className="p-6 w-full bg-gray-900 text-white rounded-2xl border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold mb-5 border-l-4 border-cyan-600 pl-3">
              8. Upload Documents
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Profile Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="w-full p-2 rounded-md border border-gray-400 focus:border-cyan-600"
                />
                {profilePhoto && (
                  <img
                    src={profilePhoto}
                    alt="Preview"
                    className="w-32 h-32 object-cover mt-4 rounded-full border-2 border-cyan-500"
                  />
                )}
              </div>
              <div>
                <label className="block mb-2 font-medium">Resume (PDF)</label>
                <input
                  name="resume"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files[0]?.name })}
                  className="w-full p-2 rounded-md border border-gray-400 focus:border-cyan-600"
                />
              </div>
            </div>
          </section>

          {/* === 9. About Me === */}
          <section className="p-6 w-full bg-gray-900 text-white rounded-2xl border border-gray-300 shadow-sm">
            <h2 className="text-xl font-semibold mb-5 border-l-4 border-cyan-600 pl-3">
              9. About Me
            </h2>
            <textarea
              name="aboutMe"
              rows="5"
              placeholder="Write about yourself..."
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-400 focus:border-cyan-600 resize-none"
            ></textarea>
          </section>

          <section className="text-center text-white flex flex-col items-center">
            <div className="m-10">
              <input type="checkbox" className="accent-cyan-600 mr-2" required />
              I agree to the{" "}
              <a href="#" className="text-cyan-400 hover:underline">
                Terms & Conditions
              </a>
            </div>
            <button
              type="submit"
              className="w-[90%] text-center py-3 text-lg font-semibold text-white bg-gray-700 rounded-xl hover:bg-cyan-700 transition-all duration-200"
            >
              Save and Submit
            </button>
          </section>
        </form>
      </div>
      <style>
    {`
      input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
        cursor: pointer;
      }
    `}
  </style>
    </div>
  );
};

export default UserForm;
