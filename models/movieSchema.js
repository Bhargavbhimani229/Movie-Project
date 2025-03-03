const { default: mongoose } = require("mongoose");

const movieFormData = new mongoose.Schema(
  {
    movieName: String,
    thumbnail: String,
    description: String,
  },
  { timestamps: true }
);

const movieData = mongoose.model("movieData", movieFormData);
module.exports = movieData;
