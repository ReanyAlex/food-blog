import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/recipeList.css';

class RecipeList extends Component {
  state = {
    recipes: [],
    search: '',
    displayIndex: 1
  };

  componentDidMount() {
    this.fetchRecipe();
    // console.log('mount');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState', prevState.search);
    if (prevState.search === this.state.search) {
      return;
    }
    // console.log('update');
    this.fetchRecipe();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.updateSearch(nextProps.search);
  // }

  renderRecipes() {
    let startingIndex = (this.state.displayIndex - 1) * 15;
    let endingIndex = this.state.displayIndex * 15;

    // console.log(this.state.recipes.slice(startingIndex, endingIndex));
    let recipesToBeDisplayed = this.state.recipes.slice(
      startingIndex,
      endingIndex
    );

    return recipesToBeDisplayed.map(recipe => {
      return (
        <div key={recipe._id} className="recipeBox col-sm-12 col-m-6 col-lg-4">
          <Link to={`/${recipe.title}/${recipe._id}`} className="recipe-link">
            <div className="recipe-img-container">
              <img
                className="recipe-img"
                src={process.env.PUBLIC_URL + `/images/${recipe.image}.jpg`}
                alt={recipe.title}
              />
            </div>
            <h4 className="recipe-title">{recipe.title}</h4>
          </Link>
        </div>
      );
    });
  }

  renderRecipePagination() {
    let indexes = this.state.recipes.length / 15;
    let paginationIndex = [];

    for (let i = 1; i < indexes + 1; i++) {
      paginationIndex.push(i);
    }

    return paginationIndex.map(index => {
      return (
        <span
          key={index + 'a'}
          className="recipeList-recipe-pagination"
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
          {this.renderRecipes()}
        </div>
        <div className="recipeList-recipe-pagination-div">
          {this.renderRecipePagination()}
        </div>
      </div>
    );
  }
}

export default RecipeList;
