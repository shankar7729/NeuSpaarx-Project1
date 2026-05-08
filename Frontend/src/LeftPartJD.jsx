import React from "react";
import { useNavigate } from "react-router-dom";

const LeftPartJD = () => {

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
    <div className="w-64 h-screen bg-white border-r border-slate-100 p-4 flex flex-col">

      {/* Sidebar Label */}
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-[-10px]">
        Overview
      </p>

      {/* Navigation */}
      <nav className="space-y-1 mt-4">

        {navItems.map((item) => (
          <button
            key={item.name}

            onClick={() => navigate(item.path)}

            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
              item.active
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
    </div>
  );
};

export default LeftPartJD;