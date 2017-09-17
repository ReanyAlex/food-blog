import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import NewIngredientForm from './NewIngredientForm';

// import '../../stylesheets/newRecipe.css';

class NewIngredient extends Component {
  state = {
    name: '',
    image: '',
    description: ''
  };

  //------------------EDIT MODE -----------------------------
  componentDidMount() {}

  fetchRecipeInfo() {}

  //DELETE ------------------

  handleDelete() {}

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

    this.state.edit ? (url = `/api/edit/ingredient/${this.state._id}`) : (url = '/api/newingredient');

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
    console.log(this.state);
    return (
      <div>
        <Header />
        <div className="container">
          <h3>
            {this.props.auth
              ? `logged in as
            ${this.props.auth[process.env.REACT_APP_KEY_NAME]}`
              : 'not logged in'}
          </h3>
          <h3>{this.state.edit ? `Edit Mode` : 'Not in Edit Mode'}</h3>
          <NewIngredientForm
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

export default connect(mapStateToProps)(NewIngredient);
