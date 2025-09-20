// Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css"

export default function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
const navigate = useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res= await axios.post("http://0.0.0.0:3001/user/signin", form);
       if (!res.data.success==false) {
        // localStorage.setItem("access","denied")
        navigate("/signup"); // ✅ frontend redirect
      }

      
         localStorage.setItem("token", res.data.token); // save JWT
      localStorage.setItem("email", res.data.email); // save user
       
        navigate("/home") // save user
       window.location.reload();
      
      
      // localStorage.setItem("token", res.data.token); // save JWT
      // localStorage.setItem("user", JSON.stringify(res.data.user)); // save user
      // setUser(res.data.user); // update state in App
    } catch (err) {
      
    }
  };

  return (
   
     <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

        <button
          type="button"
          className="forgot-btn"
          // onClick={handleForgotPassword}
        >
          <a href="/requestreset">Forget Password</a>
        </button>
        
      </form>
    </div>
  );
}
