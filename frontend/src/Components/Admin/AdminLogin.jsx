import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ShieldCheck, Hand } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const mountRef = useRef(null);

  // === THREE.JS BACKGROUND ===
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const pointLight = new THREE.PointLight(0x00ffff, 1.2);
    pointLight.position.set(100, 200, 200);
    scene.add(ambientLight, pointLight);

    const geometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
    const material = new THREE.MeshPhongMaterial({
      color: 0x0a1f3a,
      side: THREE.DoubleSide,
      wireframe: true,
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    plane.rotation.x = -Math.PI / 2.2;
    camera.position.set(0, 100, 300);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      const pos = plane.geometry.attributes.position;

      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const wave =
          Math.sin(x / 25 + t) * 3 + Math.cos(y / 25 + t * 0.7) * 3;
        pos.setZ(i, wave);
      }

      pos.needsUpdate = true;
      const hue = (t * 10) % 360;
      material.color.setHSL(hue / 360, 0.7, 0.4);

      plane.rotation.z += 0.0005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
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
  if (mountRef.current && renderer.domElement) {
    mountRef.current.removeChild(renderer.domElement);
  }
  renderer.dispose(); // ✅ properly clean WebGL context
};
  }, []);

  // === LOGIN FUNCTION ===
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/admin/login", {
        email,
        password,
      });

      if (res.status === 200) {
        // ✅ Save token in localStorage
        localStorage.setItem("adminToken", res.data.token);

        setSuccess("Login successful! Redirecting...");
       setTimeout(()=>{
        navigate('/admin')
       },2000)
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {/* === Three.js background === */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* === Gradient overlay === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#040c18]/80 via-[#0b2c3d]/80 to-[#08152b]/80 z-10" />

      {/* === Glassmorphic login form === */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onSubmit={handleLogin}
        className="relative z-20 backdrop-blur-xl bg-white/10 p-8 rounded-2xl w-full max-w-sm shadow-2xl border border-cyan-400/30"
      >
        <h2 className="text-3xl flex font-bold text-cyan-400 text-center mb-6 drop-shadow-md">
          <Hand className="text-cyan-400 w-8 h-8" />{" "}
          <span className="text-center w-full">Hello Admin</span>
        </h2>

        {error && (
          <p className="text-red-400 text-center mb-3 text-sm">{error}</p>
        )}
        {success && (
          <p className="text-green-400 text-center mb-3 text-sm">{success}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-md bg-[#102030]/80 text-gray-200 outline-none focus:ring-2 focus:ring-cyan-500"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            name="password"
            type="password"
            className="w-full px-3 py-2 rounded-md bg-[#102030]/80 text-gray-200 outline-none focus:ring-2 focus:ring-cyan-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-2 rounded-md font-semibold transition-all shadow-md disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default AdminLogin;
