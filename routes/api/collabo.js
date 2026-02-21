const express = require('express');
const { authentificate, isValidId } = require('../../middlewares');

const controllers = require('../../controllers/collaborates');

// create most routes
const collabRouter = express.Router();

// get collaborates only
collabRouter.get("/:id", authentificate, isValidId, controllers.getCollaborates);

// export to app
module.exports = collabRouter;
