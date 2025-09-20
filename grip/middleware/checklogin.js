
const {verifytoken}=require("../service/auth");
const express=require("express")
const app = express();
app.use(express.json());

// for form-urlencoded requests
app.use(express.urlencoded({ extended: true }));
function checklogin(){
    return (req,res,next)=>{
       
        
        const {token}=req.body;
         console.log("i am working bhai")
         console.log(token)
         console.log("i am working bhai 2")
        //  console.log(req.query);
        if(!token) return next();

        try{
            var payload=verifytoken(token);
            if(!payload) return next();
            console.log("i am working bhai")
            console.log(payload)
            req.user=payload;
            // console.log("request user")
            // console.log(req.user)
            // app.locals.siteName=payload;
            // console.log(app.locals.siteName)
            // return res.json(payload);
            // console.log(req);
        }catch(error){

        }

        return next();
    }
}

module.exports={checklogin}