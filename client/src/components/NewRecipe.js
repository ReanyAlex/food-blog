import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import NewRecipeForm from './NewRecipeForm';
// import axios from 'axios';
import '../stylesheets/newRecipe.css';

class NewRecipe extends Component {
  state = {
    title: '',
    categories: '',
    image: '',
    description: '',
    ingredients: '',
    detailedInstructions: '',
    imageInstructions: '',
    id: '',
    edit: false
  };

  //------------------EDIT MODE -----------------------------
  componentDidMount() {
    if (this.props.match.params.edit === 'edit') {
      this.setState({ edit: true });
      this.fetchRecipeInfo();
    }
  }

  fetchRecipeInfo() {
    const that = this;
    const id = this.props.match.params.id;

    fetch(`/api/detailed_recipes/${id}`)
      .then(res => res.json())
      .then(function(json) {
        //Manipulate the fetched recipe data into displayable
        //form to make editing easier
        const recipe = json.recipe[0];

        recipe.ingredients = Array.from(recipe.ingredients)
          .map(ingredient => {
            return `${ingredient.amount} ${ingredient.measurement} ${ingredient.item}`;
          })
          .join(' , ');

        recipe.imageInstructions = Array.from(recipe.imageInstructions)
          .map(instruction => {
            return `${instruction.image},${instruction.imageCaption}`;
          })
          .join('_');

        recipe.detailedInstructions = Array.from(recipe.detailedInstructions).join('\n');

        //derstructed incoming object keys match the state objects
        that.setState({ ...recipe, comments: json.comments });
      });
  }

  //DELETE ------------------

  handleDelete() {
    console.log('Delete');
    fetch(`/api/delete/${this.state._id}`, {
      method: 'DELETE'
    });
  }

  //------------------EDIT MODE -----------------------------

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;

    this.setState(state);
    this.setState({ id: this.props.auth[process.env.REACT_APP_KEY_NAME] });
  }

  handleSubmit(event) {
    event.preventDefault();
    let method = '';
    let url = '';

    this.state.edit ? (method = `PUT`) : (method = 'POST');

    this.state.edit ? (url = `/api/edit/${this.state._id}`) : (url = '/api/newrecipe');

    fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      //derstructed state object keys match the object to create a new recipe
      body: JSON.stringify({ ...this.state })
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h3>{this.props.auth[process.env.REACT_APP_KEY_NAME]}</h3>
          <h3>
            {this.props.auth
              ? `logged in as
            ${this.props.auth[process.env.REACT_APP_KEY_NAME]}`
              : 'not logged in'}
          </h3>
          <h3>{this.state.edit ? `Edit Mode` : 'Not in Edit Mode'}</h3>
          <NewRecipeForm
            values={this.state}
            handleSubmit={event => this.handleSubmit(event)}
            handleChange={event => this.handleChange(event)}
            handleDelete={() => this.handleDelete()}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NewRecipe);
