const mongoose = require('mongoose');
const { Schema } = mongoose;
const ImageInstructionSchema = require('./ImageInstruction');
const IngredientSchema = require('./Ingredient');

const recipeSchema = new Schema({
  title: String,
  categories: [String],
  image: String,
  description: String,
  ingredients: [IngredientSchema],
  detailedInstructions: [String],
  imageInstructions: [ImageInstructionSchema],
  dateCreated: Date
});

mongoose.model('recipes', recipeSchema);
