const express = require("express");
const createUser = require("../controllers/createUser");
const getUser = require("../controllers/getUser");
const rechargeWallet = require("../controllers/rechargeWallet");
const router = express.Router();

router.post("/adduser", createUser);
router.get("/getuser/:useruid", getUser);
router.post("/recharge", rechargeWallet);

module.exports = router;
