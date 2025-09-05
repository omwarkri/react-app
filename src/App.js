// App.jsx
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// Context
export const AuthContext = React.createContext();

// ✅ Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          {/* your routes */}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
