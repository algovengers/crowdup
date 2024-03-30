const { User } = require("../model/User");

async function createUser(req, res) {
  const { useruid, email, name, role } = req.body;
  try {
    const user = new User({ useruid, email, name, role });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = createUser;
