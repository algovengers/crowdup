const express = require("express");
const createStartup = require("../controllers/createStartup");
const isActiveStartup = require("../controllers/isActiveStartup");
const router = express.Router();

router.post("/create", createStartup);
router.get("/isactive/:useruid", isActiveStartup);

module.exports = router;
