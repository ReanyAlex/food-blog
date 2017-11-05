const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/recipe/Recipe');
require('./models/Ingredient');
require('./models/Comment');

require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds133104.mlab.com:33104/food-blog-dev');

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// require('./routes/newRecipeRoutes')(app);
require('./routes/recipeRoutes')(app);
require('./routes/ingredientRoutes')(app);
require('./routes/commentRoutes')(app);

// added
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
//-----------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
