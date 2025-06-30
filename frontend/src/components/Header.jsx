import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { Menu, X } from "lucide-react"; // Icon library (Lucide or Heroicons)

const Header = ({ darkTheme, setDarkTheme, user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseLinkStyles =
    "block px-3 py-2 rounded-md hover:underline transition";
  const getLinkClass = ({ isActive }) =>
    `${baseLinkStyles} ${
      isActive
        ? darkTheme
          ? "text-teal-400 font-bold"
          : "text-blue-600 font-bold"
        : ""
    }`;

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 mb-4 transition-all duration-300 ${
        darkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
      } ${scrolled ? "shadow-lg" : "shadow-none"}`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
            MultiTask
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          <NavLink to="/todos" className={getLinkClass}>
            Todos
          </NavLink>
          <NavLink to="/notes" className={getLinkClass}>
            Notes
          </NavLink>
          <NavLink to="/timer" className={getLinkClass}>
            Timer
          </NavLink>
        </nav>

        {/* Right Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <ProfileMenu
              user={user}
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
            />
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-4 transition-all ${
            darkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <nav className="flex flex-col space-y-2 text-base font-medium">
            <NavLink
              to="/todos"
              className={getLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Todos
            </NavLink>
            <NavLink
              to="/notes"
              className={getLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Notes
            </NavLink>
            <NavLink
              to="/timer"
              className={getLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Timer
            </NavLink>
            <div className="pt-2 border-t border-white/20">
              <ProfileMenu
                user={user}
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
