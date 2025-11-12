import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ThanksPage = () => {


  return (
    <div
      className="flex flex-col min-h-screen text-gray-900"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background:
          "linear-gradient(135deg, #e0f2ff 0%, #cde7ff 40%, #93c5fd 100%)",
      }}
    >
      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-grow flex items-center justify-center p-6"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="w-full max-w-lg bg-white shadow-xl rounded-3xl p-10 text-center border border-blue-100"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            className="mx-auto w-24 h-24 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mb-6 shadow-md"
          >
            <svg
              className="w-12 h-12 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          {/* Text Content */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-800"
          >
            Thank You for Registering!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Your account has been successfully created. You’re now live! Companies can view your profile and contact you directly.
          </motion.p>

          {/* Button + Info */}
          <motion.div
          id="btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-5"
          >
            <Link
              to="/user"
              className="inline-block px-10 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Go to Dashboard
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer Section */}
     <div id="footer" className="h-20 bg-blue-900 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-blue-300  mt-8 text-sm"
        >© {new Date().getFullYear()} ProCruitly. All Rights Reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default ThanksPage;
