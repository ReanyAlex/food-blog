module.exports = (req, res, next) => {
  // console.log(typeof req.body.categories);
  // console.log('_________middleware_________');
  // console.log(req.body);

  if (typeof req.body.categories !== 'object') {
    req.body.categories = req.body.categories.split(',');
  }

  req.body.ingredients = req.body.ingredients.split(', ').map(ingredient => ({
    amount: ingredient.split(' ')[0],
    measurement: ingredient.split(' ')[1],
    item: ingredient
      .split(' ')
      .splice(2)
      .join(' ')
  }));

  req.body.imageInstructions = req.body.imageInstructions.split('_').map(instruction => ({
    image: instruction.split(',')[0],
    imageCaption: instruction.split(',')[1]
  }));

  req.body.detailedInstructions = req.body.detailedInstructions.split('\n');

  next();
};
