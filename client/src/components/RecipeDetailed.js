import React, { Component } from 'react';
import Header from './Header';
import '../stylesheets/recipeDetailed.css';

class RecipeDetailed extends Component {
  state = {
    title: '',
    categories: [],
    image: '',
    description: '',
    ingredients: [],
    detailInstructions: '',
    imageInstructions: []
  };

  componentWillUnmount() {
    console.log('unmount');
  }

  componentDidMount() {
    const that = this;
    const id = this.props.match.params.id;
    fetch(`/api/detailed_recipes/${id}`)
      .then(res => res.json())
      .then(function(json) {
        const {
          title,
          categories,
          image,
          description,
          ingredients,
          detailInstructions,
          imageInstructions
        } = json[0];
        that.setState({
          title,
          categories,
          image,
          description,
          ingredients,
          detailInstructions,
          imageInstructions
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
    console.log(Array.from(this.state.detailInstructions));
    const instructions = Array.from(this.state.detailInstructions);
    return (
      <ol>
        {instructions.map(instruction => {
          return <li key={instruction}>{instruction}</li>;
        })}
      </ol>
    );
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
        </div>
      </div>
    );
  }
}

export default RecipeDetailed;
