const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name: String,
    data:  { type: mongoose.Types.Decimal128, set: function (v) { return Math.round(v) ;}},
    status: Boolean
    }, { versionKey: false });

//deviceSchema.set('toObject', { versionKey: false });

const deviceModel = mongoose.model("Device", deviceSchema);

module.exports = deviceModel;
