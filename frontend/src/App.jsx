import React, { useState } from "react";

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import VerifyButton from "./components/VerifyButton";
function App() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Auth Demo</h1>

      <div className="mb-6">
        <h2 className="text-xl mb-2">Register</h2>
        <RegisterForm />
      </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2">Login</h2>
        <LoginForm />
      </div>

      <div>
        <h2 className="text-xl mb-2">Logout</h2>
        <LogoutButton />
      </div>
      <div>
        <h2 className="text-xl mb-2">Logout</h2>
        <VerifyButton />
      </div>
    </div>
  );
}

export default App;
