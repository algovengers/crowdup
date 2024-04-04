const { Startup } = require("../model/Startup");

function buildMongoQuery(filters) {
  let queryFilter = {};
  const domainArray = filters.domain?.split(",");
  // console.log(domainArray)
  queryFilter.domain = { $in: domainArray };
  // console.log(queryFilter)
}

const getStartupList = async (req, res) => {
  try {
    const page = parseInt(req?.params?.page) || 1;
    const pageSize = 10;
    const filters = req?.query || {};
    console.log(filters);
    buildMongoQuery(filters);

    const data = await Startup.find();
    // const founder = await User.
    console.log(Startup);
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getStartup = async (req, res) => {
  try {
    const id = req?.params.id;
    console.log(id)
    if (!id) {
      res.status(404).json({ message: "invalid id" });
      return;
    }
    const data = await Startup.find({_id : id});
    console.log(data)
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

module.exports = { getStartupList, getStartup };
