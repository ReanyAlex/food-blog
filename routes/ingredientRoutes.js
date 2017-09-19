const mongoose = require('mongoose');
const Ingredient = mongoose.model('ingredient');

module.exports = app => {
  app.get('/api/ingredients/:search?', async (req, res) => {
    const ingredients = await Ingredient.find({ name: new RegExp(req.params.search, 'i') }).sort({ name: 1 });
    await res.send(ingredients);
  });

  app.get('/api/detailed_ingredient/:id', async (req, res) => {
    // console.log('edit route');
    const ingredient = await Ingredient.find({ _id: req.params.id });

    await res.send(ingredient);
  });
};
