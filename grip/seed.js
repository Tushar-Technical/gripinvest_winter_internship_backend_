// backend/seed.js
const mongoose = require("mongoose");
const User = require("./model/user_signedup");
// const Product = require("./model/investment_product");
const investment_product_model=require("./model/investment_product");
const user_signedup_model=require("./model/user_signedup");
const {connection}=require("./connection/connectmongo")


// const MONGO_URI = "mongodb://mongo:27017/investment-product";
const MONGO_URI = "mongodb://host.docker.internal:27017/investment-product";

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to DB");

  // Clear collections
  await user_signedup_model.deleteMany({});
  await investment_product_model.deleteMany({});

  // Create sample user
 await user_signedup_model.create({
    
    first_name: "Test",
    last_name: "User",
    email: "chawlatushar262@gmail.com",
    password_hash: "hashedpassword",
    risk_appetite: "moderate"
  });

  // Create sample products
  await investment_product_model.insertMany([
    {
      name: "Corporate Bond",
      investment_type: "bond",
      tenure_months: 12,
      annual_yield: 8,
      risk_level: "low",
      min_investment: 1000,
      max_investment: 50000,
      description: "Safe investment with corporate bond returns.",
      status:"active"
    },
    {
      name: "Mutual Fund Growth",
      investment_type: "mf",
      tenure_months: 36,
      annual_yield: 12,
      risk_level: "moderate",
      min_investment: 5000,
      max_investment: 200000,
      description: "Balanced mutual fund for steady growth."
    }
  ]);

  console.log("Seed data inserted");
  process.exit();
}


seed();
