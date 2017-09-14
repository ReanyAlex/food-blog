const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');
const Recipe = mongoose.model('recipes');

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
    await res.send(recipe);
  });
};
