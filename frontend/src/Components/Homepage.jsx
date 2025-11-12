import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../api/auth";
import { loginUser } from "../api/loginuser";
import Cookies from "js-cookie";

const Homepage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  // ✅ Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      document.getElementById("invalid-details").innerText="Enter both Email or Paswword!"
      return;
    }

    const res = await loginUser(formData);
    if (res.success) {
      Cookies.set("userId", res.data.user._id, { path: "/", expires: 7 });
      Cookies.set("email", res.data.user.email, { path: "/", expires: 7 });

      if (formData.role === "company") {
        navigate("/company");
      } else {
        navigate("/user");
      }
    } else {
      alert(res.data.message || "Login failed");
    }
  };

  // ✅ Handle Signup
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.role) {
        document.getElementById("invalid-details").innerText="Enter both Email or Paswword!"
      return;
    }

    if (formData.password.length < 6 || formData.password.length > 20) {
  document.getElementById("invalid-details").innerText="Paswword must be 6 digit and must contain letters and numbers!"
      return;
    }

    const { status, data } = await createUser(formData);

    if (status === 201) {
      const roleCapitalized = formData.role.toUpperCase();
      document.getElementById(
        "successMsg"
      ).innerText = `${roleCapitalized} account created. Login and get started!`;
      setFormData({ email: "", password: "", role: "" });
    } else {
      alert(data.message || "Something went wrong");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { scrollYProgress } = useScroll();

  const leftWidth = useTransform(scrollYProgress, [0, 0.5], ["100%", "50%"]);
  const rightWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const rightOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const canvasRef = useRef(null);

  // 🎇 Particle Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    camera.position.z = 50;

    const particlesCount = 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.25,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0015;
      particles.rotation.x += 0.0008;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="font-['Roboto'] text-white min-h-[200vh] overflow-x-hidden relative">
      {/* Three.js Background */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />

      {/* Divider */}
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-cyan-900 z-40 opacity-40"
        style={{ opacity: rightOpacity }}
      />

      {/* Header */}
      <div
        id="navbar"
        className="fixed top-0 w-full bg-transparent backdrop-blur-sm p-4 text-center z-50"
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <div id="logo-name">
            <h2 className="text-2xl font-bold text-cyan-400">ProCruitly</h2>
          </div>
          <div className="flex justify-left text-cyan-300 text-l place-content-around w-[40%]">
            <Link to="/">Home</Link>
            <Link to="/aboutUs">About us</Link>
            <Link to="/contactUs">Contact us</Link>
          </div>
        </div>
      </div>

      <div className="h-[200vh] pt-20 relative">
        {/* Left Section */}
        <motion.section
          className="fixed top-0 left-0 h-screen flex flex-col items-center justify-center z-30 px-8 bg-transparent"
          style={{ width: leftWidth }}
        >
          {/* 👇 Hidden only on phones */}
          <h1 className="hidden md:block text-6xl font-bold text-cyan-400 drop-shadow-[0_0_20px_#00FFFF] mb-4">
            ProCruitly
          </h1>

          <p className="text-lg text-gray-300 max-w-xl text-center italic mt-15">
            “Where Companies Discover Talent, and Talent Finds Opportunities.”
          </p>

          <ul className="mt-8 space-y-3 text-left max-w-md">
            <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-cyan-400">
              👤 For Users: Register, choose your category, and get visible to
              top companies instantly.
            </li>
            <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-cyan-400">
              🏢 For Companies: Discover skilled candidates by category and
              connect directly with them.
            </li>
          </ul>
        </motion.section>

        {/* Right Section (Form) */}
        <motion.section
          className="fixed top-0 right-0 h-screen flex flex-col justify-center items-center z-20 bg-transparent"
          style={{ width: rightWidth, opacity: rightOpacity }}
        >
          <h2 className="text-3xl text-cyan-400 mb-4 font-semibold">
            Get Started
          </h2>

          <form className="flex flex-col space-y-3 max-w-md w-full p-6 rounded-lg">
            <label className="text-gray-300">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-transparent border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />

            <label className="text-gray-300">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-transparent border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
            <div id="invalid-details" className="text-red-400"></div>

            <div className="flex justify-between items-center mt-2 text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={formData.role === "user"}
                  onChange={handleChange}
                  className="accent-cyan-400"
                />
                <span>User</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="company"
                  checked={formData.role === "company"}
                  onChange={handleChange}
                  className="accent-cyan-400"
                />
                <span>Company</span>
              </label>
            </div>

            <button
              type="submit"
              onClick={handleSignUp}
              className="bg-cyan-400 text-[#121212] font-semibold py-2 rounded-md hover:bg-cyan-300 transform hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={handleLogin}
              className="bg-cyan-400 text-[#121212] font-semibold py-2 rounded-md hover:bg-cyan-300 transform hover:scale-105 transition-all duration-300"
            >
              Login
            </button>

            <h2 id="successMsg" className="text-white font-4xl"></h2>
          </form>
        </motion.section>
      </div>
    </div>
  );
};

export default Homepage;
