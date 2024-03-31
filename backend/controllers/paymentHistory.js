const { Payment } = require("../model/Payment");
const { Startup } = require("../model/Startup");
const { User } = require("../model/User");

async function getPaymetntHistory(req, res) {
  try {
    const useruid = req.params.id;
    console.log(useruid);
    const user = await User.find({ useruid });
    if (!user) {
      return res.status(401).json({ error: "Invalid user id" });
    }
    let data;
    console.log(user);
    if (user[0].role === "startup") {
      // const id = user._id
      const startup = await Startup.findOne({ useruid }).lean();
      if (!startup) {
        return res.status(200).json({ msg: "Startup not found" });
      }

      console.log(startup);
      const id = startup._id;
      console.log(id);
      data = await Payment.find({ startup: id });
    } else {
      data = await Payment.find({ user: useruid });
    }
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
}



module.exports = { getPaymetntHistory, }
async function getStartupHistory() {
  try {
  } catch (error) {}
}

module.exports = { getPaymetntHistory, getStartupHistory };
