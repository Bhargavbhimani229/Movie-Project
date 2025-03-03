const { Router } = require("express");

const clientController = require('../controllers/clientController');

const clientRouter = Router();

clientRouter.get('/client',clientController.homePage);

clientRouter.get('/client/about',clientController.aboutPage);

clientRouter.get('/client/review',clientController.reviewPage);

clientRouter.get('/client/joinus',clientController.joinusPage);

clientRouter.get('/client/contact',clientController.contactPage);



module.exports = clientRouter;