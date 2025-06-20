import { loginUser } from "../services/authService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ darkTheme }) => {
  const navigate = useNavigate();
  const theme = darkTheme !== undefined ? darkTheme : false;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      // alert(res.message);
      console.log(res.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
      navigate("/dashboard");
    } catch (err) {
      setLoading(false); // stop loading on error
      alert(err?.response?.data?.message || err.message);
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
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow-lg">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6 ${
          theme ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full p-3 border rounded-md outline-none ${
            theme ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={`w-full p-3 border rounded-md outline-none ${
            theme ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform hover:scale-105 shadow"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p>
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
      {loading && (
        <div className="mt-6 flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await loginUser({ email, password });
//       alert(res.message);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-md items-center">
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="border px-2 py-1 w-full"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="border px-2 py-1 w-full"
//       />
//       <button type="submit" className="bg-green-500 text-white px-4 py-1">
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
