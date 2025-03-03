const redirectClient  = (req,res,next)=>{
  if(req.url === '/'){
    return res.redirect('client');
  }
  return next();
}

module.exports = redirectClient;