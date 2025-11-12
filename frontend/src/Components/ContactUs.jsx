import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import { contactUs } from "../api/contactUs"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await contactUs(formData);
  console.log("Response:", response); // debug

  if (response.status === 200 || response.status === 201) {
    console.log("saved")
    document.getElementById("dilog").innerText= "Feedback Received!"
    setFormData({ name: "", email: "", text: "" });
  } else {
    alert(response.data.message || "Failed to send message. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
      <h1 id="title" className="text-4xl font-bold text-cyan-400 mb-10 text-center">
        Contact Us
      </h1>

      <div
        id="container"
        className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full"
      >
        {/* Contact Info */}
        <div id="info-section" className="flex flex-col gap-6 flex-1 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <MapPin className="text-cyan-400 w-8 h-8 mb-2" />
            <h2 className="text-xl font-semibold text-cyan-400 mb-1">Address</h2>
            <p className="text-gray-300 leading-relaxed">
              International School Of Management, Patna <br />
              Sarari, Khagaul, Patna <br />
              801105
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Phone className="text-cyan-400 w-8 h-8 mb-2" />
            <h2 className="text-xl font-semibold text-cyan-400 mb-1">Phone</h2>
            <p className="text-gray-300">7050101746</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Mail className="text-cyan-400 w-8 h-8 mb-2" />
            <h2 className="text-xl font-semibold text-cyan-400 mb-1">E-mail</h2>
            <p className="text-gray-300">procruitly@gmail.in</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          id="form-section"
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-5 bg-black/40 p-8 rounded-2xl backdrop-blur-lg shadow-lg max-w-md border-2 border-gray-800"
        >
          <div className="flex items-center gap-3 bg-black/50 rounded p-3 focus-within:ring-2 focus-within:ring-cyan-400 border-2 border-gray-700">
            <User className="text-cyan-400" />
            <input
              required
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white"
            />
          </div>

          <div className="flex items-center gap-3 bg-black/50 rounded p-3 focus-within:ring-2 focus-within:ring-cyan-400 border-2 border-gray-700">
            <Mail className="text-cyan-400" />
            <input
              required
              id="email"
              type="email"
              name="email"
              placeholder="E-mail Id"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white"
            />
          </div>

          <div className="flex items-start gap-3 bg-black/50 rounded p-3 focus-within:ring-2 focus-within:ring-cyan-400 border-2 border-gray-700">
            <MessageSquare className="text-cyan-400 mt-1" />
            <textarea
              required
              id="text"
              name="text"
              placeholder="Type your message..."
              value={formData.text}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white resize-none h-32"
            ></textarea>
          </div>

          <button
            id="btn"
            type="submit"
            className="flex items-center justify-center gap-2 bg-cyan-400 text-black font-semibold py-3 px-4 rounded hover:bg-cyan-300 transition duration-300"
          >
            <Send className="w-5 h-5" />
            Submit
          </button>
          <h2 id="dilog" className="text-green-400"></h2>
        </form>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-8 mt-12 text-cyan-400 text-3xl">
        <Facebook className="hover:text-white transition cursor-pointer" />
        <Instagram className="hover:text-white transition cursor-pointer" />
        <Twitter className="hover:text-white transition cursor-pointer" />
        <Linkedin className="hover:text-white transition cursor-pointer" />
      </div>
    </div>
  );
};

export default ContactUs;
