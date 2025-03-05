const userAuth = (req, res, next) => {
  const {userId} = req.cookies; 

  if (userId) {
    return next();
  } else {
    res.redirect("/singnin"); 
  }
};

module.exports = userAuth;
