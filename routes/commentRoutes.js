const CommentsController = require('../controllers/comments_controller');

module.exports = app => {
  app.post('/api/comments', CommentsController.create);
  app.get('/api/comments', CommentsController.index);
  // app.put('/api/ingredients/:id', IngredientsController.edit);
  // app.delete('/api/ingredients/:id', IngredientsController.delete);
};
