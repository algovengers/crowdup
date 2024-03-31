const { User } = require("../model/User");

async function rechargeWallet(req, res) {
  const { useruid, amount } = req.body;
  try {
    const user = await User.findByIdAndUpdate(useruid, {
      $inc: { moneyWallet: amount },
    });
    if (user) {
      res.status(200).json({ msg: "success" });
    } else {
      res.status(200).json({ msg: "error" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = rechargeWallet;
