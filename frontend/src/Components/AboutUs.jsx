import React from "react";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  Code2,
  HeartHandshake,
  Rocket,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

const AboutUs = () => {

  const team =[
            {
              name: "Sahil Kumar",
              role: "Frontend Lead & Full Stack Developer",
              desc: "Led the frontend development using React.js and integrated dynamic UI components."           
             },
            {
              name: "Harsh Raj",
              role: "Backend Lead & Full Stack Developer",
              desc: "Designed and implemented backend APIs using Node.js and Express.",
            },
            {
              name: "Prashant Kumar",
              role: "Frontend Developer & Designer",
              desc: "Designed layouts and coded functional pages for the user interface with clean styling and responsive behavior.",
            },
            {
              name: "Aman Raj",
              role: "UI/UX & Frontend Developer",
              desc: "Contributed to the creative design of pages and collaborated on frontend improvements for usability and aesthetics.",
            },
            {
              name: "Anand Raj",
              role: "UI Developer & Designer",
              desc: "Assisted in page design and helped in implementing UI features for multiple sections of the website.",
            },
          ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-black text-white flex flex-col justify-center items-center p-6 overflow-x-hidden">
      {/* Header */}
      <h1 className="text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full mt-20">
        {/* Left Section*/}
        <div id="leftSection" className="flex-1 space-y-8 text-center md:text-left leading-relaxed">
          <div className="p-6 bg-white/5 border border-cyan-400/20 rounded-2xl backdrop-blur-md hover:border-cyan-400/40 transition duration-300">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-3">
              Who We Are
            </h2>
            <p className="text-gray-300">
              <span className="text-cyan-400 font-semibold">ProCruitly</span> is a
              MERN-based recruitment platform developed as a minor project under
              <span className="text-cyan-400 font-semibold"> ISM Patna (Batch 2023–26)</span>.
              It connects job seekers and companies through a structured
              registration and category-based hiring system.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-cyan-400/20 rounded-2xl backdrop-blur-md hover:border-cyan-400/40 transition duration-300">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-300">
              <Target className="inline-block w-6 h-6 text-cyan-400 mr-2" />
              To simplify the hiring process by creating a digital bridge where
              individuals can register, showcase their skills, and get discovered
              by companies.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-cyan-400/20 rounded-2xl backdrop-blur-md hover:border-cyan-400/40 transition duration-300">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-300">
              <Lightbulb className="inline-block w-6 h-6 text-cyan-400 mr-2" />
              To build a transparent recruitment ecosystem that
              connects talent with opportunity, empowering both users and
              organizations to grow together.
            </p>
          </div>
        </div>

        {/* Right Section*/}
        <div id="rightSection" className="flex-1 flex flex-col gap-8 bg-gradient-to-br from-cyan-950/30 via-black/60 to-cyan-900/20 p-8 rounded-2xl border border-cyan-400/20 backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] transition-all duration-300 max-w-md">
          <div className="flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-cyan-400 mb-3" />
            <h3 className="text-xl font-semibold text-cyan-400 mb-1">
              Our Team
            </h3>
            <p className="text-gray-300">
              A passionate team of developers and designers focused on building
              intuitive and efficient digital solutions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Award className="w-12 h-12 text-cyan-400 mb-3" />
            <h3 className="text-xl font-semibold text-cyan-400 mb-1">
              Our Commitment
            </h3>
            <p className="text-gray-300">
              We’re committed to transparency, data security, and continuous
              innovation, ensuring reliability for all our users.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div id="core-value" className="max-w-6xl w-full mt-24 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <HeartHandshake className="w-10 h-10 text-cyan-400 mb-3 mx-auto" />,
              title: "Integrity",
              desc: "We prioritize trust, honesty, and data privacy across every user and organization.",
            },
            {
              icon: <Code2 className="w-10 h-10 text-cyan-400 mb-3 mx-auto" />,
              title: "Innovation",
              desc: "Using cutting-edge technologies like React, Node, and MongoDB to redefine recruitment.",
            },
            {
              icon: <Rocket className="w-10 h-10 text-cyan-400 mb-3 mx-auto" />,
              title: "Growth",
              desc: "We help people and organizations grow together by connecting skills to the right opportunities.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="p-8 bg-gradient-to-b from-black/60 via-cyan-950/20 to-black border border-cyan-400/20 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transform hover:-translate-y-2 transition-all duration-500"
            >
              {v.icon}
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{v.title}</h3>
              <p className="text-gray-300">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div id="why-us" className="bg-gradient-to-br from-cyan-950 via-black to-cyan-950 text-white py-20 px-8 md:px-16 mt-24 rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.2)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            Why Choose ProCruitly?
          </h2>
          <p className="text-lg mb-12 text-gray-300">
            Bridging the gap between skilled users and top companies — making hiring and getting hired seamless and efficient.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "For Users",
                desc: "Register, showcase your skills, and get noticed by leading companies based on your job category.",
                list: ["Easy one-step registration", "Get contacted directly by companies"],
              },
              {
                title: "For Companies",
                desc: "Access verified user profiles, filter by category, and connect with the right candidates instantly.",
                list: ["View categorized user lists", "Contact suitable candidates directly"],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-black/40 border border-cyan-400/30 p-10 rounded-2xl backdrop-blur-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transform hover:-translate-y-2 transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 mb-4">{card.desc}</p>
                <ul className="text-left list-disc list-inside text-gray-400">
                  {card.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="team-members" className="max-w-6xl w-full mt-24 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-black/50 border border-cyan-400/30 p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-500"
            >
              
              <h3 className="text-xl font-semibold text-cyan-400">{member.name}</h3>
              <p className="text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-300">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="icons" className="flex justify-center gap-10 mt-20 text-cyan-400 text-3xl">
        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
          <Icon
            key={i}
            className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]"
          />
        ))}
      </div>

      <footer className="text-gray-500 text-sm mt-10 mb-6">
        © 2025 ProCruitly | All Rights Reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
