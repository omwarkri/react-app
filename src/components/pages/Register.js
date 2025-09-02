import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("All fields are required!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Register</h2>
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
        <button className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;
