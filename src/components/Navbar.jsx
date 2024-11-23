import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css"; 

const Navbar = () => {
  const location = useLocation();
  const activeTab = location.pathname.replace("/", "") || "users";

  return (
    <div className="bg-blue-400 text-black py-4 px-6 flex justify-between items-center">
      <Link to="/users">
        <h1 className="text-xl font-bold">RBAC Dashboard</h1>
      </Link>
      <div className="flex space-x-8">
        <Link
          to="/users"
          className={`navbar-link ${
            activeTab === "users" ? "active-tab" : ""
          }`}
        >
          Users
        </Link>
        <Link
          to="/roles"
          className={`navbar-link ${
            activeTab === "roles" ? "active-tab" : ""
          }`}
        >
          Roles
        </Link>
        <Link
          to="/permissions"
          className={`navbar-link ${
            activeTab === "permissions" ? "active-tab" : ""
          }`}
        >
          Permissions
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
