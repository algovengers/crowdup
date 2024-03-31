const express = require("express");
const payment = require("../controllers/payment");
const sendOtp = require("../controllers/sendOtp");
const { getPaymetntHistory } = require("../controllers/paymentHistory");
const router = express.Router();

router.post("/getotp", sendOtp);
router.post("/verifypayment", payment);
router.get('/history/:id',getPaymetntHistory)
// router.get('/history', getInvestorHistory)

module.exports = router;
