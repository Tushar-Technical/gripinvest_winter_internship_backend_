const { express } = require("express");
const mongoose=require("mongoose");
const { Schema } = mongoose;

const investment_product_Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    investment_type:{
        type:String,
        enum:['bond', 'fd', 'mf', 'etf', 'other'],
        required:true,
    },
    tenure_months:{
        type:Number,
        required:true,
        validate:{
                 validator:Number.isInteger,
                 message:'value passed is not integer'
        }
    },
    annual_yield:{
            type:Number,
            required:true,

    //         validate:{
    //             validator:function(v) {
    //     // Convert Decimal128 to a string and check its format
    //     const strValue = v.toString();
    //     // Regex to check for up to 5 total digits, with up to 2 decimal places
    //     return /^-?\d{1,3}(\.\d{1,2})?$/.test(strValue);
    //   },

    //   message: props => `${props.value} is not a valid DECIMAL(5,2) format!1`
            },
        

        risk_level:{
            type:String,
             enum:['low','moderate','high'],
             required:false,
        },

        min_investment:{
            type:Number,
            
            default:1000.00
            
        },
        max_investment:{
            type:Number,
        },
        description:{
            type:String
        },
        status: { type: String, enum: ["active","closed"], default: "active" }





})

const investment_product_model=mongoose.model("investment_product_model",investment_product_Schema);

module.exports=investment_product_model;