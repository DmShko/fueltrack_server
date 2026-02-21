// import model
const Track = require('../models/track');
const { HttpError, ctrlWrapper } = require("../helpers");

const schemas = require("../schemas");

const getTrackAll = async (req, res) => {

  const { _id } = req.user; // see authentificate.js 31 row

  const result = await Track.find({owner: _id}, '-createdAt -updatedAt');
  // '-createdAt -updatedAt' - for not response 'create' and 'update' fields (no need to return this two fields)
  //.populate('owner') - if need responce detail information instead only id

  res.status(200).json(result);

};

const getTrackById = async (req, res) => {

    const { _id } = req.user; // see authentificate.js 31 row
    const { trackId } = req.params;
    const result = await Track.find({owner: _id, _id: trackId});

    if (result === null || result.length === 0) throw HttpError(404, "Not found");
      
    res.status(200).json(result);

};

const addTrack = async (req, res) => {
    
    const { body } = req;
    const { error } = schemas.trackSchema.validate(body.data);
  
    // check body data second variant
    if (error) {
      
      throw HttpError(
        400,
        `missing required ${error.message
          .split(" ")
          .filter(
            (value) =>
              value !== "is" && value !== "required" && value !== "field"
          )} field`
      );
    }
   
    const { _id } = req.user; 
  
    const result = await Track.create({...body.data, owner: _id});

    res.status(201).json({ message: `Created` });

};

const updateTrackById = async (req, res) => {
      
    const { _id } = req.user;
    const { id } = req.params;
  
    const { body } = req;

    const { error } = schemas.trackSchema.validate(body.data);

    if (error) {
      throw HttpError(
        400,
        `missing required ${error.message
          .split(" ")
          .filter(
            (value) =>
              value !== "is" && value !== "required" && value !== "field"
          )} field`
      );
    }
    
    // find by 'owner' and id and update
    const result = await Track.findOneAndUpdate({owner: _id, _id: id}, body.data, {new: true});
   
    if (result === null) {
      throw HttpError(404, "Not found");
    }
    res.status(201).json({ message: `Track ${result.descriptionName} updated` });

};

const deleteTrackById = async (req, res) => {
   
    const { _id } = req.user; 
    
    const { id } = req.query;
   
    const trackName = await Track.findOne({owner: _id, _id: id});
    // find by owner and id and delete
    const result = await Track.findOneAndDelete({owner: _id, _id: id});

    if (result === null) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json({ message: `Track ${trackName.trackName} deleted` });
};

module.exports = {
    getTrackAll: ctrlWrapper(getTrackAll),
    getTrackById: ctrlWrapper(getTrackById),
    addTrack: ctrlWrapper(addTrack),
    updateTrackById: ctrlWrapper(updateTrackById),
    deleteTrackById: ctrlWrapper(deleteTrackById),
};