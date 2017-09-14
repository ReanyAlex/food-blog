const keys = require('../config/keys');

module.exports = (req, res, next) => {
  //it should only allow my google id
  if (req.body.id !== keys.googleID) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};
