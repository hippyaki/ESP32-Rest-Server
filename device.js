const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name: String,
    data:  Number,
    status: Boolean
    }, { versionKey: false });

const deviceModel = mongoose.model("Device", deviceSchema);

module.exports = deviceModel;
