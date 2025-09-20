import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/signupform.css"

{/* <div>
        <form method="POST" action="http://localhost:3001/user/signup">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" name="first_name">first_name</label>
            <input type="text" name="first_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           
          </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" name="last_name">last_name</label>
          <input type="text" class="form-control" name="last_name" id="exampleInputEmail1" aria-describedby="emailHelp"/>

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label" name="email">email</label>
          <input type="email" class="form-control" name="email" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label" name="password_hash">password</label>
          <input type="password" class="form-control" name="password_hash" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label" name="risk_apetite">risk_apetite</label>
          <input type="text" class="form-control" name="risk_apetite" id="exampleInputPassword1"/>
        </div>
       
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
     </div> */}

const Signup=()=>{
   const [form, setForm] = useState({ email: "", password: "" });
const navigate = useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res= await axios.post("http://0.0.0.0:3001/user/signup", form);
      console.log(res.data.redirecturl)
      //  if (res.data.success==false) {
      //   localStorage.setItem("access","denied")
      //   navigate(res.data.redirectUrl); // ✅ frontend redirect
      // }

      
      //    localStorage.setItem("token", res.data.token); // save JWT
      // localStorage.setItem("email", res.data.email); // save user
        navigate("/login") // save user
      
      
      // localStorage.setItem("token", res.data.token); // save JWT
      // localStorage.setItem("user", JSON.stringify(res.data.user)); // save user
      // setUser(res.data.user); // update state in App
    } catch (err) {
      
    }
  };
    return (
     

      <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Account</h2>

        <div className="form-group">
          {/* <label>First Name</label> */}
          <input
            type="text"
            name="first_name"
            placeholder="Enter your name"
            // value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          {/* <label>last name</label> */}
          <input
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            // value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          {/* <label>email</label> */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            // value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Password</label> */}
          <input
            type="password"
            name="password_hash"
            placeholder="Enter your password"
            // value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>risk Apetite</label> */}
          <input
            type="text"
            name="risk_apetite"
            placeholder="Enter your risk_apetite"
            // value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
    )
}

export default Signup;