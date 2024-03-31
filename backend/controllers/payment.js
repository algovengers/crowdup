const { User } = require("../model/User");
const { Payment } = require("../model/Payment");

const otpStore = require("../config/otpStore");
const { Startup } = require("../model/Startup");
const mongoose = require("mongoose");

async function payment(req, res) {
  const { useruid, otp } = req.body;
  try {
    // if user exists
    const user = await User.findOne({ useruid });
    if (user) {
      // if email exists (not imp although)
      if (!user.email) {
        return res.status(200).json({ msg: "error user.email" });
      }
      // if otp already sent or not
      if (!otpStore[user.email]) {
        return res.status(200).json({ msg: "otp_not_sent" });
      }

      // geting rest data from otp store
      const { otp: storedOtp, amount, startupid } = otpStore[user.email];

      // matching otp
      if (storedOtp != otp) {
        return res.status(200).json({ msg: "invalid_otp" });
      } else {
        delete otpStore[user.email];
      }

      // *** doing payment
      const pmnt = await Payment.create({

        user: user._id,
        startup: startupid,
        amount,
      });

      if (pmnt) {
        // checking if user has enough money in wallet
        const user = await User.findOne({ useruid });

        if (Number(user.moneyWallet) < Number(amount)) {
          return res.status(200).json({ msg: "not_enough_money" });
        }

        // reducing moneyWallet of user
        const data = await User.findOneAndUpdate(
          { useruid },
          {
            $inc: { moneyWallet: -1 * amount },
          }
        );
        if (data) {
          // inc fundReceived of startup
          const data2 = await Startup.findByIdAndUpdate(startupid, {
            $inc: { fundsRecieved: amount },
          });

          if (data) {
            res.status(200).json({ msg: "success" });
          } else {
            res.status(200).json({ msg: "error update startup" });
          }

        } else {
          res.status(200).json({ msg: "error update user wallet" });
        }
      } else {
        res.status(200).json({ msg: "error payment" });
      }
    } else {
      res.status(200).json({ msg: "error useruid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = payment;
