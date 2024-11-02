const {Schema, model} = require('mongoose');

const { handleMongooseError } = require("../helpers");
// const { boolean } = require('joi');

// add mongoose schem
const trackSchem = new Schema({

    _id: {
        type: String,
        required: [true, '_id is required'],
    },

    fuel: {
        type: String,
        required: [false],
    },

    refuel_liters: {
        type: String,
        required: [false],
    },

    km_day: {
        type: String,
        required: [false],
    },

    liters_day: {
        type: String,
        required: [false],
    },

    date: {
        type: String,
        required: [true, 'date is required'],
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user', // collection name
        require: true,
    },

}, {versionKey: false, timestamps: true,});

trackSchem.post("save", handleMongooseError);

// create model on 'prescriptionSchem' base
const Track = model('track', trackSchem);

module.exports = Track;