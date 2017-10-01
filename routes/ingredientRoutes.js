const IngredientsController = require('../controllers/ingredients_controller');

module.exports = app => {
  app.post('/api/ingredients', IngredientsController.create);
  app.get('/api/ingredients', IngredientsController.index);
  app.put('/api/ingredients/:id', IngredientsController.edit);
  app.delete('/api/ingredients/:id', IngredientsController.delete);
};
