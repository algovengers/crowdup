import { Resend } from "resend";
import getOtp from "../utils/genOtp";
import otpStore from "../config/otpStore";
require("dotenv").config();

const resend = new Resend(process.env.RESEND_KEY);

async function sendOtp(req, res) {
  const { useruid, amount, startupid } = req.body;
  try {
    const user = await User.findOne(useruid);
    if (user) {
      if (!user.email) {
        return res.status(200).json({ msg: "error user.email" });
      }
      const otp = getOtp();
      otpStore[user.email] = otp;

      const { data, error } = await resend.emails.send({
        from: "Hohos <onboarding@resend.dev>",
        to: [user.email],
        subject: "Helsacdrld Otpp",
        html: `<strong>It works! ${otp}</strong>`,
      });
      if (error) {
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
