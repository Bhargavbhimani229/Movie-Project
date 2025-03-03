const { default: mongoose } = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    confirm_password: String,
  },
  { timestamp: true }
);

const adminCred = mongoose.model("adminCred", adminSchema);

module.exports = adminCred;