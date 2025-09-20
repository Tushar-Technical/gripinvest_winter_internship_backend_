const jwt=require('jsonwebtoken');
const secret="tarun1234";

function generatetoken(user){
    const payload={
        _id:user._id,
        email:user.email,
        password:user.password,

    }
    console.log("generate token working ");
     const token =jwt.sign(payload,secret);
     console.log("token has been set")
    return token;
}

    function verifytoken(token){
        if(!token) return res.redirect("http://localhost:3000");
        const payload=jwt.verify(token,secret);
        if(!payload) return res.redirect("http://localhost:3000");
        return payload ;
    }
   
module.exports={generatetoken,verifytoken}