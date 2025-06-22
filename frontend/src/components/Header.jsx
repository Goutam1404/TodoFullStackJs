
import React from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = ({ darkTheme, setDarkTheme, user }) => {
  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 shadow-md flex justify-between items-center px-6 py-3 transition-all duration-500 ${
        darkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex space-x-6 text-lg font-semibold">
        <Link to="/todos" className="hover:underline">
          Todos
        </Link>
        <Link to="/notes" className="hover:underline">
          Notes
        </Link>
        <Link to="/timer" className="hover:underline">
          Timer
        </Link>
      </div>
      <ProfileMenu
        user={user}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
    </header>
  );
};

export default Header;
