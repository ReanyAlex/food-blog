const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  amount: Number,
  measurement: String,
  item: String
});

module.exports = ingredientSchema;
