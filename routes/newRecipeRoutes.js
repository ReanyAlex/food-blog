const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const recipeDataManipulation = require('../middlewares/recipeDataManipulation');

const Recipe = mongoose.model('recipes');
const Ingredient = mongoose.model('ingredient');

module.exports = app => {
  app.post('/api/newingredient', requireLogin, async (req, res) => {
    console.log('posting new ingredient');
    // console.log(req.body);
    const ingredient = new Ingredient({ ...req.body, dateCreated: Date.now() });
    await console.log('final', ingredient);
    try {
      await ingredient.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/newrecipe', requireLogin, recipeDataManipulation, async (req, res) => {
    //incoming req.body data minipulated to be stored in
    //mongo Schema by recipeDataManipulation
    const recipe = new Recipe({ ...req.body, dateCreated: Date.now() });

    // await console.log('final', recipe);
    try {
      await recipe.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put('/api/edit/recipe/:id', requireLogin, recipeDataManipulation, async (req, res) => {
    //incoming req.body data minipulated to be stored in
    //mongo Schema by recipeDataManipulation
    const recipe = await Recipe.findById(req.body._id, (err, recipe) => {
      // Handle any possible database errors
      if (err) {
        res.status(500).send(err);
      }
      return recipe;
    });
    //recipe object updated from the req.body
    recipe.title = await req.body.title;
    recipe.categories = await req.body.categories;
    recipe.image = await req.body.image;
    recipe.description = await req.body.description;
    recipe.ingredients = await req.body.ingredients;
    recipe.detailedInstructions = await req.body.detailedInstructions;
    recipe.imageInstructions = await req.body.imageInstructions;
    recipe.dateCreated = await req.body.dateCreated;
    // await console.log('recipe', recipe);
    try {
      await recipe.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete('/api/delete/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
      // console.log(recipe);
      let response = {
        message: 'Recipe successfully deleted',
        id: recipe._id
      };
      res.status(200).send(response);
    });
  });
};
