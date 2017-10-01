const Ingredient = require('../models/Ingredient');

module.exports = {
  create(req, res, next) {
    const ingredientProps = req.body;
    ingredientProps.date = new Date();

    Ingredient.create(ingredientProps)
      .then(ingredient => res.send(ingredient))
      .catch(next);
  },

  index(req, res, next) {
    const { search } = req.query;

    Ingredient.find({ name: new RegExp(search, 'i') })
      .then(ingredients => {
        res.send(ingredients);
      })
      .catch(next);
  },

  edit(req, res, next) {
    const id = req.params.id;
    const ingredientProps = req.body;

    Ingredient.findByIdAndUpdate(id, { $set: ingredientProps })
      .then(() => Ingredient.findById(id))
      .then(ingredient => res.send(ingredient))
      .catch(next);
  },

  delete(req, res, next) {
    const id = req.params.id;

    Ingredient.findByIdAndRemove(id)
      .then(ingredient => res.status(204).send(ingredient))
      .catch(next);
  }
};
