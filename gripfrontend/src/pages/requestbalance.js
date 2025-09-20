// RequestReset.jsx
import React, { useState } from "react";
import axios from "axios";

export default function RequestBalance() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://0.0.0.0:3001/balance/request-balance", { email });
      setDone(true); // tell user to check email (always same message)
    } catch (err) {
      setError(err.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="card">
      <h2>Request Balance</h2>
      {!done ? (
        <form onSubmit={submit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <div>
            <p>Check your email for the reset code (it may be in spam).</p>
        <a href="verifybalance">verify balance</a>
        </div>
      )}
      {error && <p className="err">{error}</p>}
    </div>
  );
}
