const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, required: true },
  startup: { type: mongoose.Types.ObjectId, required: true },
  amount: { type: Number },
  timestamp: {
    type: Date,
    default: () => Date.now(),
  },
});


exports.Payment = mongoose.model("Payment", paymentSchema);

