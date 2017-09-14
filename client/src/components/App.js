import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../stylesheets/app.css';

import Landing from './Landing';
import Recipes from './Recipes';
import NewRecipe from './NewRecipe';
import RecipeDetailed from './RecipeDetailed';
import About from './About';
import Ingredients from './Ingredients';

class App extends Component {
  state = {
    search: ''
  };

  componentDidMount() {
    this.props.fetchUser();
  }

  searchParam(search) {
    this.setState({ search });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/:title/:id" component={RecipeDetailed} />
          <Route exact path="/newrecipe" component={NewRecipe} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ingredients" component={Ingredients} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
