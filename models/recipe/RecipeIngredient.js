const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeIngredientSchema = new Schema({
  amount: Number,
  measurement: String,
  item: String
});

module.exports = RecipeIngredientSchema;
