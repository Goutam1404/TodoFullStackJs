import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ user, darkTheme, setDarkTheme }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Call logout API if needed
    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full w-10 h-10 bg-gray-600 text-white font-bold hover:bg-gray-700"
      >
        {user?.name?.[0]?.toUpperCase() || "U"}
      </button>

      {open && (
        <div
          className={`absolute right-0 mt-2 w-48 p-4 rounded-md shadow-lg z-50 transition-all duration-300 ${
            darkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <p className="font-semibold mb-2">{user?.name || "User"}</p>
          <button
            onClick={() => setDarkTheme((prev) => !prev)}
            className="block w-full text-left py-1 hover:underline"
          >
            {darkTheme ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left py-1 text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
