import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import VerifyButton from "./components/VerifyButton";
import Dashboard from "./components/Dashboard";
import TimerPage from "./components/TImerPage";
import LandingPage from "./components/LandingPage";
import { logoutUser } from "./services/authService";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleLogout = async () => {
    // Clear cookie, localStorage, or token logic
    try {
      const res = await logoutUser();
      alert(res.message);
      console.log("Logged out");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      {/* <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} user={user} /> */}

      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <div className="bg-gray-900 mx-auto space-y-8">
          <Header
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
            user={{ name: "John Doe" }} // ✅ This line defines user
          />
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  darkTheme={darkTheme}
                  setDarkTheme={setDarkTheme}
                />
              }
            />
            <Route
              path="/register"
              element={<RegisterForm darkTheme={darkTheme} />}
            />
            <Route
              path="/login"
              element={<LoginForm darkTheme={darkTheme} />}
            />
            <Route
              path="/verify/:token"
              element={
                <VerifyButton
                  darkTheme={darkTheme}
                  setDarkTheme={setDarkTheme}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  darkTheme={darkTheme}
                  setDarkTheme={setDarkTheme}
                  handleLogout={handleLogout}
                />
              }
            />
            <Route
              path="/timer"
              element={
                <TimerPage darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
