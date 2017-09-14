import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
// import axios from 'axios';
import '../stylesheets/newRecipe.css';

class NewRecipe extends Component {
  state = {
    title: '',
    categories: '',
    image: '',
    description: '',
    ingredients: '',
    detailInstructions: '',
    imageInstructions: '',
    id: ''
  };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;

    this.setState(state);
    this.setState({ id: this.props.auth.googleId });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log({ ...this.state });

    fetch('/api/newrecipe', {
      method: 'POST',
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
          <h3>
            {this.props.auth ? (
              `logged in as
            ${this.props.auth.googleId}`
            ) : (
              'not logged in'
            )}
          </h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">
              <span>Title:</span>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="title">
              <span>Categories:</span>
              <input
                type="text"
                name="categories"
                id="categories"
                value={this.state.categories}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="image">
              <span>Image:</span>
              <input
                type="text"
                name="image"
                id="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="description">
              <span>Description:</span>
              <textarea
                rows="8"
                cols="40"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="ingredients">
              <span>Ingedients:</span>
              <textarea
                rows="8"
                cols="40"
                htmlFor="ingredients"
                name="ingredients"
                value={this.state.ingredients}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="detailInstructions">
              <span>
                Detailed <br />Instructions:
              </span>
              <textarea
                rows="8"
                cols="40"
                htmlFor="detailInstructions"
                name="detailInstructions"
                value={this.state.detailInstructions}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="imageInstructions">
              <span>
                Image <br />Instructions:
              </span>
              <textarea
                rows="8"
                cols="40"
                htmlFor="imageInstructions"
                name="imageInstructions"
                value={this.state.imageInstructions}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <a href="/api/logout">Logout</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NewRecipe);
