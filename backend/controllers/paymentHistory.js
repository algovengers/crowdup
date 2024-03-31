const { Payment } = require("../model/Payment");
const { Startup } = require("../model/Startup");
const { User } = require("../model/User");

async function getPaymetntHistory(req, res) {
  try {
    const useruid = req.params.id;
    const user = await User.find({ useruid });
    if (!user) {
      return res.status(401).json({ error: "Invalid user id" });
    }
    let data;
    let newData = [];
    console.log(user);
    if (user[0].role === "startup") {
      // const id = user._id
      const startup = await Startup.findOne({ useruid }).lean();
      if (!startup) {
        return res.status(200).json({ msg: "Startup not found" });
      }

      // console.log(startup)
      const id = startup._id;

      // console.log(id)
      data = await Payment.find({ startup: id });

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].user);
        const userData = await User.findOne({ useruid: data[i].user }).lean();
        const startupData = await Startup.findById(data[i].startup).lean();
        let obj = { paymentData: data[i], startupData, userData };
        // data[i].startupData = startupData
        // data[i].userData = userData
        newData.push(obj);
      }
    } else {
      data = await Payment.find({ user: useruid });

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].user);
        const userData = await User.findOne({ useruid: data[i].user }).lean();
        const startupData = await Startup.findById(data[i].startup).lean();
        let obj = { paymentData: data[i], startupData, userData };
        // data[i].startupData = startupData
        // data[i].userData = userData
        newData.push(obj);
      }
    }
    res.status(200).json({ data: newData });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
}

module.exports = { getPaymetntHistory };
