const { Startup } = require("../model/Startup");
const { User } = require("../model/User");

async function createStartup(req, res) {
  const {
    name,
    description,
    report,
    stocks,
    fundsRequired,
    domain,
    founded,
    logo,
    websiteLink,
    useruid,
  } = req.body;

  // console.log(req.body);

  // const { useruid } = req.params;

  console.log(useruid, req.body);

  try {
    const user = await User.findOne({ useruid });
    if (user) {
      const startup = new Startup({
        name,
        description,
        report,
        stocks,
        fundsRequired,
        domain: domain.split(","),
        founded,
        logo,
        websiteLink,
        fundsRecieved: 0,
        active: true,
        useruid: user._id,
      });
      await startup.save();
      res.send(startup);
    } else {
      res.status(400).send(error);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = createStartup;
