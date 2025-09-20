import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
const Logout=()=>{

    

    useEffect(()=>{
        localStorage.removeItem("token");
    localStorage.removeItem("email");
        // let res= axios.get("http://localhost:3001/user/logout");
// console.log("kk")
        
            
        
    })
     Navigate("/login")
     console.log("kl")
    return (
        <></>
    )
}

export default Logout;