import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || null);

  return email ? (
    <Dashboard onLogout={() => { localStorage.removeItem("userEmail"); setEmail(null); }} />
  ) : (
    <Login onLogin={(email) => setEmail(email)} />
  );
}

export default App;
