const mongoose=require("mongoose");
const {Schema}=mongoose;

const user_invested_product_schema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user_signedup_model",
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"investment_product_model",
    },
    amount:{
        type:Schema.Types.Decimal128,
        require:true,
    },
    invested_at:{
        type:Date,
        default:Date.now,
    },
    status:{
        type:String,
         enum:['active','matured','cancelled'],
         default:"active",
    },
    expected_return:{
        type:Schema.Types.Decimal128,
        require:false,

    },

maturity_date:{
    type:Date,
    require:false,
}
},{timestamps:true});


const user_invested_product_model=mongoose.model('user_invested_product_model',user_invested_product_schema)
module.exports=user_invested_product_model;