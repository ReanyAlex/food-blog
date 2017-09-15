import React, { Component } from 'react';
import RecipeDisplayBox from './RecipeDisplayBox';

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

  renderRecipePagination() {
    let indexes = this.state.recipes.length / 15;
    let paginationIndex = [];

    for (let i = 1; i < indexes + 1; i++) {
      paginationIndex.push(i);
    }

    return paginationIndex.map(index => {
      let classname = '';

      if (index === this.state.displayIndex) {
        classname = 'recipeList-recipe-pagination-current';
      }

      classname = 'recipeList-recipe-pagination';

      return (
        <span
          key={index + 'a'}
          className={classname}
          onClick={() => this.setState({ displayIndex: index })}
        >
          {index}
        </span>
      );
    });
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
          <RecipeDisplayBox
            displayIndex={this.state.displayIndex}
            recipes={this.state.recipes}
          />
        </div>
        <div className="recipeList-recipe-pagination-div">
          {this.renderRecipePagination()}
        </div>
      </div>
    );
  }
}

export default RecipeList;
