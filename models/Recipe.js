const mongoose = require('mongoose');
const { Schema } = mongoose;
const ImageInstructionSchema = require('./imageInstruction');
const IngredientSchema = require('./Ingredient');

const recipeSchema = new Schema({
  title: String,
  categories: [String],
  image: String,
  description: String,
  ingredients: [IngredientSchema],
  detailInstructions: [String],
  imageInstructions: [ImageInstructionSchema],
  dateCreated: Date
});

mongoose.model('recipes', recipeSchema);
