
import React,{useState,useEffect} from 'react';
import axios from "axios";
import Userinvestment from './userinvestment';
import "../css/home.css";
// {params:{token:a,active:true}}


function Home() {


const [dataa,setDataa]=useState([])
// console.log(dataa)
let a=localStorage.getItem("token");
  useEffect(()=>{
    axios.get("http://0.0.0.0:3001/investment/products").then(data=>setDataa(data.data))

  //  console.log(dataa)
  },[dataa])


  


  
   

    // console.log(dataa)
// const id=prompt("enter id");

//   <div>

  
//  {
//      dataa? dataa.map(items=>
//        <div class="card" style={{width: 18 +'rem'}}>
//   <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
//   <div class="card-body">
//     <h5 class="card-title">_id:{items._id}</h5>
//     <h5 class="card-title">name:{items.name}</h5>
//     <h5 class="card-title">investment type:{items.investment_type}</h5>
//     <h5 class="card-title">tenure months:{items.tenure_months}</h5>
//     {/* <h5 class="card-title">{items.annual_yield}</h5> */}
//     {/* <h5 class="card-title">{items.min_investment}</h5> 
//     <h5 class="card-title">{items.max_investment}</h5> */}

 
   
//    <input type="text" value={items._id}></input> <a href="/investmentuser" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
       
//       ):"jkkj"
//     } 
//   </div>
   

// const plans = [
//   {
//     id: 1,
//     name: "Plan A",
//     description: "Safe and stable investment with low risk.",
//     return: "6% p.a.",
//     min: "₹5,000",
//   },
//   {
//     id: 2,
//     name: "Plan B",
//     description: "Balanced growth for medium-term investors.",
//     return: "10% p.a.",
//     min: "₹10,000",
//   },
//   {
//     id: 3,
//     name: "Plan C",
//     description: "High growth opportunities with higher risk.",
//     return: "15% p.a.",
//     min: "₹25,000",
//   },
// ];


  // const handleInvest = (planName) => {
  //   alert(`You chose to invest in ${planName}`);
  //   // later you can navigate or call backend here
  // };

  return (
    <div className="investment-page">
      <h1 className="page-title">Available Investment Plans</h1>
      <div className="card-grid">
        {  dataa.length==0?<h2>No product Listed</h2> : dataa.map((items) => (
          <div key={items._id} className="card">
            <h2>{items.name}</h2>
            <p>{items.description}</p>
            <div className="card-details">
              <span>Risk Level: {items.risk_level}</span>
              
             <span>Investment Type: {items.investment_type}</span> 
             </div>
             <div className="card-details1">
              <span>Tenure Months: {items.tenure_months}</span>
               <span>Annual Yield: {items.annual_yield}</span>
             </div>
             <div className="card-details2">
              <span>Min Investment: {items.min_investment}</span>
              <span>Max Investment: {items.max_investment}</span>
             </div>
              

               
            
            {/* <button
              className="btn-invest"
              onClick={() => handleInvest(items.name)}
            >
              Invest
            </button> */}
            <input type="text" value={items._id}></input> <a className='btn-invest' href="/investmentuser" class="btn btn-primary">Go somewhere</a>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default InvestmentGrid;

   
   
  


export default Home;
