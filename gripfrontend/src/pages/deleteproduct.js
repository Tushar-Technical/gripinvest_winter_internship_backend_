// VerifyReset.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DeleteProduct() {
  const [form, setForm] = useState({ name: ""});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res=await axios.post("http://0.0.0.0:3001/investment/product/delete", form);
      // success -> redirect to login
      navigate(res.data.redirecturl);
    } catch (err) {
      setError(err.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="card">
      <h2>Enter Email</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          
          placeholder="product name"
          name="productname"
          onChange={(e) => setForm({ ...form, productname: e.target.value })}
          required
        />
        
        <button type="submit">Delete Product</button>
      </form>
      {error && <p className="err">{error}</p>}
    </div>
  );
}
