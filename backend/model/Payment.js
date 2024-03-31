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

exports.User = mongoose.model("Payment", paymentSchema);
