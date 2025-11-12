import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar } from "lucide-react";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams(); // /user/:id se milega
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/userform/${id}`);
        const data = res.data.data;

        // 🧠 Convert DB fields to frontend-friendly structure
        const formatted = {
          fullName: data.fullName,
          dob: data.dob?.slice(0, 10),
          phone: data.phone,
          email: data.email,
          gender: data.gender,
          location: data.location,
          profilePhoto: data.profilePhoto ? `http://localhost:3000/uploads/${data.profilePhoto}` : "https://i.ibb.co/6HRRzFg/profile-photo.jpg",
          jobCategories: data.jobCategories || [],
          linkedin: data.linkedin || "#",
          github: data.github || "#",
          about: data.aboutMe || "No description available.",
          education: [
            {
              institution: data.institution1,
              degree: data.degree1,
              year: data.yearOfCompletion1,
              cgpa: data.cgpa1,
            },
            {
              institution: data.institution2,
              degree: data.degree2,
              year: data.yearOfCompletion2,
              cgpa: data.cgpa2,
            },
            {
              institution: data.institution3,
              degree: data.degree3,
              year: data.yearOfCompletion3,
              cgpa: data.cgpa3,
            },
          ].filter((e) => e.institution),
          experience: [
            {
              company: data.companyName1,
              position: data.position1,
              duration: data.duration1,
              description: data.description1,
            },
             {
              company: data.companyName2,
              position: data.position2,
              duration: data.duration2,
              description: data.description2,
            },
             {
              company: data.companyName3,
              position: data.position3,
              duration: data.duration3,
              description: data.description3,
            },
          ].filter((e) => e.company),
           technicalSkills: [
          data.technicalSkill1,
          data.technicalSkill2,
          data.technicalSkill3,
          data.technicalSkill4,
           data.technicalSkill5,
        ].filter(Boolean),
           softSkills: [
          data.softSkill1,
          data.softSkill2,
          data.softSkill3,
          data.softSkill4,
        ].filter(Boolean),

        };

        setUser(formatted);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user)
    return (
      <div className="text-center text-gray-400 py-20">
        Loading user details...
      </div>
    );

  // 🔥 Below code = same UI as your original one
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#0f172a] text-white flex justify-center py-12 px-6">
      <div className="w-full max-w-6xl">
        {/* === Header === */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#0a1123] p-6 rounded-2xl shadow-2xl border border-cyan-600 mb-10">
          <div className="flex items-center gap-6">
            <img
              src={`http://localhost:3000/uploads/${user.profilePhoto}`}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-cyan-500 object-cover shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-cyan-400">
                {user.fullName}
              </h1>
              <p className="text-gray-400 mt-1 text-sm">
                {user.jobCategories.join(" • ")}
              </p>
            </div>
          </div>

          <div className="text-gray-300 text-sm mt-4 md:mt-0 space-y-1">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" /> {user.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" /> {user.phone}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" /> {user.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" /> {user.dob}
            </div>
          </div>
        </div>

        {/* === About Section === */}
        <section className="bg-[#0a1123] border border-cyan-600 rounded-2xl p-6 mb-10 shadow-lg">
          <h2 className="text-xl font-semibold mb-3 text-cyan-400">About</h2>
          <p className="text-gray-300 leading-relaxed">{user.about}</p>
        </section>

        {/* === Education + Experience Grid === */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Education */}
          <section className="bg-[#0a1123] border border-cyan-600 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">
              Education
            </h2>
            <div className="space-y-4">
              {user.education.map((edu, i) => (
                <div key={i} className="border-l-4 border-cyan-500 pl-3">
                  <h4 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 text-sm">{edu.institution}</p>
                  <p className="text-gray-400 text-xs">
                    {edu.year} • {edu.cgpa}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="bg-[#0a1123] border border-cyan-600 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">
              Experience
            </h2>
            {user.experience.map((exp, i) => (
              <div key={i} className="border-l-4 border-cyan-500 pl-3 mb-4">
                <h4 className="text-lg font-semibold text-white">
                  {exp.position}
                </h4>
                <p className="text-gray-300 text-sm">{exp.company}</p>
                <p className="text-gray-400 text-xs mb-2">{exp.duration}</p>
                <p className="text-gray-400 text-sm">{exp.description}</p>
              </div>
            ))}
          </section>
        </div>

        {/* === Skills Section === */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <section className="bg-[#0a1123] border border-cyan-600 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {user.technicalSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-cyan-900/40 border border-cyan-600 text-cyan-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-[#0a1123] border border-cyan-600 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {user.softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-[#111827] border border-gray-700 text-gray-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* === Links Section === */}
        <section className="bg-[#0a1123] border border-cyan-600 rounded-2xl p-6 shadow-lg mb-10">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">
             Links
          </h2>
          <div className="flex items-center gap-6 text-sm">
            <a
              href={user.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:underline"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={user.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:underline"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </section>

        {/* === Back Button === */}
        <div className="text-center">
          <Link
            to="/company"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200 shadow-md"
          >
            ← Back to Candidates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
