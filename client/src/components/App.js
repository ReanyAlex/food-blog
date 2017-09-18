import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// import '../stylesheets/app.css';

import Landing from './Landing';
import Path from './Path';
import RecipeDetailed from './recipeDetailed/RecipeDetailed';
import NewRecipe from './newItems/NewRecipe';
import NewIngredient from './newItems/NewIngredient';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/newrecipe" component={NewRecipe} />
          <Route exact path="/newingredient" component={NewIngredient} />
          <Route exact path="/:path" component={Path} />
          <Route exact path="/:title/:id" component={RecipeDetailed} />
          <Route exact path="/:title/:id/:edit" component={NewRecipe} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
