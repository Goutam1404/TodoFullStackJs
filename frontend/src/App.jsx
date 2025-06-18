import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import VerifyButton from "./components/VerifyButton";
import Dashboard from "./components/Dashboard";
import TimerPage from "./components/TimerPage";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 mx-auto space-y-8">
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/verify" element={<VerifyButton />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
