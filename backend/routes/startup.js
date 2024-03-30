const express = require("express");
const createStartup = require("../controllers/createStartup");
const isActiveStartup = require("../controllers/isActiveStartup");

const { uploadFiles } = require("../utils/uploadFile");
const { getStartupList, getStartup } = require("../controllers/getStartup");
const router = express.Router();

router.post("/create", uploadFiles, createStartup);

router.get("/isactive/:useruid", isActiveStartup);

router.get("/explore",getStartupList)
router.get('startup/:id',getStartup)

module.exports = router;
