import { useAuth } from "../../App";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Welcome, {user?.username} 🎉</h2>
      <button className="bg-red-500 text-white p-2 rounded" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
