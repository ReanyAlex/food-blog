import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
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
    imageInstructions: [],
    comments: []
  };

  componentDidMount() {
    this.fetchRecipeInfo();
  }

  fetchRecipeInfo() {
    const that = this;
    const id = this.props.match.params.id;

    fetch(`/api/detailed_recipe/${id}`)
      .then(res => res.json())
      .then(function(json) {
        //derstructed incoming object keys match the state objects
        that.setState({ ...json.recipe[0], comments: json.comments });
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

  /*when a new comment is added this tells the RecipeDetailed component
  that a change has been made to its child and it should update its current information*/
  newComment() {
    this.fetchRecipeInfo();
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

    return (
      <div>
        <Header />
        {this.renderAdmin()}
        <RecipeContainer>
          <TitleHeader>{this.state.title}</TitleHeader>
          <CatagoriesHeader>Catagories: [ {this.renderCatagories()} ]</CatagoriesHeader>
          <DescriptionHeader>{this.state.description}</DescriptionHeader>
          <Image src={process.env.PUBLIC_URL + `${imagePath}/${this.state.image}.jpg`} alt={this.state.title} />
          <InstructionsContainer>
            <RecipeIngredients ingredients={this.state.ingredients} />
            <RecipeInstructions detailedInstructions={this.state.detailedInstructions} />
          </InstructionsContainer>
          <RecipeDetailedImages imageInstructions={this.state.imageInstructions} imagePath={imagePath} />
          <Comments newComment={() => this.newComment()} comments={this.state.comments} recipeId={this.state._id} />
        </RecipeContainer>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(RecipeDetailed));
