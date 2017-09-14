const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageInstructionSchema = new Schema({
  image: String,
  imageCaption: String
});

module.exports = imageInstructionSchema;
