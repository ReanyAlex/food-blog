const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeIngredientSchema = new Schema({
  amount: Number,
  measurement: String,
  item: String
});

module.exports = recipeIngredientSchema;
