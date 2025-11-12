import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const UserWelcome = () => {
  return (
    <div id="container" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#0d1a40] to-[#1a326b] text-white">
      {/* Glowing planet */}
      <motion.div
        className="absolute top-16 right-24 md:top-20 md:right-40 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-80 shadow-2xl shadow-blue-200/30"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Shooting stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full z-20 flex m-2"
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

      {/* Main Content */}
      <div id="body" className="relative z-10 flex flex-col  items-center justify-center min-h-screen p-4 pt-24 text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-wider uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WELCOME
        </motion.h1>

        <motion.p
          className="mt-4 text-l  text-blue-200 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to ProCruitly — where your talent finds its true place
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xl font-light text-blue-200">
            Register and become visible to the hiring companies!
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #3b82f6" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to='/form'> Get Yourself Register</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mountain SVG */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-auto z-0 pointer-events-none"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <linearGradient id="mountainGrad1" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="mountainGrad2" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#1c3d8a" stopOpacity="1" />
              <stop offset="100%" stopColor="#152a61" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            fill="url(#mountainGrad1)"
            d="M0,256L40,261.3C80,267,160,277,240,250.7C320,224,400,160,480,149.3C560,139,640,181,720,197.3C800,213,880,203,960,186.7C1040,171,1120,149,1200,160C1280,171,1360,213,1400,234.7L1440,256L0,320Z"
          ></path>
          <path
            fill="url(#mountainGrad2)"
            d="M0,320L34.3,293.3C68.6,267,137,213,206,208C274.3,203,343,245,411,250.7C480,256,549,224,617,192C685.7,160,754,128,823,138.7C891.4,149,960,203,1029,224C1097.1,245,1166,235,1234,213.3C1302.9,192,1371,160,1406,144L1440,128L0,320Z"
          ></path>
        </svg>
      </motion.div>

   
      <style>{`
        @import "tailwindcss";

        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0px 1000px #374151 inset; /* bg-gray-700 */
          -webkit-text-fill-color: #f3f4f6; /* text-gray-100 */
          transition: background-color 5000s ease-in-out 0s;
        }

        @keyframes tail {
          0% { width: 0; }
          30% { width: 100px; }
          100% { width: 0; }
        }

        @keyframes shooting {
          0% { transform: translateX(0); }
          100% { transform: translateX(400px); }
        }

        .shooting-star {
          position: absolute;
          height: 2px;
          background: linear-gradient(-45deg, #aaccff, rgba(255, 255, 255, 0));
          border-radius: 999px;
          filter: drop-shadow(0 0 6px #aaccff);
          animation: tail 3s ease-in-out infinite, shooting 3s ease-in-out infinite;
        }

        .shooting-star:nth-child(1) {
          top: 20%;
          left: -100px;
          animation-delay: 1.3s;
        }

        .shooting-star:nth-child(2) {
          top: 40%;
          left: -100px;
          animation-delay: 2.7s;
        }
      `}</style>
    </div>
  );
};

export default UserWelcome;
