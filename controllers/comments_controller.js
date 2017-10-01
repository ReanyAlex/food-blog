const Comment = require('../models/Comment');

module.exports = {
  create(req, res, next) {
    const commentProps = req.body;
    commentProps.dateCreated = Date.now();

    Comment.create(commentProps)
      .then(comment => res.send(comment))
      .catch(next);
  },

  index(req, res, next) {
    const { id } = req.query;

    Comment.find({ recipeId: id })
      .then(comments => {
        res.send(comments);
      })
      .catch(next);
  }
  //
  // edit(req, res, next) {
  //   const id = req.params.id;
  //   const commentProps = req.body;
  //
  //   Comment.findByIdAndUpdate(id, { $set: commentProps })
  //     .then(() => Comment.findById(id))
  //     .then(comment => res.send(comment))
  //     .catch(next);
  // },
  //
  // delete(req, res, next) {
  //   const id = req.params.id;
  //
  //   Comment.findByIdAndRemove(id)
  //     .then(comment => res.status(204).send(comment))
  //     .catch(next);
  // }
};
