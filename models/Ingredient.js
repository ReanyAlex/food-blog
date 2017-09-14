const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  amount: Number,
  measurment: String,
  item: String
});

module.exports = ingredientSchema;
