import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Signup from "./signup";
import Login from "./signin";
import Navbar from "./Navabar";
import Landingpage from "./landingpage";
import Home from "./Home";
import Userinvestment from "./userinvestment";
import Myinvestment from "./myinvestment";
import Investment from "./investment";
import Logout from "./Logout";
import RequestReset from "./requestreset";
import VerifyReset from "./verifyreset";
import RequestBalance from "./requestbalance";
import VerifyBalance from "./verifybalance";
import InvestmentUpdate from "./investmentupdate";
import DeleteProduct from "./deleteproduct";


const RouterExample=()=>{
    return (
        <BrowserRouter>
        <Navbar/>
        {/* <Navbar/>
        
         <Landingpage/> */}
        {/* <Home/> */}
        <Routes>
<Route path="/home"element={<Home/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/investmentuser" element={<Userinvestment/>}></Route>
<Route path="/myinvestment" element={<Myinvestment/>}></Route>
<Route path="/investment" element={<Investment/>}></Route>
<Route path="/requestreset" element={<RequestReset/>}></Route>
<Route path="/verifyreset" element={<VerifyReset/>}></Route>
<Route path="/requestbalance" element={<RequestBalance/>}></Route>
<Route path="/verifybalance" element={<VerifyBalance/>}></Route>
<Route path="/verifybalance" element={<VerifyBalance/>}></Route>
<Route path="/admin" element={<Investment/>}></Route>
<Route path="/adminupdate" element={<InvestmentUpdate/>}></Route>
<Route path="/verifyreset" element={<VerifyReset/>}></Route>
<Route path="/deletelisting" element={<DeleteProduct/>}></Route>
{/* <Route path="/requestreset" element={<RequestReset/>}></Route> */}

 <Route path="/" element={
            <>
              
              <Routes>
                <Route path="/" element={<Landingpage />} />
                {/* you can add more routes here */}
              </Routes>
            </>
             }
        />
        </Routes>
        
        
        
        </BrowserRouter>
    )
}

export default RouterExample;