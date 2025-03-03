const { Router } = require("express");
const userController = require('../controllers/userController');
const upload = require("../middlewares/imgUplods");

const userRouter = Router();




userRouter.get("/singup", userController.singupPage);
userRouter.get("/singnin", userController.singinPage);
userRouter.post("/adminCreate", userController.createAdmincredential);
userRouter.post("/checkCred", userController.checkCredentials);

userRouter.get('/admin',userController.homePage);
userRouter.get('/movieForm',userController.movieForm);
userRouter.post('/create',upload,userController.formPage);
userRouter.get('/tables',userController.tablePage);
userRouter.get("/movie/delete/:id", userController.movieDelete);
userRouter.get('/movie/:id',userController.movieEdit);
userRouter.post('/update/:id',upload,userController.update);



  
module.exports = userRouter;