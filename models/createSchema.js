const { default: mongoose } = require("mongoose");

const clientMovie = new mongoose.Schema({
  movieName: String,
  thumbnail: String,
  description: String,
},
{ timestamps: true });

const allMovie = mongoose.model("clientMovie",clientMovie);
module.exports = allMovie;