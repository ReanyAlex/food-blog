const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  recipeId: String,
  author: String,
  comment: String,
  dateCreated: Date
});

mongoose.model('comments', commentSchema);
