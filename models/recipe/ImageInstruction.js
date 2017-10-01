const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageInstructionSchema = new Schema({
  image: String,
  imageCaption: String
});

module.exports = ImageInstructionSchema;
