import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/userinvestment.css"

export default function Userinvestment(){
    const [form, setForm] = useState({ product_id: "", product_name: "",amount:"",expected_return: " ",maturity_date:"" });
const navigate = useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("request started")
      if(!localStorage.getItem("email")){
         navigate("/login")
      }
      else{
let res= await axios.post("http://0.0.0.0:3001/currentlyinvested/doinvestment",{ ...form,currentuser:localStorage.getItem("email").toString(),token:localStorage.getItem("token")});
      console.log("axios request done")

      if(res.data.error){
        alert(res.data.error)
        navigate("/userinvestment")
      }
       // save user
      if(res.data.balance){
        alert(res.data.balance)
        navigate("/requestbalance")
      }
       // save user
      }
      
    //   
        
      
      
    } catch (err) {
      
    }
  };
    return (
        
    
        <div className="form-wrapper">
      <div className="form-card">
        
        <p className="form-subtitle">
          Secure, smart, and reliable investment plans.
        </p>

        <form className="investment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="product_id" name="product_id" required onChange={handleChange} />
            <label htmlFor="product_id">Product Id</label>
          </div>

          <div className="form-group">
            <input type="number" id="amount" name="amount" required  onChange={handleChange}/>
            <label htmlFor="amount">Amount</label>
          </div>

          <div className="form-group">
            <input type="number" id="expected_return" name="expected_return" required  onChange={handleChange}/>
            <label htmlFor="expected_return">Expected return  (₹)</label>
          </div>
          <div className="form-group">
            <input type="date" id="maturity_date" name="maturity_date" required  onChange={handleChange}/>
            <label htmlFor="maturity_date">Maturity date  (₹)</label>
          </div>

          

          <button type="submit" className="btn-submit">
            Invest Now
          </button>
          
        </form>
      </div>
    </div>
   
    )
}


// export default Userinvestment;