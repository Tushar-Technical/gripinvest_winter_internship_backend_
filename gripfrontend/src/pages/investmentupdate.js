// Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/productlisting.css"

export default function InvestmentUpdate({ setUser }) {
  const [form, setForm] = useState({ name: "", investment_type: "",tenure_months:"",annual_yield:"",risk_level:"",min_investment:"",max_investment:"",description:"" });
  let a=localStorage.getItem("token");
const navigate = useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res= await axios.post("http://0.0.0.0:3001/investment/products/update",{ ...form ,token:localStorage.getItem("token")});
      // console.log(res)
      if(res.data.admin){
        alert(res.data.admin)
      }
    
        navigate(res.data.redirecturl) // save user
      
    } catch (err) {
      
    }
  };


 


  return (
    

     <div className="form-container">
      {/* <h1 className="form-title">Update Existing Product </h1> */}
      <form className="modern-form" onSubmit={handleSubmit}>
        <h2 >Update Existing Product </h2>
        <br></br>
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input type="text" id="name" name="name" placeholder="Enter your name" required onChange={handleChange} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Tenure Months </label> */}
          <input type="text" id="investment_type" name="investment_type" placeholder="Enter invest type" required onChange={handleChange} />
        </div>

        <div className="form-group">
          {/* <label htmlFor="email">Tenure Months </label> */}
          <input type="text" id="tenure_months" name="tenure_months" placeholder="Enter Months" required onChange={handleChange} />
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Annual Yield</label> */}
          <input type="number" id="annual_yield" name="annual_yield" placeholder="Enter annual yield" required onChange={handleChange} />
        </div>

        <div className="form-group">
          {/* <label htmlFor="amount">Risk level</label> */}
          <input type="text" id="risk_level" name="risk_level" placeholder="Enter Risk level" required onChange={handleChange} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="amount">Min Investment</label> */}
          <input type="number" id="min_investment" name="min_investment" placeholder="Enter Min investment" required onChange={handleChange} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="amount">Max Investment</label> */}
          <input type="number" id="max_investment" name="max_investment" placeholder="Enter max investment" required  onChange={handleChange}/>
        </div>
        <div className="form-group">
          {/* <label htmlFor="amount">Description</label> */}
          <input type="text" id="description" name="description" placeholder="Enter Description" required onChange={handleChange} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="status">status</label> */}
          <input type="text" id="status" name="status" placeholder="Enter status" required onChange={handleChange} />
        </div>

        

        <button type="submit" className="btn-submit">update Product</button>
        <br></br>
        
      </form>
    </div>
  );
}
