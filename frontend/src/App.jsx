import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import VerifyButton from "./components/VerifyButton";
import Dashboard from "./components/Dashboard";
import TimerPage from "./components/TImerPage";

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
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/verify" element={<VerifyButton />} />
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
