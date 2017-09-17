import React, { Component } from 'react';
import RecipeListBox from './RecipeListBox';
import IngredientBox from './IngredientBox';
import Search from './Search';
import Pagination from './Pagination';

import '../stylesheets/recipeList.css';
import '../stylesheets/ingredients.css';

class RecipeList extends Component {
  state = {
    recipes: [],
    ingredients: [],
    search: '',
    displayIndex: 1,
    path: ''
  };

  //initial data fetch based on path
  componentDidMount() {
    this.setState({ path: this.props.match });
    this.fetchData(this.props.match);
  }
  //data fetch when click on a new link in header
  componentWillReceiveProps(nextProps) {
    this.setState({ path: nextProps.match });
    this.fetchData(nextProps.match);
  }
  //data fetch when type in the searcg field
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search === this.state.search) {
      return;
    }
    this.fetchData(this.props.match);
  }

  // the updateIndex functions is passed as a prop to the pagination component
  updateIndex(index) {
    this.setState({ displayIndex: index });
  }
  // the updateSearch functions is passed as a prop to the seatch component
  updateSearch(search) {
    this.setState({ search });
  }

  //fetch data depending on path match and search url
  //access through express either IngredientsSchema or RecipeSchema
  fetchData(path) {
    console.log(path);
    path = path.toLowerCase();
    console.log(path);
    const that = this;
    let url = `/api/${path}/${this.state.search}`;

    fetch(url)
      .then(res => res.json())
      .then(function(json) {
        that.setState({ [path]: json });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="recipeList-container">
        <div className="recipeList-container-header">
          <h3 className="recipeList-header-title col-m-12 col-lg-6">
            {this.state.path === 'recipes' ? 'Newly added Recipes:' : 'Ingredients:'}
          </h3>
          <Search updateSearch={this.updateSearch.bind(this)} />
        </div>
        {this.state.path === 'recipes' ? (
          <RecipeListBox displayIndex={this.state.displayIndex} recipes={this.state.recipes} />
        ) : (
          <IngredientBox ingredients={this.state.ingredients} />
        )}
        {this.state.path === 'recipes' ? (
          <Pagination
            updateIndex={this.updateIndex.bind(this)}
            recipes={this.state.recipes}
            displayIndex={this.state.displayIndex}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default RecipeList;
