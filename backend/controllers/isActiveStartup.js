const { Startup } = require("../model/Startup");

//Check if user exists by useruid
async function isActiveStartup(req, res) {
  const { useruid } = req.params;
  try {
    const startup = await Startup.findOne({ userid: useruid });
    if (startup) {
      const active = startup.active;
      res.status(200).json({ exists: true, active });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = isActiveStartup;
