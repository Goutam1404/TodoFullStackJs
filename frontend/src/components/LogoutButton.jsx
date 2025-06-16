import React from "react";
import { logoutUser } from "../services/authService";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      alert(res.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1">
      Logout
    </button>
  );
};

export default LogoutButton;
