import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from "axios";



function App() {
const [data,setDataa]=useState([])
   useEffect(() => {
    // Axios GET request to backend API
    fetch("http://localhost:3001/investment/products").then((res)=>res.json()).then((data)=>{
      setDataa(data);
    });
    // console.log(data);
    })
   

    
// const id=prompt("enter id");

  return (
    <div>
      {
      data.map(items=>
        <li>{items.name}</li>
      )
    }
 <form action={"http://localhost:3001/investment/products/update"} method="POST">
 <div class="form-floating mb-3">
            <input type="text" class="form-control" name="name" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">name</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" name="investment_type" id="floatingPassword"/>
            <label for="floatingPassword">investment_type</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control" id="floatingPassword" name="tenure_months" />
            <label for="floatingPassword">tenure_months</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control" id="floatingPassword" name="annual_yield" />
            <label for="floatingPassword">annual_yield</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" name=" risk_level" />
            <label for="floatingPassword"> risk_level</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control" id="floatingPassword" name=" min_investment" />
            <label for="floatingPassword"> min_investment</label>
          </div>
          <div class="form-floating">
            <input type="number" class="form-control" id="floatingPassword" name="max_investment" />
            <label for="floatingPassword">max_investment</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" name="description" />
            <label for="floatingPassword">description</label>
          </div>
          {/* <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" name="id" />
            <label for="floatingPassword">id</label>
          </div> */}
     <button type="submit">Add data</button>
    </form>
    
    </div>
   
  );
}

export default App;
