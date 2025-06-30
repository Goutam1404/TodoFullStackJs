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
    <button
      onClick={handleLogout}
      className="w-full text-left text-red-600 py-1 hover:underline"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
