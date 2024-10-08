const mongoose = require('mongoose');

const imageUplodeSchema = mongoose.Schema({
    image: {
        type: String,
    }
}, { timestamps: true });

const imageUplode = mongoose.model("imageUplode", imageUplodeSchema);

module.exports = imageUplode;