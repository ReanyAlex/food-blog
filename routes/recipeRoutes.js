const RecipesController = require('../controllers/recipes_controller');
const requireLogin = require('../middlewares/requireLogin');
const recipeDataManipulation = require('../middlewares/recipeDataManipulation');

module.exports = app => {
  app.post('/api/recipes', recipeDataManipulation, RecipesController.create);
  app.get('/api/recipes', RecipesController.index);
  app.put('/api/recipes/:id', recipeDataManipulation, RecipesController.edit);
  app.delete('/api/recipes/:id', RecipesController.delete);
};
