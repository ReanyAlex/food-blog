const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const recipeDataManipulation = require('../middlewares/recipeDataManipulation');

const Recipe = mongoose.model('recipes');
const Ingredient = mongoose.model('ingredient');

module.exports = app => {
  app.post('/api/newingredient', requireLogin, async (req, res) => {
    // console.log('posting new ingredient');
    // console.log(req.body);

    const ingredientObj = req.body;
    const { image, description, id, path, edit, name } = ingredientObj;

    const ingredient = new Ingredient({ image, description, id, path, edit, name, dateCreated: Date.now() });
    // await console.log('final', ingredient);
    try {
      await ingredient.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/newrecipe', requireLogin, recipeDataManipulation, async (req, res) => {
    //incoming req.body data minipulated to be stored in
    //mongo Schema by recipeDataManipulation

    const recipeObj = req.body;

    const {
      title,
      categories,
      image,
      description,
      ingredients,
      detailedInstructions,
      imageInstructions,
      id,
      path,
      edit
    } = recipeObj;

    const recipe = new Recipe({
      title,
      categories,
      image,
      description,
      ingredients,
      detailedInstructions,
      imageInstructions,
      id,
      path,
      edit,
      dateCreated: Date.now()
    });

    // await console.log('final', recipe);
    try {
      await recipe.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put('/api/edit/recipe/:id', requireLogin, recipeDataManipulation, async (req, res) => {
    console.log('recipe edit');
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

  app.put('/api/edit/ingredient/:id', async (req, res) => {
    // console.log('ingredient edit');

    const ingredient = await Ingredient.findById(req.body._id, (err, ingredient) => {
      // Handle any possible database errors
      if (err) {
        res.status(500).send(err);
      }
      return ingredient;
    });
    //ingredient object updated from the req.body
    ingredient.image = await req.body.image;
    ingredient.description = await req.body.description;
    ingredient.name = await req.body.name;
    // await console.log('ingredient', ingredient);
    try {
      await ingredient.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete('/api/delete/:id/:path', (req, res) => {
    if (req.params.path === 'recipe') {
      Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
        let response = {
          message: 'Recipe successfully deleted',
          id: recipe._id
        };
        res.status(200).send(response);
      });
    } else {
      Ingredient.findByIdAndRemove(req.params.id, (err, ingredient) => {
        let response = {
          message: 'Ingredient successfully deleted',
          id: ingredient._id
        };
        res.status(200).send(response);
      });
    }
  });
};
