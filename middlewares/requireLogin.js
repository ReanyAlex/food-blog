const keys = require('../config/keys');

module.exports = (req, res, next) => {
  //it should only allow a Specific ID
  if (req.body.id !== keys.ID) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};
