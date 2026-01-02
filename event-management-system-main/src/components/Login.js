import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // ✅ v5

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // ✅ replace useNavigate

  const handleLogin = () => {
    if (email && password) {
      setUser({ email });
      history.push("/events"); // ✅ replace navigate()
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded focus:outline-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded focus:outline-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
