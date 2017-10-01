const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  recipeId: String,
  author: String,
  comment: String,
  dateCreated: Date
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;
