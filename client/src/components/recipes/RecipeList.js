import React, { Component } from 'react';
import RecipeListBox from './RecipeListBox';
import RecipeListPagination from './RecipeListPagination';

import '../../stylesheets/recipeList.css';

class RecipeList extends Component {
  state = {
    recipes: [],
    search: '',
    displayIndex: 1
  };

  componentDidMount() {
    this.fetchRecipe();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search === this.state.search) {
      return;
    }
    this.fetchRecipe();
  }
  // the updateIndex functions is passed as a prop to the pagination component
  updateIndex(index) {
    console.log(index);
    this.setState({ displayIndex: index });
  }

  updateSearch(search) {
    this.setState({ search });
    this.fetchRecipe();
  }

  fetchRecipe() {
    const that = this;
    fetch(`/api/recipes/${this.state.search}`)
      .then(res => res.json())
      .then(function(json) {
        that.setState({ recipes: json });
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
            Newly added Recipes
          </h3>
          <form
            className="recipeList-header-search form-inline  my-l-0 col-m-12 col-lg-6 "
            onSubmit={e => e.preventDefault()}
          >
            <input
              className="form-control recipeList-header-search-input"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={e => this.updateSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="recipeList-recipe-container">
          <RecipeListBox
            displayIndex={this.state.displayIndex}
            recipes={this.state.recipes}
          />
        </div>
        <div className="recipeList-recipe-pagination-div">
          <RecipeListPagination
            updateIndex={this.updateIndex.bind(this)}
            recipes={this.state.recipes}
            displayIndex={this.state.displayIndex}
          />
        </div>
      </div>
    );
  }
}

export default RecipeList;
