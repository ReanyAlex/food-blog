const mongoose = require('mongoose');
const { Schema } = mongoose;

const IngredientSchema = new Schema({
  name: String,
  image: String,
  description: String,
  dateCreated: Date
});

const Ingredient = mongoose.model('ingredient', IngredientSchema);

module.exports = Ingredient;
