const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Recipe = mongoose.model('recipes');

module.exports = app => {
  app.post('/api/newrecipe', requireLogin, async (req, res) => {
    let {
      title,
      categories,
      image,
      description,
      ingredients,
      detailedInstructions,
      imageInstructions
    } = req.body;

    categories = categories.split(',');

    ingredients = ingredients.split(', ').map(ingredient => ({
      amount: ingredient.split(' ')[0],
      measurement: ingredient.split(' ')[1],
      item: ingredient
        .split(' ')
        .splice(2)
        .join(' ')
    }));

    imageInstructions = imageInstructions.split('_').map(instruction => ({
      image: instruction.split(',')[0],
      imageCaption: instruction.split(',')[1]
    }));

    detailedInstructions = detailedInstructions.split('\n');

    const recipe = new Recipe({
      title,
      categories,
      image,
      description,
      ingredients,
      detailedInstructions,
      imageInstructions,
      dateCreated: Date.now()
    });

    // await console.log(recipe);
    try {
      await recipe.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put('/api/edit/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.body._id, (err, recipe) => {
      // Handle any possible database errors
      if (err) {
        res.status(500).send(err);
      }
      return recipe;
    });
    console.log('Updating recipe');
    //------------
    recipe.title = req.body.title;
    recipe.categories = req.body.categories;
    recipe.image = req.body.image;
    recipe.description = req.body.description;

    recipe.ingredients = req.body.ingredients.split(', ').map(ingredient => ({
      amount: ingredient.split(' ')[0],
      measurement: ingredient.split(' ')[1],
      item: ingredient
        .split(' ')
        .splice(2)
        .join(' ')
    }));
    recipe.detailedInstructions = req.body.detailedInstructions.split('\n');
    recipe.imageInstructions = req.body.imageInstructions
      .split('_')
      .map(instruction => ({
        image: instruction.split(',')[0],
        imageCaption: instruction.split(',')[1]
      }));

    recipe.dateCreated = req.body.dateCreated;

    await console.log(recipe);
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
