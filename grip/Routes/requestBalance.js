

const  express =require("express");
const bcrypt =require ("bcryptjs");
const  validator =require( "validator");
const  User = require("../model/user.js");
const  { generateOtp } =require ("../utils/otp");
const { sendEmail } = require("../utils/mailer");
const user_signedup_model=require("../model/user_signedup.js");
const {createHmac,randomBytes, hash}=require('crypto')

const router = express.Router();
const OTP_TTL_MIN = Number(process.env.OTP_TTL_MIN || 15);
const OTP_LENGTH = Number(process.env.OTP_LENGTH || 6);
const SALT_ROUNDS = 10;
const salt=randomBytes(16).toString();

// Rate limiter per IP or per email (basic IP limiter example)
const  rateLimit =require ("express-rate-limit");
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 6, // limit requests
  message: { error: "Too many requests, try again later." },
});

router.post("/request-balance", limiter, async (req, res) => {
    console.log("received post request")
  try {
    const { email } = req.body;
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ error: "Valid email required." });
    }

    const user = await user_signedup_model.findOne({ email: email });
    if (!user) {
      // respond 200 anyway to avoid leaking which emails exist
      return res.json({ ok: true }); 
    }

    // generate OTP
    const otp = generateOtp(OTP_LENGTH); // e.g. "034591"
    const otpHash = await bcrypt.hash(otp, SALT_ROUNDS);
    const expires = new Date(Date.now() + OTP_TTL_MIN * 60 * 1000);

    user.resetOtpHash = otpHash;
    user.resetOtpExpires = expires;
    await user.save();

    // send email (simple HTML)
    const subject = "Your InvestMate Balance Request  code";
    const html = `
      <p>Your Balance Request code is:</p>
      <h2>${otp}</h2>
      <p>This code expires in ${OTP_TTL_MIN} minutes. If you didn't request this, ignore.</p>
    `;

    await sendEmail({ to: user.email, subject, html });

    return res.json({ ok: true });
  } catch (err) {
    console.error("request-reset error", err);
    return res.status(500).json({ error: "Server error" });
  }
});


router.post("/verify-balance", limiter, async (req, res) => {
    console.log("verify request received")
  try {
    const { email, otp, balance_request } = req.body;
    console.log(email,otp,balance_request)
    if (!email || !otp || !balance_request) {
      return res.status(400).json({ error: "email, otp and balance request are required" });
    }

    const user = await user_signedup_model.findOne({ email: email });
    console.log(user)
    if (!user || !user.resetOtpHash || !user.resetOtpExpires) {
      return res.status(400).json({ error: "Invalid or expired code" });
    }

    if (user.resetOtpExpires < new Date()) {
      // clear fields
      user.resetOtpHash = undefined;
      user.resetOtpExpires = undefined;
      await user.save();
      return res.status(400).json({ error: "OTP expired" });
    }

    const ok = await bcrypt.compare(otp, user.resetOtpHash);
    if (!ok) {
      return res.status(400).json({ error: "Invalid OTP" });
    }
// console.log(`user salt is ${user.salt}`);
    // otp valid -> set new password
    // const newHash =  createHmac("sha256",user.salt).update(password).digest("hex");
    // console.log(`new hash ${newHash}`)
    user.balance = balance_request;

    // clear otp fields
    user.resetOtpHash = undefined;
    user.resetOtpExpires = undefined;

    await user.save();

    // optionally: create a login token / send confirmation email
    return res.json({ ok: true, message: "balance request successful" });
  } catch (err) {
    console.error("verify-balance error", err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports=router;