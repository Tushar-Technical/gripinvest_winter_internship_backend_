const express=require("express");
const mongoose=require("mongoose");
const http=require("http")
const {connection}=require("./connection/connectmongo")
const app=express();
const server=http.createServer(app)
const cors=require("cors");
const {checklogin}=require("./middleware/checklogin")
const cookieParser=require("cookie-parser")
require("dotenv").config();

const investment_product_router=require("./Routes/investment_product_route")
const user_signedup_router=require("./Routes/user_signedup");
const user_invested_router=require('./Routes/user_invested');
const authRoutes = require("./Routes/auth.js");
const BalanceRoute = require("./Routes/requestBalance.js");
// const AdminROute=require("./Routes/adminRoute.js");
const adminModel = require("./model/adminModel.js");
// const cookieParser = require("cookie-parser");

const port =3001;

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
// app.use(checklogin());
app.use(express.json())

app.use(cors({
          origin: 'http://localhost:3000' // Replace with your frontend's origin
        }));



app.use("/investment",investment_product_router);
app.use("/user",user_signedup_router);
app.use("/currentlyinvested",user_invested_router);
app.use("/auth",authRoutes);
app.use("/balance",BalanceRoute);
// app.use("/admin",adminModel);

// app.get("/profile", checklogin(),(req,res)=>{
//     console.log(req.user)
//     if(!req.user)return;
//    return res.json(req.user)
// })
// app.get("/health", async (req, res) => {
//   try {
//     // await mongoose.connection.db.admin().ping();
//     // res.status(200).json({ status: "ok", db: "connected" });
//     connection("mongodb://localhost:27017/investment-product").then(()=>{
//     console.log("mongoose connected")
// })
//   } catch (err) {
//     // res.status(500).json({ status: "error", message: err.message });
//   }
// });

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

connection("mongodb://host.docker.internal:27017/investment-product").then(()=>{
    console.log("mongoose connected")
})
server.listen(port,()=>{
    console.log(`listening to port ${port}`)
})