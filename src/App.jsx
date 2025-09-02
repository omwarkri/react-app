// App.jsx
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

// ✅ AuthContext create
export const AuthContext = React.createContext();

// ✅ custom hook
export const useAuth = () => useContext(AuthContext);

function App() {
  const [user, setUser] = useState(null);

  const login = (username) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
