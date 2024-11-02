const express = require('express');
const cors = require('cors');
// const logger = require('morgan'); //print information about request to console
// search .env

// add data to environment variebles from .env file
require('dotenv').config();

// import routers
const trackRouter = require('./routes/api/track');
// const authRouter = require('./routes/api/auth');

// create server 'pills'
const track = express();

track.use(cors());
track.use(express.json());
track.use(express.static('public'));

//on each get typeof '/api/track' go to 'trackRouter'
// shop.use('/api/auth', authRouter);
track.use('/api/track', trackRouter);

track.use((req, res) => {
    res.status(404).json({message: 'Not found'});
});

// universal error hundler
track.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({
      message,
    });
});
  
module.exports = track;