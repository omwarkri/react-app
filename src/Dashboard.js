// Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../../App';

function Dashboard() {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      {user ? (
        <>
          <h1>Welcome {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h1>Please login to continue.</h1>
      )}
    </div>
  );
}

export default Dashboard;
