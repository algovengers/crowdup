const { Startup } = require("../model/Startup");

//Check if user exists by useruid
async function isActiveStartup(req, res) {
  const { useruid } = req.params;
  try {
    const startup = await Startup.findOne({ useruid });
    if (startup) {
      res.status(200).json({ active: true });
    } else {
      res.status(200).json({ active: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = isActiveStartup;
