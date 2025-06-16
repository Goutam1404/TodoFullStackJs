import React, { useState } from "react";
import { verifyUser } from "../services/authService";

const VerifyButton = () => {
  const [token, setToken] = useState("");

  const handleVerify = async () => {
    try {
      const res = await verifyUser(token);
      alert(res.message);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Enter verification token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="border px-2 py-1 w-full"
      />
      <button
        onClick={handleVerify}
        className="bg-purple-500 text-white px-4 py-1"
      >
        Verify Account
      </button>
    </div>
  );
};

export default VerifyButton;
