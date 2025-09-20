// utils/otp.js
const crypto =require ("crypto");

 function generateOtp(length = 6) {
  // produce a numeric OTP as string, left-padded
  const max = 10 ** length;
  const num = Math.floor(Math.random() * max);
  return num.toString().padStart(length, "0");
}
module.exports= {generateOtp}