const { Router } = require("express");
const userController = require('../controllers/userController');
const upload = require("../middlewares/imgUplods");

const userRouter = Router();




userRouter.get("/signup", userController.singupPage);
userRouter.get("/signin", userController.singinPage);

userRouter.get('/',userController.homePage);
userRouter.get('/movieForm',userController.movieForm);
userRouter.post('/create',upload,userController.formPage);
userRouter.get('/tables',userController.tablePage);
userRouter.get("/movie/delete/:id", userController.movieDelete);
userRouter.get('/movie/:id',userController.movieEdit);
userRouter.post('/update/:id',upload,userController.update);



  
module.exports = userRouter;