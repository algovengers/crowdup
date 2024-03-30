const mongoose = require("mongoose");
const { Schema } = mongoose;

const startupSchema = new Schema({
  userid: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  report: { type: String }, // URL of the report we will store in the cloudinary
  fundsRecieved: { type: Number },
  stocks: { type: Number },
  fundsRequired: { type: Number },
  domain: [{ type: String }],
  founded: { type: Number },
  logo: { type: String, required: true }, // URL of the image
  websiteLink: { type: String },
  active: { type: Boolean, default: false },
});

exports.Startup = mongoose.model("Startup", startupSchema);