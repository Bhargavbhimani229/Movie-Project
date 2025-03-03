const movieData = require("../models/movieSchema");

module.exports.homePage = async (req, res) => {
  try {
    const movies = await movieData.find({});
    // console.log("Fetched Movies:", movies);  
    return res.render("./pages/client.ejs", { movies });
  } catch (error) {
    console.log(error.message);
    return res.render("./pages/client.ejs", { movies: [] });
  }
};

module.exports.aboutPage = (req, res)=>{
  return res.render("./pages/about.ejs");
}


module.exports.reviewPage = async (req, res) => {
  try {
    let movies = await movieData.find({});
    res.render("./pages/review", { movies });
  } catch (error) {
    console.log(error.message);
    res.render("./pages/review", { movies: {} });
  }
};

module.exports.joinusPage = (req, res)=>{
  return res.render("./pages/joinus.ejs");
}


module.exports.contactPage = (req, res)=>{
  return res.render("./pages/contact.ejs");
}
