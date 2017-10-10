import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header';
import Comments from '../comments/Comments';
import RecipeIngredients from './RecipeDetailedIngredients';
import RecipeInstructions from './RecipeDetailedInstructions';
import RecipeDetailedImages from './RecipeDetailedImages';

import {
  RecipeContainer,
  TitleHeader,
  CatagoriesHeader,
  DescriptionHeader,
  Image,
  InstructionsContainer
} from '../../stylesheets/recipeDetailed/recipeDetailedStyled';

class RecipeDetailed extends Component {
  state = {
    _id: '',
    title: '',
    categories: [],
    image: '',
    description: '',
    ingredients: [],
    detailedInstructions: '',
    imageInstructions: []
  };

  componentDidMount() {
    this.fetchRecipeInfo();
  }

  fetchRecipeInfo() {
    const that = this;
    const { title } = this.props.match.params;
    const url = `/api/recipes?search=${title}`;
    axios.get(url).then(function(res) {
      //derstructed incoming object keys match the state objects
      that.setState({ ...res.data[0] });
    });
  }

  renderCatagories() {
    return this.state.categories.map((category, i) => {
      if (i === this.state.categories.length - 1) {
        return <span key={category + i}>{category}</span>;
      }
      return <span key={category + i}>{category}, </span>;
    });
  }

  renderAdmin() {
    if (!this.props.auth) {
      return;
    }
    if (process.env.REACT_APP_ID_KEY === this.props.auth[process.env.REACT_APP_KEY_NAME]) {
      return (
        <Link to={`/${this.state.title}/${this.state._id}/edit/recipe`}>
          <span>Edit</span>
        </Link>
      );
    }
  }

  render() {
    //formatted to allow access to image folder structure images/recipe_title/imageName.jpg
    let imagePath = `/images/${this.state.title.toLowerCase().replace(/ /g, '-')}`;
    const { title, description, image, ingredients, detailedInstructions, imageInstructions, _id } = this.state;

    return (
      <div>
        <Header />
        {this.renderAdmin()}
        <RecipeContainer>
          <TitleHeader>{title}</TitleHeader>
          <CatagoriesHeader>Catagories: [ {this.renderCatagories()} ]</CatagoriesHeader>
          <DescriptionHeader>{description}</DescriptionHeader>
          <Image src={`${imagePath}/${image}.jpg`} alt={title} />
          <InstructionsContainer>
            <RecipeIngredients ingredients={ingredients} />
            <RecipeInstructions detailedInstructions={detailedInstructions} />
          </InstructionsContainer>
          <RecipeDetailedImages imageInstructions={imageInstructions} imagePath={imagePath} />
          <Comments recipeId={_id} />
        </RecipeContainer>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(RecipeDetailed);
