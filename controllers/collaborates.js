// import model
const User = require('../models/user');
const {ctrlWrapper } = require("../helpers");

const getCollaborates = async (req, res) => {

    const { id } = req.params;

    const collabs = await User.find({ bossId: `${id}` });
  
    res.status(200).json(collabs);
  
};

module.exports = {
    
    getCollaborates: ctrlWrapper(getCollaborates),
  
};