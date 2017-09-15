const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');
const Recipe = mongoose.model('recipes');
const Comment = mongoose.model('comments');

module.exports = app => {
  app.get('/api/recipes/:search?', async (req, res) => {
    const recipe = await Recipe.find({
      title: new RegExp(req.params.search, 'i')
    }).sort({ dateCreated: -1 });
    // await console.log(recipe);
    await res.send(recipe);
  });

  app.get('/api/detailed_recipes/:id', async (req, res) => {
    const recipe = await Recipe.find({ _id: req.params.id });
    const comments = await Comment.find({ recipeId: req.params.id });
    await console.log(comments);
    const recipeObject = { recipe: recipe, comments: comments };
    await res.send(recipeObject);
  });

  app.post('/api/comments/:recipeId', async (req, res) => {
    const { recipeId, author, comment } = req.body;
    const newComment = await new Comment({
      recipeId,
      author,
      comment,
      dateCreated: Date.now()
    });
    await console.log(newComment);
    try {
      await newComment.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
