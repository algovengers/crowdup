const express = require("express");
const payment = require("../controllers/payment");
const sendOtp = require("../controllers/sendOtp");
const router = express.Router();

router.post("/getotp", sendOtp);
router.post("/verifypayment", payment);

module.exports = router;
