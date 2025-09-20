const express=require("express");
const router=express.Router();
const investment_product_model=require("../model/investment_product");
const {checklogin}=require("../middleware/checklogin");
const { CheckAdmin } = require("../middleware/checkadmin");

router.post("/products" ,checklogin(),CheckAdmin(),async (req,res)=>{
    //    console.log(req.user);
       const {name,investment_type,tenure_months,annual_yield,risk_level,min_investment,max_investment}=req.body;
    //    console.log(token)
    if(req.user&&req.admin){
        console.log("req.user hai")
 
    await investment_product_model.create({
        name:name,
        investment_type:investment_type,
        tenure_months:tenure_months,
        annual_yield:annual_yield,
        // risk_level:risk_level,
        min_investment:min_investment,
        max_investment:max_investment,
    })
    return res.json({redirecturl:"/home"})
    }
    else{
return res.json({redirecturl:"/login",admin:"you are not admin"})
    }

    
   
})


router.post("/products/update",async (req,res)=>{
    const {name,investment_type,tenure_months,annual_yield,risk_level,min_investment,max_investment}=req.body;
    console.log("hello")
    // const {id}=req.body
    // console.log(id);
    await investment_product_model.findOneAndUpdate({name:name},{name:name,investment_type:investment_type,tenure_months:tenure_months,annual_yield:annual_yield,risk_level:risk_level,min_investment:min_investment,max_investment:max_investment});

    return res.json({redirecturl:"/home"})
})

router.get("/products",async (req,res)=>{
    // const {name,investment_type,tenure_months,annual_yield,risk_level,min_investment,max_investment}=req.body;
    // console.log("hello")
    // const {id}=req.body
    // console.log(id);
    
        console.log("request user")
        // console.log(req.user)
          console.log("request user 2")
          
            console.log("req.user hai")
        const data=await investment_product_model.find();
        console.log(data);
        return res.json(data)
          
//   console.log("req.user hai nahi")
//         return res.json()
    
    
})

router.get("/products/id",async (req,res)=>{
    const data=await investment_product_model.findOne({_id:id})
    return res.json(data);
})

router.post("/products/delete",async (req,res)=>{
    const productname=req.body
    await investment_product_model.deleteOne({name:productname});
    return res.json({redirecturl:"/home"})
})



module.exports=router;