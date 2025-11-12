import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const CompanyWelcome = () => {
const [allUsers, setAllUsers] = useState([]);

useEffect(() => {
  const fetchUsers = async() => {
    try{
      const res = await axios.get("http://localhost:3000/api/userform/all");
      setAllUsers(res.data.data);
    }catch (err) {
      console.error("Error fetching users:", err);
    }
  };
  fetchUsers();
}, []);

  const categories = [
    "Web Development",
    "App Development",
    "Data Science",
    "AI & ML",
    "UI/UX Design",
    "Software Development",
    "Cloud Computing",
    "Cybersecurity",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Web Development");

 const filteredUsers = Array.isArray(allUsers)
  ? allUsers.filter((user) =>
      Array.isArray(user.jobCategories) &&
      user.jobCategories.includes(selectedCategory)
    )
  : [];


  return (
    <div className="min-h-screen bg-[#0f1020] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 w-full bg-[#0f1020] flex m-4 text-white"
      >
        <motion.h1
         className="text-4xl font-bold hover:text-cyan-400 transition-colors"
         whileHover={{ scale: 1.1 }}>
             ProCruitly
          </motion.h1>

          <motion.div className="w-[50%] lg:w-[20%] text-xl m-4 fixed right-0 top-0 flex justify-around items-center space-x-8 text-lg">
              <Link to="/aboutUs" className="hover:text-cyan-400">About Us</Link>
              <Link to="/contactUs" className="hover:text-cyan-400">Contact Us</Link>
          </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full mt-10 max-w-7xl bg-[#1a1b2e] rounded-2xl shadow-2xl overflow-hidden text-gray-100 flex flex-col"
      >
        <div className="bg-gradient-to-r from-[#6f3af6] to-[#7b4ef8] text-white text-center py-4 font-bold text-lg tracking-wider">
          COMPANY DASHBOARD — Find the Employees here 
        </div>

        {/* === Main Section === */}
        <div className="flex flex-col lg:flex-row flex-grow h-[75vh]">
          {/* === Left Panel: Users (Scrollable) === */}
          <div className="lg:w-1/2 w-full bg-[#212232] p-6 overflow-y-auto rounded-bl-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">
                {selectedCategory} Candidates
              </h2>
              <button className="bg-[#11121a] text-xs px-3 py-2 rounded-md border border-gray-700 hover:bg-[#1b1b2b] transition">
                VIEW ALL
              </button>
            </div>

            <div className="space-y-3">
              {filteredUsers.map((user) => (
                <Link to={`/user/${user._id}`} key={user._id} className="block">

  <motion.div
    key={user._id}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-center gap-4 bg-[#171725] p-4 rounded-lg hover:bg-[#1f1f35] transition"
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6f3af6] to-[#8f6df8] flex items-center justify-center text-white font-bold text-lg">
      {user.fullName?.charAt(0)}
    </div>
    <div>
      <div className="font-semibold text-white">{user.fullName}</div>
      <div className="text-xs text-gray-400">
        {user.jobCategories?.join(", ")}
      </div>
      <div className="text-xs text-gray-500">
        Email: {user.email}
      </div>
    </div>
  </motion.div>
  </Link>
))}


              {filteredUsers.length === 0 && (
                <p className="text-sm text-gray-400 italic">
                  No users found in this category.
                </p>
              )}
            </div>
          </div>

          {/* === Right Panel: Categories (Fixed, Non-Scrollable) === */}
          <div className="lg:w-1/2 w-full bg-[#181828] p-6 rounded-br-2xl sticky top-0 self-start">
            <h2 className="text-lg font-semibold text-gray-200 mb-4 text-center">
              JOB CATEGORIES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <motion.div
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer p-4 rounded-xl text-center font-semibold shadow-md transition ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#6f3af6] to-[#7b4ef8] text-white"
                      : "bg-[#e9e9ef] text-[#111018] hover:bg-[#d6d6e4]"
                  }`}
                >
                  {cat}
                  
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* === Footer === */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#6f3af6] to-[#7b4ef8] text-white text-center py-3 font-semibold text-sm"
        >
          Total Users: {allUsers.length} | Showing {filteredUsers.length} in{" "}
          {selectedCategory}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompanyWelcome;
