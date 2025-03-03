const movieData = require("../models/movieSchema");
const fs = require("fs");

module.exports.homePage = (req, res) => {
  return res.render("index");
};

module.exports.movieForm = (req, res) => {
  return res.render("./pages/movieForm.ejs");
};

module.exports.formPage = (req, res) => {
  movieData.create({ ...req.body, thumbnail: req.file.path });
  console.log("Data Enter Successfully...");
  return res.render("./pages/movieForm.ejs");
};

module.exports.tablePage = async (req, res) => {
  try {
    const movies = await movieData.find({});
    return res.render("./pages/movieTable", { movies });
  } catch (error) {
    console.log(error.message);
    return res.render("./pages/movieTable", { movies: {} });
  }
};

// Movie-Data-Deleted

module.exports.movieDelete = async (req, res) => {
  try {
    let { id } = req.params;
    let movie = await movieData.findByIdAndDelete(id);
    fs.unlinkSync(movie.thumbnail);
    console.log("Movie deleted successfully");
    return res.redirect("/tables");
  } catch (error) {
    console.log(error.message);
    res.redirect("/tables");
  }
};

// Movie-Data-Edite

module.exports.movieEdit = async (req, res) => {
  try {
    let { id } = req.params;
    let movie = await movieData.findById(id);
    console.log("movie mali gau....");
    return res.render("./pages/edit.ejs", { movie });
  } catch (error) {
    console.log(error.message);
    return res.render("./pages/edit.ejs", { movie: {} });
  }
};

module.exports.update = async (req, res) => {
  try {
    let { id } = req.params;

    let updateData = { ...req.body, thumbnail: req.file.filename };
    if (req.file) {
      let movie = await movieData.findById(id);
      fs.unlinkSync(movie.thumbnail);
      updateData.thumbnail = req.file.path;
    } else {
      updateData.thumbnail = req.body.old_thumbnail;
    }

    await movieData.findByIdAndUpdate(id, updateData);
    res.redirect("/tables");
  } catch (error) {
    console.log(error.message);
    res.redirect("/tables");
  }
};

// Authentication and Client Pages
module.exports.singupPage = (req, res) => {
  res.render("./pages/signup");
};

module.exports.singinPage = (req, res) => {
  res.render("./pages/signin");
};


module.exports.logOut = (req, res) => {
  res.clearCookie("userId");
  return res.redirect("/signin");
};
