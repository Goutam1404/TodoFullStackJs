import { registerUser } from "../services/authService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const RegisterPage = ({ darkTheme }) => {
  const navigate = useNavigate();
  const theme = darkTheme != undefined ? darkTheme : false;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ name, email, password });
      toast.success(res.message || "Registered successfully!");
      // if (res.token) {
      //   setTimeout(() => {
      //     navigate(`/verify/${res.token}`);
      //   }, 2000);
      // } else {
      //   alert("No token received");
      // }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed!");
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
        Register
      </h1>
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6 ${
          theme ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`w-full p-3 border rounded-md outline-none ${
            theme ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        />
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
          
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Register
        </button>
        <p>
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;

// const RegisterForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await registerUser({ name, email, password });
//     alert(res.message);
//   } catch (err) {
//     alert(err.message);
//   }
// };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//         className="border px-2 py-1 w-full"
//       />
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
//       <button type="submit" className="bg-blue-500 text-white px-4 py-1">
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;
