import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const menu = [
        { name: "HR Dashboard", path: "/dashboard" },
        { name: "Post JD", path: "/PostJD" },
        { name: "Candidate List", path: "/candidates" },
        { name: "Scorecard View", path: "/scorecard" },
        { name: "Maybe Bucket", path: "/maybe" },
    ];

    return (
        <div className="w-full bg-[#2f3a8f] text-white px-6 py-3 flex items-center justify-between shadow">

            {/* Logo */}
            <div className="flex items-center gap-2 font-semibold text-lg">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                ResumeAI
            </div>

            {/* Menu */}
            <div className="flex items-center gap-6 text-sm">

                {menu.map((item, index) => (
                    <div key={index} className="flex items-center gap-6">

                        {/* Link */}
                        <Link to={item.path} className={`px-4 py-2 rounded-md transition ${location.pathname === item.path? "bg-[#3f4bb8] border border-blue-300"
                                    : "hover:text-gray-300"
                                }`}>
                            {item.name}
                        </Link>

                        {/* Divider */}
                        {index !== menu.length - 1 && (
                            <div className="h-5 w-[1px] bg-blue-300 opacity-20"></div>
                        )}

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Navbar;