import React from "react";
import LogoutButton from "./LogoutButton";

const Dashboard = () => {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      <header className="flex items-center justify-between p-4 bg-gray-950 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Multitask</h1>
        <div className="space-x-4">
          <button className="bg-gray-300 text-gray-800 px-4 py-1 rounded">
            Profile
          </button>
          <LogoutButton />
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-xl font-semibold mb-4">
          Welcome to your Dashboard
        </h2>
        <p className="mb-4">Here you can add Todos, Notes, or start a Timer.</p>
        {/* Future sections for todos, notes, and timer */}
      </main>
    </div>
  );
};

export default Dashboard;
