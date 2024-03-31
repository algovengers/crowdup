const express = require("express");
const createUser = require("../controllers/createUser");
const getUser = require("../controllers/getUser");
const rechargeWallet = require("../controllers/rechargeWallet");
const payment = require("../controllers/payment");
const { sendOtp } = require("../controllers/sendOtp");
const router = express.Router();

router.post("/adduser", createUser);
router.get("/getuser/:useruid", getUser);
router.post("/recharge", rechargeWallet);
router.post("/reqpayment", sendOtp);
router.post("/verifypayment", payment);

module.exports = router;
