const getOtp = require("../utils/genOtp");
const otpStore = require("../config/otpStore");
const { User } = require("../model/User");
const sendMail = require("../utils/sendMail");
require("dotenv").config();

async function sendOtp(req, res) {
  const { useruid, amount, startupid } = req.body;
  try {
    const user = await User.findOne({ useruid });
    if (user) {
      if (!user.email) {
        return res.status(200).json({ msg: "error user.email" });
      }
      const otp = getOtp();
      otpStore[user.email] = { otp, amount, startupid };

      const { success } = await sendMail({
        otp,
        amount,
        startupid,
        email: user.email,
      });
      if (!success) {
        return res.status(200).json({ msg: "error mail send" });
      }
      res.status(200).json({ msg: "success" });
    } else {
      res.status(200).json({ msg: "error useruid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = sendOtp;
