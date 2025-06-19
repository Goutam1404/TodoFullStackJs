import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verifyUser } from "../services/authService";
import { ThemeContext } from "../context/ThemeContext";

const VerifyPage = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { token } = useParams();
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const handleVerify = async () => {
      try {
        const res = await verifyUser(token);
        console.log(res.message);
        setVerified(true);

        // Redirect after short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500); // 1.5s to enjoy the animation
      } catch (err) {
        alert(err?.response?.data?.message || err.message);
      }
    };

    if (token) {
      handleVerify();
    }
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

      {verified ? (
        <div className="flex flex-col items-center justify-center animate-fadeIn">
          <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-green-500 animate-bounce shadow-lg">
            <svg
              className="w-12 h-12 text-white"
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
          <h1 className="text-3xl font-bold mb-2 text-green-600">
            Account Verified!
          </h1>
          <p className="text-lg">Redirecting to dashboard...</p>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow-lg">
            Verifying your account...
          </h1>
          <p className="text-xl">Please wait while we confirm your email.</p>
        </>
      )}
    </div>
  );
};

export default VerifyPage;

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
