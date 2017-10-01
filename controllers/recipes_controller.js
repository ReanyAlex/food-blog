const Recipe = require('../models/recipe/Recipe');

module.exports = {
  create(req, res, next) {
    const recipesProps = req.body;
    recipesProps.date = new Date();
    console.log(recipesProps);
    Recipe.create(recipesProps)
      .then(recipes => res.send(recipes))
      .catch(next);
  },

  index(req, res, next) {
    const { search } = req.query;

    Recipe.find({ title: new RegExp(search, 'i') })
      .sort({ dateCreated: -1 })
      .then(recipes => {
        res.send(recipes);
      })
      .catch(next);
  },

  edit(req, res, next) {
    const id = req.params.id;
    const recipesProps = req.body;

    Recipe.findByIdAndUpdate(id, { $set: recipesProps })
      .then(() => Recipe.findById(id))
      .then(recipes => {
        res.send(recipes);
      })
      .catch(next);
  },

  delete(req, res, next) {
    const id = req.params.id;
    console.log(id);
    Recipe.findByIdAndRemove(id)
      .then(recipe => res.status(204).send(recipe))
      .catch(next);
  }
};
