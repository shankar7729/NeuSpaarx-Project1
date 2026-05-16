import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Circle, Diamond, Mail, Monitor, Sparkles } from "lucide-react";


const CandidatesList = ({ candidater = [], setSelectedIndex = () => { } }) => {

    const navigate = useNavigate();
    const [openFrontend, setOpenFrontend] = useState(false);
    const [openML, setOpenML] = useState(false);
    const [openPM, setOpenPM] = useState(false);
    const [bucketFilter, setBucketFilter] = useState("All buckets");
    const [typeFilter, setTypeFilter] = useState("All types");
    

    const handleOpenScorecard = (candidateId) => {
        const index = candidates.findIndex((item) => item.id === candidateId);

        if (index === -1) return;

        setSelectedIndex(index);
        navigate("/scorecard");
    };



    const [activeBucket, setActiveBucket] = useState("Strong");


    const candidates = [
        {
            id: 1,
            name: "Arjun Sharma",
            email: "arjun@email.com",
            type: "Experienced",
            score: 92,
            responsibilities: "55/60",
            skills: "37/40",
            bucket: "Strong",
        },
        {
            id: 2,
            name: "Sneha Patel",
            email: "sneha@email.com",
            type: "Fresher",
            score: 88,
            responsibilities: "52/60",
            skills: "36/40",
            bucket: "Strong",
        },
        {
            id: 3,
            name: "Kavya Nair",
            email: "kavya@email.com",
            type: "Experienced",
            score: 74,
            responsibilities: "40/60",
            skills: "34/40",
            bucket: "Maybe",
        },
        {
            id: 4,
            name: "Deepak Verma",
            email: "deepak@email.com",
            type: "Experienced",
            score: 61,
            responsibilities: "33/60",
            skills: "28/40",
            bucket: "Maybe",
        },
        {
            id: 5,
            name: "Raj Kumar",
            email: "raj@email.com",
            type: "Fresher",
            score: 38,
            responsibilities: "18/60",
            skills: "20/40",
            bucket: "Weak",
        },
    ];

    // const [selectedIndex, setSelectedIndex] = useState(0)
    // const selectedCandidate = candidates[selectedIndex];


    // const filteredCandidates =
    //     activeBucket === "All"
    //         ? candidates
    //         : candidates.filter((item) => item.bucket === activeBucket);
     // =========================
  // FILTER STATE
  // =========================
  const [filter, setFilter] = useState("all");

  // =========================
  // FILTER LOGIC
  // =========================
  const filteredCandidates = candidates.filter((candidate) => {

    if (filter === "strong") {
      return candidate.score >= 70;
    }

    if (filter === "maybe") {
      return candidate.score >= 40 && candidate.score <= 69;
    }

    if (filter === "weak") {
      return candidate.score < 40;
    }

    const bucketMatch =
      bucketFilter === "All buckets" ||
      candidate.bucket === bucketFilter;

    const typeMatch =
      typeFilter === "All types" ||
      candidate.type === typeFilter;

    return bucketMatch && typeMatch;
    return true;
  });

  // COUNTS
  const strongCount = candidates.filter(
    (candidate) => candidate.score >= 70
  ).length;

  const maybeCount = candidates.filter(
    (candidate) => candidate.score >= 40 && candidate.score <= 69
  ).length;

  const weakCount = candidates.filter(
    (candidate) => candidate.score < 40
  ).length;

    return (
        <div>
            <Navbar />
            <div className="flex min-h-screen bg-[#f5f7fb]">
                {/* SIDEBAR */}
                <div className="w-55 fixed left-0 top-10 h-screen bg-white border-r px-4 py-6]">
                    {/* OVERVIEW */}
                    <p className=" text-xs uppercase text-gray-400 tracking-widest mb-3">
                        Overview
                    </p>

                    <div className="space-y-1">
                        {/* Dashboard */}
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
                        >
                            <span className="text-sm">▦</span>
                            <span className="text-sm">Dashboard</span>
                        </button>

                        {/* Post JD */}
                        <button
                            onClick={() => navigate("/PostJD")}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
                        >
                            <span className="text-sm">＋</span>
                            <span className="text-sm">Post a JD</span>
                        </button>

                        {/* All Candidates */}
                        <button
                            onClick={() => navigate("/candidates")}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-blue-50 text-blue-600"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-sm">◉</span>
                                <span className="text-sm">
                                    All Candidates
                                </span>
                            </div>

                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                {candidates.length}
                            </span>
                        </button>
                    </div>

                    {/* FILTER SECTION */}
                    <div className="mt-6">
                        <p className=" text-xs  uppercase text-gray-400 tracking-widest mb-2">
                            Filter By Bucket
                        </p>

                        <div className="space-y-3">
                            {/* Strong */}
                            <button
                                onClick={() => setActiveBucket("Strong")}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition ${activeBucket === "Strong"
                                    ? "bg-purple-50 text-purple-600"
                                    : "text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span>✦</span>
                                    <span className="text-sm">
                                        Strong (70–100)
                                    </span>
                                </div>

                                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {
                                        candidates.filter((item) => item.bucket === "Strong").length
                                    }
                                </span>
                            </button>

                            {/* Weak */}
                            <button
                                onClick={() => setActiveBucket("Weak")}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeBucket === "Weak"
                                    ? "bg-red-50 text-red-500"
                                    : "text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                <span>○</span>
                                <span className="text-sm">
                                    Weak (below 39)
                                </span>
                            </button>
                        </div>
                        <div className="mt-4 gap-10 ">

                            <p className="text-xs uppercase text-gray-400 tracking-widest mb-4">
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
                                            className={`text-xs transition-transform duration-300 ${openML ? "rotate-180" : ""
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
                                            className={`text-xs transition-transform duration-300 ${openPM ? "rotate-180" : ""
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
                </div>

                {/* MAIN CONTENT */}
                {/* MAIN CONTENT */}
                <div className="ml-60 flex-1 p-4 bg-[#f6f8fc] min-h-screen">

                     {/* TOP CARD */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex">

        <div className="flex items-center gap-2">

          {/* ICON */}
          <div className="w-12 h-10 ml-5 rounded-xl bg-slate-100 flex items-center justify-center">
            <Monitor className="text-indigo-600 " size={25} />
          </div>

          {/* DETAILS */}
          <div>
            <h1 className="!text-xl text-left font-bold text-slate-800">
              Frontend Developer
            </h1>

         <div className="whitespace-nowrap  flex items-center gap-1 text-sm text-gray-500">

  <span>Engineering</span>

  <span className="text-gray-300">•</span>

  <span>Bangalore</span>

  <span className="text-gray-300">•</span>

  <span>2–4 yrs exp</span>

  <span className="text-gray-300">•</span>

  <span>Closes 30 May 2026</span>

  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
    Open
  </span>
</div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end items-center gap-3 w-full mr-3">
  <button className="border border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-1 rounded-xl transition duration-200">
    Edit JD
  </button>

  <button className="border border-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-1 rounded-xl transition duration-200">
    Export CSV
  </button>
</div>
      </div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h1 className="-mt-[20px] !text-[28px] leading-none font-bold text-[#0f172a]">
                                All Candidates — Frontend Developer
                            </h1>

                            <p className="text-[15px] text-slate-500 -mt-[6px]">
                                248 applications · 241 scored · 7 flagged for format issues
                            </p>
                        </div>

                        {/* Filters */}
                        {/* <div className="flex gap-6 mt-7">
                            <select className="px-2 py-1 text-xs rounded-md border border-slate-200 bg-white text-slate-700 outline-none">
                                <option>All buckets</option>
                                <option>Strong</option>
                                <option>Maybe</option>
                                <option>Weak</option>
                            </select>

                            <select className="px-2 py-1 text-xs rounded-md border border-slate-200 bg-white text-slate-700 outline-none">
                                <option>All types</option>
                                <option>Experienced</option>
                                <option>Fresher</option>
                            </select>
                        </div> */}
                        <div className="flex gap-6 mt-7">

        {/* BUCKET FILTER */}
        <select
          value={bucketFilter}
          onChange={(e) => setBucketFilter(e.target.value)}
          className="px-3 py-2 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 outline-none"
        >
          <option>All buckets</option>
          <option>Strong</option>
          <option>Maybe</option>
          <option>Weak</option>
        </select>

        {/* TYPE FILTER */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 outline-none"
        >
          <option>All types</option>
          <option>Experienced</option>
          <option>Fresher</option>
        </select>
      </div>
                    </div>

                     {/* ========================= */}
      {/* FILTER SECTION */}
      {/* ========================= */}

      <div className="bg-white border border-gray-200 rounded-3xl p-3 shadow-sm w-full">

  <div className="grid grid-cols-4 gap-2 items-center ">
    <div className="w-23 h-full">
    {/* ALL */}
    <button
      onClick={() => setFilter("all")}
      className={`w-full h-[115px] rounded-xl border px-8 py-5 transition flex flex-col justify-between
      ${
        filter === "all"
          ? "border-indigo-500 bg-indigo-50"
          : "border-gray-200 hover:bg-gray-50"
      }`}
    >

      <div className="w-5 h-5 rounded-full border-[3px] border-indigo-500 ml-2"></div>

      <p className="!text-sm font-bold text-slate-800 leading-none">
        All
      </p>

      <h1 className="!text-2xl font-bold text-green-600 leading-none">
        {candidates.length}
      </h1>
    </button>
    </div>

    {/* STRONG */}
    <button
      onClick={() => setFilter("strong")}
      className={`w-full h-[115px] rounded-xl border px-8 py-5 transition flex flex-col justify-between
      ${
        filter === "strong"
          ? "border-green-500 bg-green-50"
          : "border-gray-200 hover:bg-gray-50"
      }`}
    >

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-3">

          <Sparkles className="text-green-500 mt-1" size={16} />

          <div>
            <h2 className="!text-sm font-bold text-slate-800 leading-none">
              Strong Match
            </h2>

            <p className="!text-xs text-gray-500 mt-1">
              SCORE 70–100
            </p>
          </div>
        </div>

        <h1 className="!text-2xl font-bold text-green-600 leading-none">
          {strongCount}
        </h1>
      </div>

      <div className="h-[4px] bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[70%] h-full bg-green-500 rounded-full"></div>
      </div>
    </button>

    {/* MAYBE */}
    <button
      onClick={() => setFilter("maybe")}
      className={`w-full h-[115px] rounded-2xl border px-6 py-5 transition flex flex-col justify-between
      ${
        filter === "maybe"
          ? "border-orange-500 bg-orange-50"
          : "border-gray-200 hover:bg-gray-50"
      }`}
    >

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-3">

          <Diamond className="text-orange-500 mt-1" size={15} />

          <div>
            <h2 className="!text-sm font-bold text-slate-800 leading-none">
              Maybe
            </h2>

            <p className="!text-xs text-gray-500 mt-1">
              SCORE 40–69
            </p>
          </div>
        </div>

        <h1 className="!text-2xl font-bold text-green-600 leading-none">
          {maybeCount}
        </h1>
      </div>

      <div className="h-[4px] bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[50%] h-full bg-orange-500 rounded-full"></div>
      </div>
    </button>

    {/* WEAK */}
    <button
      onClick={() => setFilter("weak")}
      className={`w-full h-[115px] rounded-2xl border px-6 py-5 transition flex flex-col justify-between
      ${
        filter === "weak"
          ? "border-red-500 bg-red-50"
          : "border-gray-200 hover:bg-gray-50"
      }`}
    >

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-3">

          <Circle className="text-red-500 mt-1" size={10} />

          <div>
            <h2 className="!text-sm font-bold text-slate-800 leading-none">
              Weak
            </h2>

            <p className="!text-xs text-gray-500 mt-1">
              BELOW 40
            </p>
          </div>
        </div>

        <h1 className="!text-2xl font-bold text-green-600 leading-none">
          {weakCount}
        </h1>
      </div>

      <div className="h-[4px] bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[25%] h-full bg-red-500 rounded-full"></div>
      </div>
    </button>

  </div>
</div>

                    {/* Table Container */}
                    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-7 bg-[#f8fafc] px-4 py-3 border-b border-slate-200 text-[11px] font-semibold tracking-wide uppercase text-slate-500">
                            <div>Candidate</div>
                            <div>Type</div>
                            <div>Score</div>
                            <div>Responsibilities</div>
                            <div>Skills</div>
                            <div>Bucket</div>
                            <div>Action</div>
                        </div>

                        {/* Table Body */}
                        {filteredCandidates.map((candidate, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-7 items-center px-6 py-3 border-b border-slate-100 hover:bg-slate-50 transition"
                            >
                                {/* Candidate */}
                                <div>
                                    <h2 className="!text-[14px] font-semibold">
                                        {candidate.name}
                                    </h2>

                                    <p className="!text-[14px] text-slate-500 mt-1">
                                        {candidate.email}
                                    </p>
                                </div>

                                {/* Type */}
                                <div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-[10px] font-semibold ${candidate.type === "Experienced"
                                            ? "bg-blue-50 text-blue-600 border border-blue-200"
                                            : "bg-purple-50 text-purple-600 border border-purple-200"
                                            }`}
                                    >
                                        {candidate.type}
                                    </span>
                                </div>

                                {/* Score */}
                                <div className="flex flex-col items-center justify-center gap-1">
                                    <div className="w-[60px] h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${candidate.score >= 80
                                                ? "bg-green-600"
                                                : candidate.score >= 50
                                                    ? "bg-orange-500"
                                                    : "bg-red-500"
                                                }`}
                                            style={{ width: `${candidate.score}%` }}
                                        />
                                    </div>

                                    <span
                                        className={`text-[14px] font-semibold ${candidate.score >= 80
                                            ? "text-green-600"
                                            : candidate.score >= 50
                                                ? "text-orange-500"
                                                : "text-red-500"
                                            }`}
                                    >
                                        {candidate.score}
                                    </span>
                                </div>

                                {/* Responsibilities */}
                                <div
                                    className={`text-[18px] font-medium ${candidate.score >= 80
                                        ? "text-green-600"
                                        : candidate.score >= 50
                                            ? "text-orange-500"
                                            : "text-red-500"
                                        }`}
                                >
                                    {candidate.responsibilities}
                                </div>

                                {/* Skills */}
                                <div
                                    className={`text-[18px] font-medium ${candidate.score >= 80
                                        ? "text-green-600"
                                        : candidate.score >= 50
                                            ? "text-orange-500"
                                            : "text-red-500"
                                        }`}
                                >
                                    {candidate.skills}
                                </div>

                                {/* Bucket */}
                                <div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-[12px] font-semibold ${candidate.bucket === "Strong"
                                            ? "bg-green-50 text-green-600 border border-green-200"
                                            : candidate.bucket === "Maybe"
                                                ? "bg-orange-50 text-orange-500 border border-orange-200"
                                                : "bg-red-50 text-red-500 border border-red-200"
                                            }`}
                                    >
                                        {candidate.bucket}
                                    </span>
                                </div>

                                {/* Action */}
                                <div>
                                    {candidate.bucket === "Strong" ? (
                                        <button
                                            onClick={() => handleOpenScorecard(candidate.id)}
                                            className="px-3 py-1 rounded-xl border border-slate-300 text-slate-600 text-[12px] font-semibold hover:bg-slate-50 transition"
                                        >
                                            View scorecard
                                        </button>
                                    ) : candidate.bucket === "Maybe" ? (
                                        <button
                                            onClick={() => handleOpenScorecard(candidate.id)}
                                            className="px-2 py-1 rounded-xl bg-blue-400 text-white text-[12px] font-semibold shadow hover:bg-blue-600 transition"
                                        >
                                            Review now
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleOpenScorecard(candidate.id)}
                                            className="px-2 py-1 rounded-xl border border-slate-300 text-slate-500 text-[12px] font-semibold hover:bg-slate-50 transition"
                                        >
                                            Override
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidatesList;