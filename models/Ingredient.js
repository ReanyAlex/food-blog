const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: String,
  image: String,
  description: String,
  dateCreated: Date
});

mongoose.model('ingredient', ingredientSchema);
