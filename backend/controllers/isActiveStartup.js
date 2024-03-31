const { Startup } = require("../model/Startup");

//Check if user exists by useruid
const isActiveStartup = async (req, res) => {
  const { useruid } = req.params;
  const startup = await Startup.findOne({ useruid });
  if (startup) {
    res.status(200).json({ status: true, message: "Startup is active" });
  } else {
    res.status(201).json({ status: false, message: "Startup is not active" });
  }
};

module.exports = isActiveStartup;
