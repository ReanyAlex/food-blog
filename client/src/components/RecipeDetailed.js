import React, { Component } from 'react';
import Header from './Header';
import Comments from './Comments';

import '../stylesheets/recipeDetailed.css';

class RecipeDetailed extends Component {
  state = {
    _id: '',
    title: '',
    categories: [],
    image: '',
    description: '',
    ingredients: [],
    detailInstructions: '',
    imageInstructions: [],
    comments: []
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState.comments);
    if (prevState.comments === this.state.comments) {
      return;
    }
    console.log('update');
    // this.fetchRecipe();
  }

  componentDidMount() {
    this.fetchRecipeInfo();
  }

  fetchRecipeInfo() {
    const that = this;
    const id = this.props.match.params.id;
    fetch(`/api/detailed_recipes/${id}`)
      .then(res => res.json())
      .then(function(json) {
        // console.log(json.recipe[0]);
        // console.log(json.comments);
        const {
          _id,
          title,
          categories,
          image,
          description,
          ingredients,
          detailInstructions,
          imageInstructions
        } = json.recipe[0];
        that.setState({
          _id,
          title,
          categories,
          image,
          description,
          ingredients,
          detailInstructions,
          imageInstructions,
          comments: json.comments
        });
      });
  }

  renderCatagories() {
    return this.state.categories.map((category, i) => {
      if (i === this.state.categories.length - 1) {
        return <span key={category}>{category}</span>;
      }
      return <span key={category}>{category},</span>;
    });
  }

  renderImageInstructions() {
    return this.state.imageInstructions.map(instruction => {
      return (
        <div key={instruction._id}>
          <figure>
            <img
              className="recipeDetailed-image-instruction"
              src={process.env.PUBLIC_URL + `/images/${instruction.image}.jpg`}
              alt="cooking instruction"
            />
            <p className="recipeDetailed-image-caption">
              {instruction.imageCaption}
            </p>
          </figure>
        </div>
      );
    });
  }

  renderIngredients() {
    return this.state.ingredients.map(ingredient => {
      // console.log(ingredient);
      return (
        <li key={ingredient._id}>
          <span>{ingredient.amount} </span>
          <span>{ingredient.measurment} </span>
          <span>{ingredient.item}</span>
        </li>
      );
    });
  }

  renderInstructions() {
    const instructions = Array.from(this.state.detailInstructions);
    return (
      <ol>
        {instructions.map(instruction => {
          return <li key={instruction}>{instruction}</li>;
        })}
      </ol>
    );
  }

  newComment() {
    this.fetchRecipeInfo();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1 className="recipeDetailed-title">{this.state.title}</h1>
          <div className="recipeDetailed-catagories">
            Catagories: [ {this.renderCatagories()} ]
          </div>

          <h3 className="recipeDetailed-description">
            {this.state.description}
          </h3>
          <img
            className="recipeDetailed-image"
            src={process.env.PUBLIC_URL + `/images/${this.state.image}.jpg`}
            alt={this.state.title}
          />
          <div className="recipeDetailed-instructions-container">
            <h4 className="recipeDetailed-instructions-header">Ingredients</h4>
            <ul className="recipeDetailed-ingredients">
              {this.renderIngredients()}
            </ul>
            <h4 className="recipeDetailed-instructions-header">Instructions</h4>
            {this.renderInstructions()}
          </div>
          {this.renderImageInstructions()}
          <Comments
            newComment={() => this.newComment()}
            comments={this.state.comments}
            recipeId={this.state._id}
          />
        </div>
      </div>
    );
  }
}

export default RecipeDetailed;
