import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LeftPartJD = () => {
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openML, setOpenML] = useState(false);
  const [openPM, setOpenPM] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Dashboard",
      icon: "grid_view",
      path: "/dashboard",
      active: false,
    },
    {
      name: "Post a JD",
      icon: "add",
      path: "/postjd",
      active: true,
    },
    {
      name: "All Candidates",
      icon: "radio_button_checked",
      path: "/candidates",
      active: false,
    },
  ];

  return (
    <div className="w-55 fixed left-0 top-10 h-screen bg-white border-r px-4 py-6">

      {/* Sidebar Label */}
      <p className="text-xs uppercase text-gray-400 tracking-widest mb-3">
        Overview
      </p>

      {/* Navigation */}
      <nav className="space-y-1 mt-4">

        {navItems.map((item) => (
          <button
            key={item.name}

            onClick={() => navigate(item.path)}

            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${item.active
              ? "bg-blue-50 text-blue-600 shadow-sm"
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              }`}
          >

            {/* ICONS */}
            <span className="text-[20px]">

              {item.icon === "grid_view" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              )}

              {item.icon === "add" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              )}

              {item.icon === "radio_button_checked" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}

            </span>

            <span className="text-sm font-semibold">
              {item.name}
            </span>

          </button>
        ))}

      </nav>

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
  );
};

export default LeftPartJD;