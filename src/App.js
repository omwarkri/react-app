// App.jsx
import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Message from "./components/Message";
import Status from "./components/Status";
import NameList from "./components/NameList";
import ContactForm from "./components/ContactForm";
import Parent from "./components/Parent";
import Timer from "./components/Timer";
import Card from "./components/Card";

// Pages
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

import { AuthContext } from '../../App';




function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        {/* Routing */}
        <Routes>
          {/* Home Page with your old components */}
          <Route
            path="/"
            element={
              <div style={{ padding: "20px", fontFamily: "Arial" }}>
                <h1>Mini React Project</h1>
                <Card>
                  <Welcome />
                  <Greeting name="Om" />
                  <Counter />
                  <Message />
                  <Status isLoggedIn={true} />
                  <NameList />
                  <ContactForm />
                  <Parent />
                  <Timer />
                </Card>
              </div>
            }
          />

          {/* Auth Pages */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
