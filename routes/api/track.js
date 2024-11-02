const express = require('express');
const { validateBody, authentificate } = require('../../middlewares');

const controllers = require('../../controllers/track');

// joi schemas
const schemas = require('../../schemas');

// create most routes
const trackRouter = express.Router();

trackRouter.get("/", authentificate, controllers.getTrackAll);
trackRouter.get("/:id", authentificate, controllers.getTrackById);
trackRouter.post("/", authentificate, validateBody(schemas.trackSchema), controllers.addTrack);
trackRouter.put("/:id", authentificate, validateBody(schemas.trackSchema), controllers.updateTrackById);
trackRouter.delete("/", authentificate, validateBody(schemas.trackSchema), controllers.deleteTrackById);

// export to app
module.exports = trackRouter;