const mongoose = require('mongoose');
const Ingredient = mongoose.model('ingredient');

module.exports = app => {
  app.get('/api/ingredients/:search?', async (req, res) => {
    // console.log('ingredients fetch');
    const ingredients = await Ingredient.find({ name: new RegExp(req.params.search, 'i') }).sort({ name: 1 });
    // console.log(ingredients);
    await res.send(ingredients);
  });

  // app.get('/api/detailed_recipes/:id', async (req, res) => {
  //   const recipe = await Recipe.find({ _id: req.params.id });
  //   const comments = await Comment.find({ recipeId: req.params.id });
  //   const recipeObject = { recipe: recipe, comments: comments };
  //   await res.send(recipeObject);
  // });

  // app.post('/api/comments/:recipeId', async (req, res) => {
  //   const newComment = await new Comment({ ...req.body, dateCreated: Date.now() });
  //   // await console.log(newComment);
  //   try {
  //     await newComment.save();
  //   } catch (err) {
  //     res.status(422).send(err);
  //   }
  // });
};
