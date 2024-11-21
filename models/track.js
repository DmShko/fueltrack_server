const {Schema, model} = require('mongoose');

const { handleMongooseError } = require("../helpers");
// const { boolean } = require('joi');

// add mongoose schem
const trackSchem = new Schema({

    _id: {
        type: String,
        required: [true, '_id is required'],
    },

    liters: {
        type: String,
        required: [false],
    },

    marck: {
        type: String,
        required: [false],
    },

    price: {
        type: String,
        required: [false],
    },

    km: {
        type: String,
        required: [false],
    },

    pay: {
        type: String,
        required: [false],
    },

    burn: {
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