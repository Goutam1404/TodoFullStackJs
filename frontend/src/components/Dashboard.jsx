import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = ({ darkTheme, setDarkTheme, handleLogout }) => {
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div
      className={`${
        darkTheme
          ? "bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-blue-200 to-white"
      } min-h-screen px-6 py-4 transition-all duration-500`}
    >
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          MultiTask
        </h1>
        <div className="space-x-3">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded text-sm hover:bg-white hover:text-black transition"
          >
            {darkTheme ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white bg-opacity-10 rounded-xl shadow-xl backdrop-blur-lg border border-white/20 text-center">
          <h2 className="text-2xl font-semibold mb-2">Add To-Do</h2>
          <p className="text-sm">(Component Placeholder)</p>
        </div>
        <div className="p-6 bg-white bg-opacity-10 rounded-xl shadow-xl backdrop-blur-lg border border-white/20 text-center">
          <h2 className="text-2xl font-semibold mb-2">Add Notes</h2>
          <p className="text-sm">(Component Placeholder)</p>
        </div>
        <div
          className="p-6 bg-white bg-opacity-10 rounded-xl shadow-xl backdrop-blur-lg border border-white/20 text-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => navigate("/timer")}
        >
          <h2 className="text-2xl font-semibold mb-2">Start Timer</h2>
          <p className="text-sm">(Click to Open Timer)</p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
