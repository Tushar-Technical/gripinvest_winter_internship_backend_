// RequestReset.jsx
import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function RequestReset() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://0.0.0.0:3001/auth/request-reset", { email });
      setDone(true); // tell user to check email (always same message)
      if(done==true){
       Navigate("/verifyreset")
      }
    } catch (err) {
      setError(err.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="card">
      <h2>Forgot Password</h2>
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
        <a href="verifyreset">verify reset</a>
       </div>
      )}
      {error && <p className="err">{error}</p>}
    </div>
  );
}
