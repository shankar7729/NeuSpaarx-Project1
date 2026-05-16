import React, { useState } from "react";
import './App.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Pencil, Settings } from "lucide-react";

const Dashboard = () => {
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openML, setOpenML] = useState(false);
  const [openPM, setOpenPM] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /* =========================
     NAVBAR MENU
  ========================= */

  const menu = [
    { name: "HR Dashboard", path: "/dashboard" },
    { name: "Post JD", path: "/PostJD" },
    { name: "Candidate List", path: "/candidates" },
    { name: "Scorecard View", path: "/scorecard" },
    { name: "Shortlisted", path: "/shortlisted" },
    // {name: "Login", path:"/login"}
  ];

  /* =========================
     METRICS
  ========================= */

  const metrics = [
    {
      title: "TOTAL APPLICATIONS",
      value: "248",
      sub: "Across 3 active roles",
      color: "border-blue-500",
    },
    {
      title: "STRONG MATCHES",
      value: "9",
      sub: "Score 80–100 · Auto-flagged",
      color: "border-green-500",
    },
    {
      title: "NEEDS HR REVIEW",
      value: "12",
      sub: "Score 50–79 · Action required",
      color: "border-orange-400",
    },
    {
      title: "WEAK MATCHES",
      value: "27",
      sub: "Below 50 · 7-day window active",
      color: "border-red-500",
    },
  ];

  /* =========================
     CANDIDATES
  ========================= */

  const candidates = [
    {
      name: "Arjun Sharma",
      email: "arjun@email.com",
      role: "ML Engineer",
      score: 92,
      type: "Experienced",
    },
    {
      name: "Sneha Patel",
      email: "sneha@email.com",
      role: "Frontend Dev",
      score: 88,
      type: "Fresher",
    },
    {
      name: "Rohan Mehta",
      email: "rohan@email.com",
      role: "ML Engineer",
      score: 85,
      type: "Experienced",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* =========================
          NAVBAR
      ========================= */}

      <div className="w-full h-11 bg-[#1e2a6e] border-b border-gray-200 px-8 flex items-center justify-between shadow-sm sticky top-0 z-50">

        {/* Left */}
        <div className="flex items-center gap-10">

          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl text-[#FFFFFF]">
            <div className="w-1 h-1 rounded-full bg-indigo-600"></div>
            ResumeAI
          </div>

          {/* Menu */}
          <div className="flex items-center gap-3">

            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-3 py-1 rounded-l text-sm font-medium transition-all duration-200
                ${location.pathname === item.path
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-white hover:bg-slate-700"
                  }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* <button onClick={()=>navigate('/login')}
          className="text-white hover:text-indigo-300 text-sm flex">
            <Pencil strokeWidth={2} />
            Login
          </button> */}

          <button onClick={()=>navigate('/settings')} className="w-9 h-9 rounded-full bg-slate-600 flex items-center justify-center text-white font-bold hover:bg-blue-600">
            <Settings strokeWidth={2} />
          </button>

        </div>
      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div className="flex">

        {/* =========================
            SIDEBAR
        ========================= */}

        <div className="w-55 fixed left-0 top-10 h-screen bg-white border-r px-4 py-6">

          {/* OVERVIEW */}
          <p className="text-xs uppercase text-gray-400 tracking-widest mb-3">
            OVERVIEW
          </p>

          <div className="space-y-2 mb-3">

            <Link
              to="/dashboard"
              className={`flex items-center gap-1 px-1 py-2 rounded-lg text-sm font-medium ${location.pathname === "/dashboard"
                ? "bg-[#e6ebf5] text-blue-600"
                : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              <span>▦</span>
              Dashboard
            </Link>

            <Link
              to="/PostJD"
              className="flex items-center gap-1 px-1 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <span>＋</span>
              Post a JD
            </Link>

            <Link
              to="/candidates"
              className="flex items-center justify-between px-1 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <div className="flex items-center gap-1">
                <span>◎</span>
                All Candidates
              </div>

              <span className="bg-blue-600 text-white text-xs px-2 py-[2px] rounded-full">
                48
              </span>
            </Link>

          </div>

          {/* REVIEW QUEUES */}
          <p className="text-left text-xs text-gray-400 tracking-widest mb-2">
            REVIEW QUEUES
          </p>

          <div className="space-y-2 mb-6">

            <Link
              to="/shortlisted"
              className="flex items-center justify-between px-1 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-1 h-1">
                <Mail strokeWidth={1} />
                Shortlisted
              </div>

              <span className="bg-orange-500 text-white text-xs px-2 py-[2px] rounded-full">
                12
              </span>
            </Link>

            {/* <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <span>✦</span>
                Strong Matches
              </div>

              <span className="bg-blue-600 text-white text-xs px-2 py-[2px] rounded-full">
                9
              </span>
            </div> */}

            {/* <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
              <span>○</span>
              Weak / Held
            </div> */}

          </div>

          {/* Job Openings */}
          <div className="mt-8 gap-6 ">

            <p className="text-left text-xs text-gray-400 tracking-widest !mb-3">
              JOB OPENINGS
            </p>

            {/* Frontend */}
            <div className=" hover:bg-blue-100 rounded-xl p-1">

              {/* CLICKABLE HEADER */}
              <button
                onClick={() => setOpenFrontend(!openFrontend)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-blue-100 transition-all duration-200 cursor-pointer"
              >

                {/* Left */}
                <div className="flex items-center gap-1">

                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>

                  <h3 className="font-semibold text-blue-600 text-xs">
                    Frontend Engineer
                  </h3>

                </div>

                {/* Right */}
                <div className="flex items-center gap-2">

                  <span className="text-slate-500 text-xs">
                    248
                  </span>

                  <span
                    className={`text-xs transition-transform duration-300 ${openFrontend ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>

                </div>

              </button>

              {/* EXPANDABLE CONTENT */}
              {openFrontend && (

                <div className="mt-2 animate-fadeIn">

                  <div className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    9 Strong
                  </div>
                  <div className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    12 Maybe
                  </div>

                  <div className="mt-3 space-y-2 text-slate-600">

                    {/* Candidates */}
                    <Link
                      to="/candidates"
                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-100 text-sm transition"
                    >
                      <span>◎</span>
                      <span>Candidates</span>
                    </Link>

                    {/* Shortlisted */}
                    <Link
                      to="/shortlisted"
                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-100 text-sm transition"
                    >
                      <Mail size={16} strokeWidth={1.5} />
                      <span>Shortlisted</span>
                    </Link>

                  </div>

                </div>

              )}

            </div>

            {/* ML Engineer */}
            <div className="hover:bg-blue-100 rounded-xl p-1">

              {/* CLICKABLE HEADER */}
              <button
                onClick={() => setOpenML(!openML)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-blue-100 transition-all duration-200 cursor-pointer"
              >

                {/* Left */}
                <div className="flex items-center gap-1">

                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>

                  <h3 className="font-semibold text-blue-600 text-xs">
                    ML Engineer
                  </h3>

                </div>

                {/* Right */}
                <div className="flex items-center gap-2">

                  <span className="text-slate-500 text-xs">
                    134
                  </span>

                  <span
                    className={`text-xs transition-transform duration-300 ${openFrontend ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>

                </div>

              </button>

              {/* EXPANDABLE CONTENT */}
              {openML && (

                <div className="mt-2 animate-fadeIn">

                  <div className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    7 Strong
                  </div>
                  <div className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    8 Maybe
                  </div>

                  <div className="mt-3 space-y-2 text-slate-600">

                    {/* Candidates */}
                    <Link
                      to="/candidates"
                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-100 text-sm transition"
                    >
                      <span>◎</span>
                      <span>Candidates</span>
                    </Link>

                    {/* Shortlisted */}
                    <Link
                      to="/shortlisted"
                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-100 text-sm transition"
                    >
                      <Mail size={16} strokeWidth={1.5} />
                      <span>Shortlisted</span>
                    </Link>

                  </div>

                </div>

              )}

            </div>

            {/* Product Manager */}
            <div className="hover:bg-blue-100 rounded-xl p-1">

              {/* CLICKABLE HEADER */}
              <button
                onClick={() => setOpenPM(!openPM)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-blue-100 transition-all duration-200 cursor-pointer"
              >

                {/* Left */}
                <div className="flex items-center gap-1">

                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>

                  <h3 className="font-semibold text-blue-600 text-xs">
                    Product Manager
                  </h3>

                </div>

                {/* Right */}
                <div className="flex items-center gap-2">

                  <span className="text-slate-500 text-xs">
                    89
                  </span>

                  <span
                    className={`text-xs transition-transform duration-300 ${openFrontend ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>

                </div>

              </button>

              {/* EXPANDABLE CONTENT */}
              {openPM && (

                <div className="mt-2 animate-fadeIn">

                  <div className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    4 Strong
                  </div>
                  <div className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    5 Maybe
                  </div>

                  <div className="mt-3 space-y-2 text-slate-600">

                    {/* Candidates */}
                    <Link
                      to="/candidates"
                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-100 text-sm transition"
                    >
                      <span>◎</span>
                      <span>Candidates</span>
                    </Link>

                    {/* Shortlisted */}
                    <Link
                      to="/shortlisted"
                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-100 text-sm transition"
                    >
                      <Mail size={16} strokeWidth={1.5} />
                      <span>Shortlisted</span>
                    </Link>

                  </div>

                </div>

              )}

            </div>

          </div>
        </div>

        {/* =========================
            DASHBOARD CONTENT
        ========================= */}

        <div className="ml-60 flex-1 p-4">

          {/* Header */}
          <header className="mb-1 !mt-[-100] "> <h1 className="!text-3xl font-bold !text-black-600 !mr-190">Good morning, Priya 👋</h1>
            <p className="!text-slate-500 text-left whitespace-nowrap">Here's what needs your attention today — 12 candidates waiting in the maybe bucket.</p>
          </header>



          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-5">

            {metrics.map((m, i) => (
              <div
                key={i}
                className={`bg-white p-2 rounded-xl border-l-4 ${m.color} shadow-sm`}
              >
                <p className="text-xs font-bold text-left text-slate-400 uppercase tracking-widest">
                  {m.title}
                </p>

                <p className="text-xl text-left font-bold text-slate-800 my-2">
                  {m.value}
                </p>

                <p className="text-xs text-left text-slate-400">
                  {m.sub}
                </p>
              </div>
            ))}

          </div>

          {/* =========================
              ACTIVE JOB OPENINGS
              ========================= */}

          <div className="mt-8">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">

              <h2 className="!text-sm font-bold text-slate-800">
                Active Job Openings
              </h2>

              <button onClick={() => navigate("/PostJD")} className="bg-blue-600 hover:bg-blue-700 text-white px-1 py-1 rounded-xl shadow-md text-sm font-semibold transition-all cursor-pointer">
                + Post New JD
              </button>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mb-5">

              {/* Card 1 */}
              <div className="h-45 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">

                <div className="flex text-left justify-between">

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Frontend Developer
                    </h3>

                    <p className="text-slate-500 mt-1 text-xs">
                      Engineering · Bangalore
                    </p>

                    <p className="text-slate-500 !mt-2 text-xs">
                      Closes 30 May 2026 · 2–4 yrs exp
                    </p>
                  </div>

                  <span className="h-6.5 px-1 py-1 rounded-full bg-green-50 text-green-600 border border-green-200 text-sm font-semibold">
                    ● Open
                  </span>

                </div>

                <div className="border-t border-slate-200 mt-6 pt-5 flex justify-between">

                  <div>
                    <p className="text-sm font-bold text-blue-600">248</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Applied
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-500">9</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Strong
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-orange-500">12</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Maybe
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-600">14</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Shortlisted
                    </p>
                  </div>

                </div>
              </div>

              {/* Card 2 */}
              <div className="h-45 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">

                <div className="flex text-left justify-between">

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      ML Engineer
                    </h3>

                    <p className="text-slate-500 mt-1 text-xs">
                      AI / Data · Remote
                    </p>

                    <p className="text-slate-500 !mt-2 text-xs">
                      Closes 15 Jun 2026 · 3–6 yrs exp
                    </p>
                  </div>

                  <span className="h-6.5 px-1 py-1 rounded-full bg-green-50 text-green-600 border border-green-200 text-sm font-semibold">
                    ● Open
                  </span>

                </div>

                <div className="border-t border-slate-200 mt-6 pt-5 flex justify-between">

                  <div>
                    <p className="text-sm font-bold text-blue-600">134</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Applied
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-500">7</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Strong
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-orange-500">8</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Maybe
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-600">6</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Shortlisted
                    </p>
                  </div>

                </div>
              </div>

              {/* Card 3 */}
              <div className="h-45 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">

                <div className="flex text-left justify-between">

                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Product Manager
                    </h3>

                    <p className="text-slate-500 mt-1 text-xs">
                      Product · Bangalore
                    </p>

                    <p className="text-slate-500 !mt-2 text-xs">
                      Closes 12 May 2026 · 4–7 yrs exp
                    </p>
                  </div>

                  <span className="h-6.5 px-1 py-1 rounded-full bg-orange-50 text-orange-500 border border-orange-200 text-sm font-semibold">
                    ● Closing soon
                  </span>

                </div>

                <div className="border-t border-slate-200 mt-6 pt-5 flex justify-between">

                  <div>
                    <p className="text-sm font-bold text-blue-600">89</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Applied
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-500">4</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Strong
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-orange-500">5</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Maybe
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-green-600">3</p>
                    <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
                      Shortlisted
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 xl:grid-cols-3">



            {/* Table */}
            <div className="h-55 w-170 xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

              <div className="p-1 flex justify-between items-center border-b border-slate-100">
                <h3 className="font-bold text-slate-800 text-sm ml-2">
                  Recent strong matches
                </h3>

                <span className="px-1 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100 uppercase">
                  Auto-flagged
                </span>
              </div>

              <table className="w-full text-left">

                <thead>
                  <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="px-2 py-1">Candidate</th>
                    <th className="px-2 py-1">Role</th>
                    <th className="px-2 py-1">Score</th>
                    <th className="px-2 py-1">Type</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">

                  {candidates.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50">

                      <td className="px-2 py-1">
                        <p className="font-semibold text-slate-800 text-sm">
                          {c.name}
                        </p>

                        <p className="text-sm text-slate-400">
                          {c.email}
                        </p>
                      </td>

                      <td className="px-2 py-1">
                        <span className="px-2 py-1 bg-slate-100 rounded-lg text-sm">
                          {c.role}
                        </span>
                      </td>

                      <td className="px-2 py-1">

                        <div className="flex items-center gap-3">

                          <div className="w-5 h-1.5 bg-slate-100 rounded-full">
                            <div
                              className="bg-green-500 h-full rounded-full"
                              style={{ width: `${c.score}%` }}
                            ></div>
                          </div>

                          <span className="font-bold text-green-600 text-sm">
                            {c.score}
                          </span>

                        </div>

                      </td>

                      <td className="px-2 py-1">

                        <span
                          className={`px-1 py-1 text-xs font-bold rounded-full border ${c.type === "Fresher"
                            ? "bg-purple-50 text-purple-600 border-purple-100"
                            : "bg-blue-50 text-blue-600 border-blue-100"
                            }`}
                        >
                          {c.type}
                        </span>

                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>


            {/* =========================
                 HR ACTION CENTRE
                ========================= */}

            <div className="h-75 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

              {/* Header */}
              <div className="p-1 flex justify-between items-center border-b border-slate-100">

                <h3 className="font-bold text-slate-800 !text-sm ml-2">
                  HR Action Centre
                </h3>

                <span className="px-1 py-1 bg-red-50 text-red-500 text-xs font-bold rounded-full border border-red-100 uppercase">
                  5 urgent
                </span>

              </div>

              {/* Action Item 1 */}
              <div className="flex items-center justify-between px-2 py-1 border-b border-slate-100 hover:bg-slate-50 transition-all">

                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div className="w-1 h-1 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    <span className="text-sm">🚩</span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm text-left">
                      20 candidates ready for review
                    </h3>

                    <p className="text-slate-500 text-sm text-left text-sm">
                      Strong & Maybe matches across 3 active roles
                    </p>
                  </div>

                </div>

                {/* Button */}
                <button className="h-9 bg-blue-600 hover:bg-blue-700 text-white px-1 py-1 rounded-xl font-medium shadow-md transition-all">
                  View
                </button>

              </div>

              {/* Action Item 2 */}
              <div className="flex items-center justify-between px-2 py-1 border-b border-slate-100 hover:bg-slate-50 transition-all">

                <div className="flex items-center gap-5">

                  {/* Icon */}
                  <div className="w-1 h-1 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    <span className="text-sm">⚠️</span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm text-left">
                      Product Manager JD closes in 4 days
                    </h3>

                    <p className="text-slate-500 text-sm text-left text-sm">
                      12 May 2026 · 89 applications so far
                    </p>
                  </div>

                </div>

                {/* Button */}
                <button className="h-8 bg-blue-600 hover:bg-blue-700 text-white px-1 py-1 rounded-xl font-medium shadow-md transition-all">
                  Extend
                </button>

              </div>

              {/* Action Item 3 */}
              <div className="flex items-center justify-between px-2 py-1 border-b border-slate-100 hover:bg-slate-50 transition-all">

                <div className="flex items-center gap-5">

                  {/* Icon */}
                  <div className="w-1 h-1 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    <span className="text-sm">✉️</span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm text-left">
                      23 candidates shortlisted across all roles
                    </h3>

                    <p className="text-slate-500 text-sm text-left text-sm">
                      Notified & awaiting task submission
                    </p>
                  </div>

                </div>

                {/* Button */}
                <button className="h-8 bg-blue-600 hover:bg-blue-700 text-white px-1 py-1 rounded-xl font-medium shadow-md transition-all">
                  View
                </button>

              </div>

              {/* Action Item 4 */}
              <div className="flex items-center justify-between px-2 py-1 border-b border-slate-100 hover:bg-slate-50 transition-all">

                <div className="flex items-center gap-5">

                  {/* Icon */}
                  <div className="w-1 h-1 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    <span className="text-sm">＋</span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm text-left">
                      Backend Engineer draft ready to publish
                    </h3>

                    <p className="text-slate-500 text-sm text-left text-sm">
                      Saved draft · 0 applications open
                    </p>
                  </div>

                </div>

                {/* Button */}
                <button className="h-8 bg-blue-600 hover:bg-blue-700 text-white px-1 py-1 rounded-xl font-medium shadow-md transition-all">
                  Publish
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;