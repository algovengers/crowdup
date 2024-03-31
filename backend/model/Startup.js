const mongoose = require("mongoose");
const { Schema } = mongoose;

const startupSchema = new Schema({

  useruid: { type: String, required: true, unique: true},

  name: { type: String, required: true },
  description: { type: String, required: true },
  report: { type: String }, // URL of the report we will store in the cloudinary
  fundsRecieved: { type: Number },
  stocks: { type: Number },
  fundsRequired: { type: Number },
  domain: [{ type: String }],
  founded: { type: Number, default: () => new Date().getFullYear() },
  logo: { type: String, required: true }, // URL of the image
  websiteLink: { type: String },
  username: { type: String, required: true },
});

exports.Startup = mongoose.model("Startup", startupSchema);
