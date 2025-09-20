const express=require("express");
const user_signedup_model=require("../model/user_signedup")

const app=express();

function CheckAdmin(){
    const adminEmail="chawlatushar262@gmail.com";
    
    return (req,res,next)=>{
        console.log(req.user)

        if(req.user){
            if(req.user.email==adminEmail){
            const user=user_signedup_model.findOne({email:adminEmail});
            // user.admin=true;
            req.admin=true;


           return next();
        }
        }
       

       return next();
    }
}

module.exports={CheckAdmin};