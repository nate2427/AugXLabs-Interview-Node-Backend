const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  title: String,
  path: String,
  liked: {
    type: Boolean,
    default: false,
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
