const movieData = require("../models/movieSchema");
const adminCred = require("../models/adminShema");
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
    let updateData = { ...req.body };

    if (req.file) {
      let movie = await movieData.findById(id);
      if (movie.thumbnail) {
        fs.unlinkSync(movie.thumbnail); 
      }
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
  res.render("./pages/singup");
};

module.exports.singinPage = (req, res) => {
  res.render("./pages/singnin");
};

module.exports.createAdmincredential = async (req, res) => {
  let { password, confirm_password } = req.body;

  if (password === confirm_password) {
    await adminCred.create(req.body);
    res.render("./pages/singnin", req.body);
  } else {
    console.log("Password & Confirm Password should be same!");
    res.render("./pages/singnin", req.body);
  }
};

module.exports.checkCredentials = async (req, res) => {
  const { username, password } = req.body;

  let cred = await adminCred.findOne({ username });

  if (!cred) {
    console.log("User not found!");
    return res.redirect("/singnin");
  }

  if (cred.username === username && cred.password === password) {
    res.cookie("userId", cred.id);
    return res.render("index");
  } else {
    console.log("Invalid credentials!");
    return res.redirect("/singnin");
  }
};


module.exports.logOut = (req, res) => {
  res.clearCookie("userId");
  return res.redirect("/singnin");
};
