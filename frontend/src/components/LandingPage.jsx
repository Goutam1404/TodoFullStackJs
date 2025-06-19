import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ darkTheme, setDarkTheme }) => {
  const navigate = useNavigate();
  const theme = darkTheme !== undefined ? darkTheme : false;

  const toggleTheme = () => {
    if (setDarkTheme) {
      setDarkTheme((prev) => !prev);
    }
  };

  return (
    <div
      className={`${
        theme
          ? "bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-blue-200 to-white"
      } min-h-screen flex flex-col items-center justify-center px-6 text-center transition-all duration-500`}
    >
      <div className="absolute top-4 right-4 space-x-2 z-10">
        <button
          onClick={toggleTheme}
          className={`px-4 py-1 border rounded text-sm transition duration-300 transform hover:scale-105 ${
            theme
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"
          }`}
        >
          {theme ? "💡" : "⚫"}
        </button>
      </div>

      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow-lg">
        Welcome to MultiTask
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
        A productivity tool to manage your tasks, take notes, and track time —
        all in one place. Login or register to get started.
      </p>
      <div className="space-x-4 mb-6">
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Register
        </button>
      </div>
      <button
        onClick={() => navigate("/timer")}
        className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-lg"
      >
        Start the Clock
      </button>
    </div>
  );
};

export default LandingPage;
