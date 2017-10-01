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

  fetchData(path) {
    const that = this;
    const name = this.props.match.params.title.toLowerCase();
    const url = `/api/${path}s?search=${name}`;

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        if (path === 'recipe') {
          //Manipulate the fetched recipe data into displayable
          //form to make editing easier
          const recipe = that.recipeDataManipulation(json[0]);

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
    const id = this.props.match.params.id;
    const url = `/api/${this.state.path}s/${id}`;
    fetch(url, {
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
    let headerBody = {};

    this.state.edit ? (method = `PUT`) : (method = 'POST');

    this.state.edit ? (url = `/api/${this.state.path}s/${this.state._id}`) : (url = `/api/${this.state.path}s`);

    if (this.state.path === 'ingredients') {
      const { name, image, description } = this.state;
      headerBody = { name, image, description };
    } else {
      const {
        title,
        categories,
        image,
        description,
        ingredients,
        detailedInstructions,
        imageInstructions
      } = this.state;

      headerBody = {
        title,
        categories,
        image,
        description,
        ingredients,
        detailedInstructions,
        imageInstructions
      };
    }

    fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(headerBody)
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
