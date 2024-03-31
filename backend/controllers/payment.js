const { User } = require("../model/User");
const { Payment } = require("../model/Payment");

async function payment(req, res) {
  const { useruid, amount, startupid } = req.body;
  try {
    const user = await User.findOne(useruid);
    if (user) {
      const payment = await Payment.create({
        user: user._id,
        startup: startupid,
        amount,
      });
      if (payment) {
        const user = await User.findByIdAndUpdate(useruid, {
          $inc: { moneyWallet: -1 * amount },
        });
        if (user) {
          res.status(200).json({ msg: "success" });
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
