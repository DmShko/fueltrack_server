// import model
const Track = require('../models/track');
const User = require('../models/user');
const {ctrlWrapper } = require("../helpers");

const getCollaborates = async (req, res) => {

    const { id } = req.params;

    const collabs = await User.find({ bossId: `${id}` });
  
    res.status(200).json(collabs);
  
};

const getCollabTracks = async (req, res) => {

    const owner  = req.get('x-owner-id');

    const collabs = await Track.find({ owner: `${owner}`});

    res.status(200).json(collabs);
  
};

module.exports = {
    
    getCollaborates: ctrlWrapper(getCollaborates),
    getCollabTracks: ctrlWrapper(getCollabTracks),
  
};