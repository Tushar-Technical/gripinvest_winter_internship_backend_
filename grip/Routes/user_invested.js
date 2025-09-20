const express=require("express");
const app = express();
const router=express.Router();
const user_invested_product_model=require("../model/user_invested_product");
const user_signedup_model =require ("../model/user_signedup");
const investment_product_model= require ("../model/investment_product");

const {checklogin}=require("../middleware/checklogin")


router.post("/doinvestment",async (req,res)=>{
    //  if(req.user){
    const {product_id,product_name,amount,expected_return,maturity_date,currentuser}=req.body;
    console.log("klllll")
    // const currentuser=req.body
    let a=currentuser.toString();
    console.log(`current user ${a}`)
// console.log("dkfgjkdsjfk")
    // console.log(product_id,amount,expected_return,maturity_date,)
    
 const product=await investment_product_model.findOne({_id:product_id})

    const user=await user_signedup_model.findOne({email:currentuser})
console.log(user)

    // //  Rule 1: Check KYC / verification
    // if (!user.isVerified) {
    //     console.log("rule 0")
    //   return res.status(403).json({ error: "User must be verified before investing" });
    // }

    // Rule 2: Balance check
    if (amount > user.balance) {
        console.log("rule 1")
      return res.json({ balance: "Insufficient balance" });
    }

    // Rule 3: Product min investment check
    if (amount < product.min_investment) {
        console.log("rule 2")
      return res.json({ error: `Minimum investment is ${product.min_investment}` });
    }

    // Rule 4: Product status check
    if (product.status !== "active") {
        console.log("rule 3")
      return res.json({ error: "Product is not open for investment" });
    }
    
    console.log(`user_id ${a}`)
    await user_invested_product_model.create({
        user_id:user._id,
        product_id:product_id,
        amount:amount,
        expected_return:expected_return,
        maturity_date:maturity_date,

    })

    user.balance=user.balance-amount;
       
    return res.json({success:true,redirecturl:"/myinvestment"})
    
    // else{
    //     console.log("jk")
    //     return res.json({redirecturl:"/login"})
    // }
   
// }

    // return res.json({redirecturl:"/investment"})

})


router.get("/myinvestments",async(req,res)=>{
    const {email,product_id}=req.query;
    console.log(`email ${email}`);
    const user=await user_signedup_model.findOne({email:email});
           console.log(`user is ${user}`)
           console.log(`user id is ${user._id}`)

   const my_investment_data=await user_invested_product_model.find({user_id:user._id}).populate("product_id")
   console.log(` invested data is ${my_investment_data}`)
             return res.json(my_investment_data);
})




module.exports=router