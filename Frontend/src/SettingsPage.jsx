import React, { useState } from "react";
import { Plus, Trash2, KeyRound, Info } from "lucide-react";
import Navbar from "./Navbar";

export default function SettingsPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@company.com",
      date: "01 Jan 2026",
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      email: "sneha@company.com",
      date: "20 Feb 2026",
    },
    {
      id: 3,
      name: "Vikram Nair",
      email: "vikram@company.com",
      date: "10 Mar 2026",
    },
  ]);

  // ADD USER FUNCTION
  const handleAddUser = () => {
    if (!fullName || !email) {
      alert("Please fill all fields");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: fullName,
      email: email,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setUsers([...users, newUser]);

    setFullName("");
    setEmail("");
  };

  // REMOVE USER FUNCTION
  const handleRemoveUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Navbar/>

      {/* SIDEBAR */}
      <div className="w-55 fixed left-0 top-10 h-screen bg-white border-r px-4 py-6">

        <p className="text-xs !text-left uppercase text-gray-400 uppercase font-semibold mb-5">
          Settings
        </p>

        <button className="w-full flex items-center gap-3 bg-indigo-50 text-indigo-600 px-2 py-1 rounded-xl font-medium">
          <KeyRound size={18} />
          Login Access
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="ml-60 flex-1 p-4">

        {/* PAGE TITLE */}
        <div>
          <p className="!text-sm text-left font-bold !text-black-600 !mr-190 ">
            Settings / Login Access
          </p>

          <h1 className="!text-2xl text-left font-bold text-slate-800 mt-2">
            Login Access Control
          </h1>

          <p className="!text-sm text-left text-gray-500">
            Only users listed here can log in and receive OTP codes.
            Manage approved email addresses below.
          </p>
        </div>

        {/* ADD USER CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 mt-2">

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-6">
            <Plus className="text-indigo-600" />
            Add Approved User
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ml-30">

            {/* FULL NAME */}
            <div>
              <label className="mr-52 text-sm font-semibold text-gray-600">
                Full Name *
              </label>

              <input
                type="text"
                placeholder="e.g. Priya Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-9 border border-gray-200 rounded-xl px-4 mt-2 outline-none focus:border-indigo-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mr-48 text-sm font-semibold text-gray-600">
                Email Address *
              </label>

              <input
                type="email"
                placeholder="e.g. priya@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-9 border border-gray-200 rounded-xl px-4 mt-2 outline-none focus:border-indigo-500"
              />
            </div>

            {/* BUTTON */}
            <div className="flex items-end">
              <button
                onClick={handleAddUser}
                className="w-50 h-9 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-md transition"
              >
                + Add User
              </button>
            </div>
          </div>
        </div>

        {/* USERS TABLE */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mt-5 overflow-hidden">

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">

            <div className="flex items-center gap-3">
              <h2 className="!text-sm font-semibold text-slate-800">
                Approved Users
              </h2>

              <span className="bg-indigo-100 text-indigo-600 text-sm px-3 rounded-full font-semibold">
                {users.length} users
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Only these emails will receive login OTPs
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                <tr>
                  <th className="text-left px-10 py-1">Name</th>
                  <th className="text-left px-6 py-1">Email Address</th>
                  <th className="text-left px-6 py-1">Added On</th>
                  <th className="text-right px-6 py-1">Action</th>
                </tr>
              </thead>

              <tbody>

                {users.map((user) => (
                  <tr
  key={user.id}
  className="border-t border-gray-100 hover:bg-gray-50 transition"
>
  <td className="px-6 py-5 font-semibold text-slate-700">
    {user.name}
  </td>

  <td className="px-6 py-5 text-indigo-600">
    {user.email}
  </td>

  <td className="px-6 py-5 text-gray-500">
    {user.date}
  </td>

  <td className="px-6 py-5 text-right">
    <button
      onClick={() => handleRemoveUser(user.id)}
      className="inline-flex items-center gap-2 border border-red-200 text-red-500 px-4 py-2 rounded-xl hover:bg-red-50 transition"
    >
      <Trash2 size={16} />
      Remove
    </button>
  </td>
</tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>

        {/* INFO BOX */}
        <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-2xl p-1 flex items-start gap-1">

          <Info className="text-indigo-600 mt-1" size={20} />

          <p className="text-indigo-700 text-sm leading-7">
            When a user enters their email on the login page, the system
            checks this list. If the email is found, an OTP is sent;
            otherwise access is denied. Removing an email immediately
            revokes their login access.
          </p>
        </div>
      </div>
    </div>
  );
}