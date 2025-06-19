import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import VerifyButton from "./components/VerifyButton";
import Dashboard from "./components/Dashboard";
import TimerPage from "./components/TImerPage";
import LandingPage from "./components/LandingPage";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleLogout = () => {
    // Clear cookie, localStorage, or token logic
    console.log("Logged out");
  };
  return (
    <Router>
      <div className="bg-gray-900 mx-auto space-y-8">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            }
          />
          <Route
            path="/register"
            element={<RegisterForm darkTheme={darkTheme} />}
          />
          <Route path="/login" element={<LoginForm darkTheme={darkTheme} />} />
          <Route
            path="/verify/:token"
            element={
              <VerifyButton darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
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
  );
};

export default App;
