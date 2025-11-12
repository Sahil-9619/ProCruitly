import React, { useState } from "react";
import { Search } from "lucide-react";

const AdminInterface = () => {
  // Dummy Data
  const [users] = useState([
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", category: "Developer" },
    { id: 2, name: "Priya Singh", email: "priya@gmail.com", category: "Designer" },
    { id: 3, name: "Ravi Kumar", email: "ravi@gmail.com", category: "Marketing" },
  ]);

  const [companies] = useState([
    { id: 1, name: "TechNova Pvt Ltd", email: "contact@technova.com", domain: "Software" },
    { id: 2, name: "DesignCrew", email: "hello@designcrew.in", domain: "UI/UX" },
    { id: 3, name: "MarketEdge", email: "info@marketedge.com", domain: "Advertising" },
  ]);

  const [userSearch, setUserSearch] = useState("");
  const [companySearch, setCompanySearch] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.email.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.category.toLowerCase().includes(userSearch.toLowerCase())
  );

  const filteredCompanies = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(companySearch.toLowerCase()) ||
      c.email.toLowerCase().includes(companySearch.toLowerCase()) ||
      c.domain.toLowerCase().includes(companySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] to-[#0f2a3d] text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 bg-[#0d1e30] text-center text-2xl font-semibold text-cyan-300 shadow-md">
         Admin Dashboard
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* === USERS SECTION === */}
        <section className="w-full md:w-1/2 p-6 border-r border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-white">Registered Users</h2>

          {/* Search Bar */}
          <div className="flex items-center gap-2 mb-4 bg-[#1b2b3f] px-3 py-2 rounded-lg">
            <Search className="text-cyan-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-400"
            />
          </div>

          {/* User List */}
          <div className="h-[70vh] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-cyan-600">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-[#142536] p-4 rounded-xl hover:bg-[#19304a] transition-all shadow-md"
              >
                <h3 className="text-lg font-semibold text-cyan-300">{user.name}</h3>
                <p className="text-gray-300 text-sm">{user.email}</p>
                <p className="text-gray-400 text-sm mt-1">{user.category}</p>
              </div>
            ))}

            {filteredUsers.length === 0 && (
              <p className="text-gray-500 text-center mt-10">No users found.</p>
            )}
          </div>
        </section>

        {/* === COMPANIES SECTION === */}
        <section className="w-full md:w-1/2 p-6">
          <h2 className="text-xl font-bold mb-4 text-white">Registered Companies</h2>

          {/* Search Bar */}
          <div className="flex items-center gap-2 mb-4 bg-[#1b2b3f] px-3 py-2 rounded-lg">
            <Search className="text-cyan-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search companies..."
              value={companySearch}
              onChange={(e) => setCompanySearch(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-400"
            />
          </div>

          {/* Company List */}
          <div className="h-[70vh] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-cyan-600">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-[#142536] p-4 rounded-xl hover:bg-[#19304a] transition-all shadow-md"
              >
                <h3 className="text-lg font-semibold text-cyan-300">{company.name}</h3>
                <p className="text-gray-300 text-sm">{company.email}</p>
                <p className="text-gray-400 text-sm mt-1">{company.domain}</p>
              </div>
            ))}

            {filteredCompanies.length === 0 && (
              <p className="text-gray-500 text-center mt-10">No companies found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminInterface;
