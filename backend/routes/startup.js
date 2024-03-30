const express = require("express");
const createStartup = require("../controllers/createStartup");
const isActiveStartup = require("../controllers/isActiveStartup");

const { uploadFiles } = require("../utils/uploadFile");
const router = express.Router();

router.post("/create", uploadFiles, createStartup);

router.get("/isactive/:useruid", isActiveStartup);

module.exports = router;
