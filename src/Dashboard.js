// Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../../App';

function Dashboard() {
  const { user, setUser } = useContext(AuthContext);

  return <h1>Welcome {user ? user.name : "Guest"}</h1>;
}

export default Dashboard;
