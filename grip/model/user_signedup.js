const express = require('express');
const mongoose=require('mongoose');
const {Schema}=require('mongoose');
const {createHmac,randomBytes, hash}=require('crypto');
const {generatetoken}=require("../service/auth")
const user_signedup_schema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true,

    },
    last_name:{
        type:String,
        required:false,

    },

    email:{
        type:String,
        required:true,
        unique:true,

    },

    password_hash:{
        type:String,
        required:true,

    },

    risk_apetite:{
            type:String,
             enum:['low','moderate','high'],
             required:false,
             default:'moderate',
    },
    salt:{
        type:String,
        required:false,
    },
      balance: { type: Number, default: 0 },  // wallet balance
  isVerified: { type: Boolean, default: false  },
    resetOtpHash: {
         type: String }, 
              // hashed OTP
  resetOtpExpires: { 
    type: Date }   ,
    admin:{
        type:String,
        default:false
    }



   




    
})

user_signedup_schema.pre("save",function(next){
    const user=this;
    const salt=randomBytes(16).toString();
    const hashPassword=createHmac("sha256",salt).update(user.password_hash).digest("hex");
    this.salt=salt;
    this.password_hash=hashPassword

    if(!user.isModified("password_hash")) return ;
    next();

})


user_signedup_schema.static("matchpassword",async function(email,password){
    const user=await this.findOne({email:email});
    
   

    if(!user) return "incorrect";
    const salt=user.salt;
     const hashedpassword=user.password_hash;
    const loginhashedpassword=createHmac("sha256",salt).update(password).digest("hex");
    if(loginhashedpassword!==hashedpassword){
        return "incorrect";
    }

    const token=generatetoken(user);
    console.log("generate token works");
    return token;
})


const user_signedup_model= mongoose.model('user_signedup_model',user_signedup_schema);

module.exports=user_signedup_model;
