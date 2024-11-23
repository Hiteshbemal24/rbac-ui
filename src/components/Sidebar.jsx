import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active tab
  const activeTab = location.pathname.replace("/", "") || "users";

  // State to toggle sidebar collapse
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleNavigation = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div
      className={`${
        isSidebarCollapsed ? "w-16" : "w-64"
      } bg-[#171717] min-h-screen p-4 transition-all duration-300 hidden md:block`}
    >
      {/* Arrow button to collapse/expand the sidebar */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="text-white bg-transparent p-1 focus:outline-none"
        >
          {isSidebarCollapsed ? "→" : "←"}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="grid text-center mt-4">
        <button
          onClick={() => handleNavigation("users")}
          className={`mt-2 tab-button h-[49px] rounded-[16px] focus:outline-none ${
            activeTab === "users"
              ? "active bg-[#28292F] text-white"
              : "hover-button bg-transparent text-white"
          }`}
        >
          <span className="tab-button-content">
            {isSidebarCollapsed ? "U" : "Users"}
          </span>
        </button>
        <button
          onClick={() => handleNavigation("roles")}
          className={`mt-4 tab-button h-[49px] rounded-[16px] focus:outline-none ${
            activeTab === "roles"
              ? "active bg-[#28292F] text-white"
              : "hover-button bg-transparent text-white"
          }`}
        >
          <span className="tab-button-content">
            {isSidebarCollapsed ? "R" : "Roles"}
          </span>
        </button>
        <button
          onClick={() => handleNavigation("permissions")}
          className={`mt-4 tab-button h-[49px] rounded-[16px] focus:outline-none ${
            activeTab === "permissions"
              ? "active bg-[#28292F] text-white"
              : "hover-button bg-transparent text-white"
          }`}
        >
          <span className="tab-button-content">
            {isSidebarCollapsed ? "P" : "Permissions"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
