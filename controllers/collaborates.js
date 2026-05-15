// import model
const Track = require('../models/track');
const User = require('../models/user');
const {ctrlWrapper } = require("../helpers");

const getCollaborates = async (req, res) => {

    const { id } = req.params;

    const collabs = await User.find({ bossId: `${id}` });

    if (collabs === null) {
      throw HttpError(404, "Not found");
    }
  
    res.status(200).json(collabs);
  
};

const getCollabTracks = async (req, res) => {

    const owner  = req.get('x-owner-id');

    const collabs = await Track.find({ owner: `${owner}`});

    if (collabs === null) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(collabs);
  
};

const deleteCollabTracks = async (req, res) => {

    const { id } = req.query;
    const { _id } = req.user;

    const collabName = await User.findOne({ bossId: `${_id}`, _id: `${id}` });

    const collabs = await User.findOneAndDelete({ name: `${collabName.name}` });
    
     if (collabName === null || collabs === null) {
      throw HttpError(404, "Not found");
    }
  
    res.status(200).json({ message: `Track ${collabName.name} deleted` });
  
};

module.exports = {
    
    getCollaborates: ctrlWrapper(getCollaborates),
    getCollabTracks: ctrlWrapper(getCollabTracks),
    deleteCollabTracks: ctrlWrapper(deleteCollabTracks),
};