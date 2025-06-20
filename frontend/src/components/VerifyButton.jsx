import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verifyUser } from "../services/authService";
import { ThemeContext } from "../context/ThemeContext";
import toast from "react-hot-toast";
const VerifyButton = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("verifying"); // 'verifying', 'success', 'error'

  useEffect(() => {
    const handleVerify = async () => {
      try {
        await verifyUser(token);
        setStatus("success");
        toast.success("Account verified successfully!");
        // Redirect to login after 5 seconds
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } catch (err) {
        console.error(err);
        setStatus("error");
        toast.error(err.response?.data?.message || "Verification failed");
      }
    };

    if (token) handleVerify();
  }, [token, navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center transition-all duration-500 ${
        darkTheme
          ? "bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-blue-200 to-white"
      }`}
    >
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setDarkTheme((prev) => !prev)}
          className={`px-4 py-1 border rounded text-sm transition duration-300 transform hover:scale-105 ${
            darkTheme
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"
          }`}
        >
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {status === "verifying" && (
        <>
          <div className="w-20 h-20 border-8 border-blue-400 border-t-transparent rounded-full animate-spin mb-6"></div>
          <h1 className="text-3xl font-semibold mb-2">
            Verifying your account...
          </h1>
          <p className="text-lg">Please wait, redirecting shortly.</p>
        </>
      )}

      {status === "success" && (
        <>
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-green-500 shadow-lg animate-bounce">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold mb-2 text-green-400">
            Account Verified!
          </h1>
          <p className="text-lg">Redirecting to login page...</p>
        </>
      )}

      {status === "error" && (
        <>
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-red-500 shadow-lg animate-pulse">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold mb-2 text-red-400">
            Verification Failed
          </h1>
          <p className="text-lg mb-4">
            The verification link may be invalid or expired. Please register
            again.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition transform hover:scale-105 shadow-lg"
          >
            Register Again
          </button>
        </>
      )}
    </div>
  );
};

export default VerifyButton;

// return (
//   <div className="space-y-2">
//     <input
//       type="text"
//       placeholder="Enter verification token"
//       value={token}
//       onChange={(e) => setToken(e.target.value)}
//       className="border px-2 py-1 w-full"
//     />
//     <button
//       onClick={handleVerify}
//       className="bg-purple-500 text-white px-4 py-1"
//     >
//       Verify Account
//     </button>
//   </div>
// );
