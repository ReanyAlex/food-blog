import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Path from './Path';
import RecipeDetailed from './recipeDetailed/RecipeDetailed';
import NewItem from './newItems/NewItem';
import ItemList from './ItemList';
import About from './About';

require('../stylesheets/app.css');

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={Path(About)} />
          <Route path="/recipes" component={Path(ItemList)} />
          <Route path="/ingredients" component={Path(ItemList)} />
          <Route exact path="/new/:path" component={NewItem} />
          <Route exact path="/:title/:id" component={RecipeDetailed} />
          <Route exact path="/:title/:id/:edit/:path" component={NewItem} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
