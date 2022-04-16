const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name: String,
    data:  { type: Number, set: function (v) { return Math.round(v) ;}},
    status: Boolean
    });

deviceSchema.set('toObject', { versionKey: false });

const deviceModel = mongoose.model("Device", deviceSchema);

module.exports = deviceModel;
