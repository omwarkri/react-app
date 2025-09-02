import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.username === form.username && savedUser.password === form.password) {
      setUser(savedUser);
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-2 border rounded"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full bg-green-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
