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
      detailInstructions,
      imageInstructions
    } = req.body;

    categories = categories.split(',');

    ingredients = ingredients.split(', ').map(ingredient => ({
      amount: ingredient.split(' ')[0],
      measurment: ingredient.split(' ')[1],
      item: ingredient
        .split(' ')
        .splice(2)
        .join(' ')
    }));

    imageInstructions = imageInstructions.split('_').map(instruction => ({
      image: instruction.split(',')[0],
      imageCaption: instruction.split(',')[1]
    }));

    detailInstructions = detailInstructions.split('\n');

    const recipe = new Recipe({
      title,
      categories,
      image,
      description,
      ingredients,
      detailInstructions,
      imageInstructions,
      dateCreated: Date.now()
    });

    await console.log(recipe);
    try {
      await recipe.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
