import { Mail } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './App.css'

const ShortlistedPage = () => {
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openML, setOpenML] = useState(false);
  const [openPM, setOpenPM] = useState(false);
  const navigate = useNavigate();
  const shortlistedCandidates = [
    {
      initials: "AS",
      name: "Arjun Sharma",
      exp: "3.5 yrs exp · Experienced",
      score: 92,
      email: "arjun.s@gmail.com",
      phone: "+91 98765 43210",
      color: "from-blue-400 to-blue-600",
    },
    {
      initials: "SP",
      name: "Sneha Patel",
      exp: "Fresher",
      score: 88,
      email: "sneha.p@email.com",
      phone: "+91 91234 56789",
      color: "from-purple-400 to-purple-600",
    },
    {
      initials:"RM",
      name:"Rohan Mehta",
      exp:"6 yrs exp · Experienced",
      score:91,
      email:"rohan.m@gmail.com",
      phone:"+91 97654 32109",
      color:"from-green-400 to-yellow-600",
    },
    {
      initials:"PT",
      name:"Priya Tiwari",
      exp:"1.5 yrs exp · Experienced",
      score:85,
      email:"priya.t@email.com",
      phone:"+91 90123 45678",
      color:"from-red-400 to-pink-600",

    },
    {
      initials:"RD",
      name:"Riya Desai",
      exp:"7 yrs exp · Experienced",
      score:91,
      email:"riya.d@gmail.com",
      phone:"+91 98001 23456",
      color:"from-orange-600 to-yellow-400",

    },
    
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      {/* =========================
          SIDEBAR
      ========================= */}
      <div className="w-55 fixed left-0 top-10 h-screen bg-white border-r px-4 py-6">

        {/* Overview */}
        <div>
          <p className="text-left text-xs text-gray-400 tracking-widest mb-3">
            Overview
          </p>

          <div className="space-y-2 mb-3">

            <Link
              to="/dashboard"
              className="w-full flex items-center gap-1 px-1 py-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
            >
              <span>▦</span>
              <span className="font-medium">Dashboard</span>
            </Link>

            <Link
              to="/candidates"
              className="flex items-center gap-1 px-1 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <span>◎</span>
              <span className="font-medium">All Candidates</span>
            </Link>

          </div>
        </div>

        {/* Review Queues */}
        <div className="mt-8">

          <p className="text-left text-xs text-gray-400 tracking-widest mb-2">
            Review Queues
          </p>

          <div className="flex items-center justify-between px-1 py-2 text-sm text-gray-700 bg-blue-100 rounded-lg cursor-pointer">

            <div className="flex items-center gap-3 text-blue-600">
              <Mail strokeWidth={1} />
              <span className="font-semibold">Shortlisted</span>
            </div>

            <span className="bg-green-500 text-white text-xs px-2 py-[2px] rounded-full">
              14
            </span>

          </div>
        </div>

       {/* Job Openings */}
        <div className="mt-8 gap-6 ">

          <p className="text-left text-xs text-gray-400 tracking-widest mb-4">
            JOB OPENINGS
          </p>

          {/* Frontend */}
          <div className="hover:bg-blue-100 rounded-xl p-1">

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
        className={`text-xs transition-transform duration-300 ${
          openFrontend ? "rotate-180" : ""
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
        14 Shortlisted
      </div>

      <div className="mt-3 space-y-2 text-slate-600">

        {/* Candidates */}
        <Link
          to="/candidates"
          className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-200 text-sm transition"
        >
          <span>◎</span>
          <span>Candidates</span>
        </Link>

        {/* Shortlisted */}
        <Link
          to="/shortlisted"
          className="flex items-center gap-2 px-2 py-2 rounded-lg bg-blue-200 text-sm transition"
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
        className={`text-xs transition-transform duration-300 ${
          openFrontend ? "rotate-180" : ""
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
        6 Shortlisted
      </div>

      <div className="mt-3 space-y-2 text-slate-600">

        {/* Candidates */}
        <Link
          to="/candidates"
          className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-200 text-sm transition"
        >
          <span>◎</span>
          <span>Candidates</span>
        </Link>

        {/* Shortlisted */}
        <Link
          to="/shortlisted"
          className="flex items-center gap-2 px-2 py-2 rounded-lg bg-blue-200 text-sm transition"
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
        className={`text-xs transition-transform duration-300 ${
          openFrontend ? "rotate-180" : ""
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
        3 Shortlisted
      </div>

      <div className="mt-3 space-y-2 text-slate-600">

        {/* Candidates */}
        <Link
          to="/candidates"
          className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-blue-200 text-sm transition"
        >
          <span>◎</span>
          <span>Candidates</span>
        </Link>

        {/* Shortlisted */}
        <Link
          to="/shortlisted"
          className="flex items-center gap-2 px-2 py-2 rounded-lg bg-blue-200 text-sm transition"
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
          MAIN CONTENT
      ========================= */}
      <div className="ml-60 flex-1 p-2">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-slate-400 text-sm mt-10">

          <span className="text-blue-600">Dashboard</span>
          <span>›</span>

          <span>Frontend Developer</span>
          <span>›</span>

          <span>Shortlisted</span>

        </div>

        {/* Heading */}
        <div className="mt-4">

          <h2 className="text-left font-bold text-slate-900">
            Shortlisted — Frontend Developer
          </h2>

          <p className="text-slate-500 text-xs text-left mt-2">
            14 candidates shortlisted · All have received their shortlist
            notification
          </p>

        </div>

        {/* Table */}
        <div className="mt-6 bg-white rounded-xl border border-slate-200 overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-5 px-2 py-2 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-400">

            <div>Candidate</div>
            <div>Score</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Action</div>

          </div>

          {/* Rows */}
          {shortlistedCandidates.map((candidate, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center px-2 py-2 border-b border-slate-100 hover:bg-slate-50 transition"
            >

              {/* Candidate */}
              <div className="flex items-center justify-center gap-2">

                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${candidate.color} text-white flex items-center justify-center font-bold text-xs`}
                >
                  {candidate.initials}
                </div>

                <div>
                  <h3 className="font-bold text-xs text-left text-slate-800">
                    {candidate.name}
                  </h3>

                  <p className="text-slate-500 mt-1 text-xs text-left">
                    {candidate.exp}
                  </p>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center gap-1 justify-center">

                <div className="w-5 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="bg-green-500 h-full rounded-full"
                    style={{ width: `${candidate.score}%` }}
                  ></div>
                </div>

                <span className="font-bold text-green-600 text-xs">
                  {candidate.score}
                </span>

              </div>

              {/* Email */}
              <div>
                <p className="text-blue-600 text-xs">
                  {candidate.email}
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-slate-500 text-xs">
                  {candidate.phone}
                </p>
              </div>

              {/* Button */}
              <div>
                <button onClick={()=>navigate('/scorecard')} className="border border-slate-200 hover:bg-slate-100 px-1 py-2 rounded-xl font-medium text-slate-600 transition text-xs">
                  View Scorecard
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ShortlistedPage;