// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//     const location = useLocation();

//     const menu = [
//         { name: "HR Dashboard", path: "/dashboard" },
//         { name: "Post JD", path: "/PostJD" },
//         { name: "Candidate List", path: "/candidates" },
//         { name: "Scorecard View", path: "/scorecard" },
//         { name: "Maybe Bucket", path: "/maybe" },
//     ];

//     return (
//         <div className="w-full bg-[#2f3a8f] text-white px-6 py-3 flex items-center justify-between shadow">

//             {/* Logo */}
//             <div className="flex items-center gap-2 font-semibold text-lg">
//                 <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
//                 ResumeAI
//             </div>

//             {/* Menu */}
//             <div className="flex items-center gap-6 text-sm">

//                 {menu.map((item, index) => (
//                     <div key={index} className="flex items-center gap-6">

//                         {/* Link */}
//                         <Link to={item.path} className={`px-4 py-2 rounded-md transition ${location.pathname === item.path? "bg-[#3f4bb8] border border-blue-300"
//                                     : "hover:text-gray-300"
//                                 }`}>
//                             {item.name}
//                         </Link>

//                         {/* Divider */}
//                         {index !== menu.length - 1 && (
//                             <div className="h-5 w-[1px] bg-blue-300 opacity-20"></div>
//                         )}

//                     </div>
//                 ))}

//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const menu = [
    { name: "HR Dashboard", path: "/dashboard" },
    { name: "Post JD", path: "/PostJD" },
    { name: "Candidate List", path: "/candidates" },
    { name: "Scorecard View", path: "/scorecard" },
    { name: "Shortlisted", path: "/shortlisted" },
    {name:"Settings", path:"/settings"}
  ];

  return (
    <div className="w-full h-11 bg-[#1e2a6e] border-b border-gray-200 px-8 py-4 flex items-center shadow-sm sticky top-0 z-50">

      {/* Left Section */}
      <div className="flex items-center gap-10">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-[#FFFFFF]">
          <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
          ResumeAI
        </div>
        {/* Menu */}
        <div className="flex items-center gap-3">

          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`px-3 py-1 rounded-l text-sm font-medium transition-all duration-200
              
              ${
                location.pathname === item.path
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-white-900 hover:bg-slate-600 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Navbar;