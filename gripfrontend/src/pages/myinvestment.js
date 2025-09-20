
import React,{useState,useEffect} from 'react';
import axios from "axios";
// import Userinvestment from './userinvestment';



function Myinvestment() {


const [dataa,setDataa]=useState([])
// console.log(dataa)
// let a=localStorage.getItem("token");
  useEffect(()=>{
    axios.get("http://0.0.0.0:3001/currentlyinvested/myinvestments",{params:{email:localStorage.getItem("email")}}).then(data=>setDataa(data.data))

  //  console.log(dataa)
  },)


  
console.log(`data is ${dataa}`)

  
   

    // console.log(dataa)
// const id=prompt("enter id");

  return (
  <div>

  
 {
    
     dataa.length!==0? dataa.map(items=>
       <div class="card" style={{width: 18 +'rem'}}>
  <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">_id:{items.user_id}</h5>
    {/* <h5 class="card-title">name:{items.amount}</h5> */}
    <h5 class="card-title">investment type:{items.product_id.investment_type}</h5>
    <h5 class="card-title">tenure months:{items.tenure_months}</h5>
    <h5 class="card-title">Annual yield{items.product_id.annual_yield}</h5>
    <h5 class="card-title">min investment{items.product_id.min_investment}</h5> 
    <h5 class="card-title">max investment{items.product_id.max_investment}</h5> 
    {/* <h5 class="card-title"> amount invested{items.amount}</h5> y */}

 
   
   <input type="text" value={items._id}></input> <a href="/investmentuser" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
       
      ):"no investment made by you"
    } 
  </div>
   
   
   
  );
}

export default Myinvestment;
