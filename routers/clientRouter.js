const { Router } = require("express");

const clientController = require('../controllers/clientController');
const userAuth = require("../middlewares/userAuth");

const clientRouter = Router();



clientRouter.get('/client',clientController.homePage);

clientRouter.get('/client/about',clientController.aboutPage);

clientRouter.get('/client/review',clientController.reviewPage);

clientRouter.get('/client/joinus',clientController.joinusPage);

clientRouter.get('/client/contact',clientController.contactPage);

clientRouter.get('/single/:id',clientController.singlePage);



module.exports = clientRouter;