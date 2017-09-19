import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import NewItemForm from './NewItemForm';

import { Container } from '../../stylesheets/newitems/newItemStyled';

class NewItem extends Component {
  state = {
    title: '',
    categories: '',
    image: '',
    description: '',
    ingredients: '',
    detailedInstructions: '',
    imageInstructions: '',
    id: '',
    path: '',
    edit: false,
    name: ''
  };

  //------------------EDIT MODE -----------------------------
  componentDidMount() {
    if (this.props.match.params.edit === 'edit') {
      this.setState({ edit: true });
      this.fetchData(this.props.match.params.path);
    }

    this.setState({ path: this.props.match.params.path });
  }

  recipeDataManipulation(recipe) {
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

    return recipe;
  }

  //need to update to edit ingredients
  fetchData(path) {
    const that = this;
    const id = this.props.match.params.id;
    const url = `/api/detailed_${path}/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(function(json) {
        if (path === 'recipe') {
          //Manipulate the fetched recipe data into displayable
          //form to make editing easier
          const recipe = that.recipeDataManipulation(json.recipe[0]);

          //destructed incoming object keys match the state objects
          that.setState({ ...recipe, comments: json.comments });
        } else if (path === 'ingredient') {
          that.setState({ ...json[0] });
        }
      });
  }

  //DELETE ------------------

  handleDelete() {
    // console.log('Delete');
    fetch(`/api/delete/${this.state._id}/${this.state.path}`, {
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

    this.state.edit ? (url = `/api/edit/${this.state.path}/${this.state._id}`) : (url = `/api/new${this.state.path}`);

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
        <Container>
          <h3>
            {this.props.auth
              ? `logged in as
            ${this.props.auth[process.env.REACT_APP_KEY_NAME]}`
              : 'not logged in'}
          </h3>
          <h3>{this.state.edit ? `Edit Mode` : 'Not in Edit Mode'}</h3>
          <NewItemForm
            path={this.state.path}
            values={this.state}
            handleSubmit={event => this.handleSubmit(event)}
            handleChange={event => this.handleChange(event)}
            handleDelete={() => this.handleDelete()}
          />
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NewItem);
