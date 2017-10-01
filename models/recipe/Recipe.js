const mongoose = require('mongoose');
const { Schema } = mongoose;
const ImageInstructionSchema = require('./ImageInstruction');
const RecipeIngredientSchema = require('./RecipeIngredient');

const RecipeSchema = new Schema({
  title: String,
  categories: [String],
  image: String,
  description: String,
  ingredients: [RecipeIngredientSchema],
  detailedInstructions: [String],
  imageInstructions: [ImageInstructionSchema],
  dateCreated: Date
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;
