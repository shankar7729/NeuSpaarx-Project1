import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-60 h-screen bg-[#ffffff] border-r px-5 py-6">

      {/* SECTION: OVERVIEW */}
      <p className="text-xs text-gray-400 tracking-widest mt-[6px] mb-3 mr-10">
        OVERVIEW
      </p>

      <div className="space-y-2 mb-6">

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
            location.pathname === "/dashboard"
              ? "bg-[#e6ebf5] text-blue-600"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span>▦</span>
          Dashboard
        </Link>

        {/* Post JD */}
        <Link to="/PostJD" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg">
          <span>＋</span>
          Post a JD
        </Link>

        {/* All Candidates */}
        <Link
          to="/candidates"
          className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <span>◎</span>
            All Candidates
          </div>

          <span className="bg-blue-600 text-white text-xs px-2 py-[2px] rounded-full">
            48
          </span>
        </Link>

      </div>

      {/* SECTION: REVIEW QUEUES */}
      <p className="text-xs text-gray-400 tracking-widest mb-3">
        REVIEW QUEUES
      </p>

      <div className="space-y-2 mb-6">

        {/* Maybe Bucket */}
        <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <span>◇</span>
            Maybe Bucket
          </div>
          <span className="bg-orange-500 text-white text-xs px-2 py-[2px] rounded-full">
            12
          </span>
        </div>

        {/* Strong Matches */}
        <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <span>✦</span>
            Strong Matches
          </div>
          <span className="bg-blue-600 text-white text-xs px-2 py-[2px] rounded-full">
            9
          </span>
        </div>

        {/* Weak / Held */}
        <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
          <span>○</span>
          Weak / Held
        </div>

      </div>

      {/* SECTION: ACTIVE JOBS */}
      <p className="text-xs text-gray-400 tracking-widest mb-3">
        ACTIVE JOBS
      </p>

      <div className="space-y-2">

        <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
          <span>▶</span>
          Frontend Dev
        </div>

        <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
          <span>▶</span>
          ML Engineer
        </div>

        <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
          <span>▶</span>
          Product Manager
        </div>

      </div>

    </div>
  );
};

export default Sidebar;