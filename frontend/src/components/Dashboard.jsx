import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = ({ darkTheme, setDarkTheme, handleLogout }) => {
  const navigate = useNavigate();

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  const themeStyles = darkTheme
    ? "bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
    : "bg-gradient-to-br from-gray-100 via-blue-200 to-white";

  return (
    <div
      className={`${themeStyles} min-h-screen px-4 md:px-8 mt-4 py-4 transition-all duration-500`}
    >
      {/* HEADER */}
      {/* <header className="flex justify-between items-center mb-8">
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
      </header> */}

      {/* ADD TODO & NOTE SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-4 rounded-xl shadow-xl backdrop-blur-lg border border-white/20 bg-white/10 text-center">
          <h2 className="text-xl font-bold mb-2">📝 Add To-Do</h2>
          <p className="text-sm">(AddTodo Component Placeholder)</p>
        </div>
        <div className="p-4 rounded-xl shadow-xl backdrop-blur-lg border border-white/20 bg-white/10 text-center">
          <h2 className="text-xl font-bold mb-2">📄 Add Note</h2>
          <p className="text-sm">(AddNote Component Placeholder)</p>
        </div>
      </section>

      {/* PINNED AND RECENT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pinned */}
        <div className="bg-white/10 p-5 rounded-xl shadow-lg backdrop-blur-md border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">📌 Pinned Items</h3>
          <div className="mb-4 p-4 rounded-lg bg-white/20">
            <h4 className="font-bold">Pinned To-Do Title</h4>
            <p className="text-sm">Short description for pinned to-do.</p>
          </div>
          <div className="p-4 rounded-lg bg-white/20">
            <h4 className="font-bold">Pinned Note Title</h4>
            <p className="text-sm">Short description for pinned note.</p>
          </div>
        </div>

        {/* Recent */}
        <div className="bg-white/10 p-5 rounded-xl shadow-lg backdrop-blur-md border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">🆕 Recently Added</h3>
          <div className="mb-4 p-4 rounded-lg bg-white/20">
            <h4 className="font-bold">Recent To-Do Title</h4>
            <p className="text-sm">Short description for recent to-do.</p>
          </div>
          <div className="p-4 rounded-lg bg-white/20">
            <h4 className="font-bold">Recent Note Title</h4>
            <p className="text-sm">Short description for recent note.</p>
          </div>
        </div>
      </section>

      {/* TIMER */}
      {/* <div
        className="mt-10 p-6 text-center bg-white/10 rounded-xl shadow-xl border border-white/20 backdrop-blur-lg cursor-pointer hover:scale-105 transition-transform"
        onClick={() => navigate("/timer")}
      >
        <h2 className="text-2xl font-semibold mb-2">⏱️ Start Timer</h2>
        <p className="text-sm">(Click to open the Timer)</p>
      </div> */}
    </div>
  );
};

export default DashboardPage;
