// VerifyReset.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VerifyReset() {
  const [form, setForm] = useState({ email: "", otp: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://0.0.0.0:3001/auth/verify-reset", form);
      // success -> redirect to login
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="card">
      <h2>Enter Code & new password required</h2>
      <form onSubmit={submit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          name="otp"
          placeholder="6-digit code"
          value={form.otp}
          onChange={(e) => setForm({ ...form, otp: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="neww password "
        name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Reset password</button>
      </form>
      {error && <p className="err">{error}</p>}
    </div>
  );
}
