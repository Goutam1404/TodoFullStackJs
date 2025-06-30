import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import LogoutButton from "./LogoutButton";

const ProfileMenu = ({ user, darkTheme, setDarkTheme }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleTheme = () => setDarkTheme((prev) => !prev);
  const toggleMenu = () => setOpen((prev) => !prev);
//  const handleLogout = async () => {
//     try {
//       const res = await logoutUser();
//       alert(res.message);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 text-white font-bold text-sm"
      >
        {user?.name?.[0] || "U"}
      </button>
      {open && (
        <div
          className={`absolute right-0 mt-2 w-40 p-2 rounded-md shadow-lg z-50 ${
            darkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <p className="text-sm font-semibold">{user?.name || "User"}</p>
          <hr className="my-1 border-white/20" />
          <button
            onClick={toggleTheme}
            className="w-full text-left py-1 hover:underline"
          >
            {darkTheme ? "Light Mode" : "Dark Mode"}
          </button>
         <LogoutButton/>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
