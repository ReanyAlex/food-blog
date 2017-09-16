import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FORMFIELD = [
  { label: 'Title', type: 'text', name: 'title' },
  { label: 'Categories', type: 'text', name: 'categories' },
  { label: 'Image', type: 'text', name: 'image' },
  { label: 'Description', type: 'textarea', name: 'description' },
  { label: 'Ingredients', type: 'textarea', name: 'ingredients' },
  { label: 'Detailed Instructions', type: 'textarea', name: 'detailedInstructions' },
  { label: 'Image Instructions', type: 'textarea', name: 'imageInstructions' }
];

class NewRecipeForm extends Component {
  renderForms() {
    return FORMFIELD.map(form => {
      if (form.type === 'text') {
        return (
          <label key={form.label} htmlFor={form.label}>
            <span>{form.label}:</span>
            <input
              type={form.type}
              name={form.name}
              id={form.name}
              value={this.props.values[form.name]}
              onChange={event => this.props.handleChange(event)}
            />
          </label>
        );
      } else {
        return (
          //issue when
          <label key={form.label} htmlFor={form.label}>
            <span>{form.label.split(' ').join('\n')}:</span>
            <textarea
              className="form-ingredients"
              rows="8"
              cols="40"
              name={form.name}
              value={this.props.values[form.name]}
              // onCompositionStart={event => this.props.handleChange(event)}
              onChange={event => this.props.handleChange(event)}
            />
          </label>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.renderForms()}
          <button onClick={event => this.props.handleSubmit(event)}>
            {/*Commented out to allow to easily add a bunch of dummy recipes  */}
            {/* <Link to={`/${this.props.values.title}/${this.props.values._id}`}> */}
            {this.props.values.edit ? `Submit Edit` : 'Submit'} {/* </Link> */}
          </button>
        </form>
        <a href="/api/logout">Logout</a>
        {this.props.values.edit ? (
          <button className="btn btn-danger delete-button" onClick={this.props.handleDelete}>
            <Link to="/recipes">DELETE</Link>
          </button>
        ) : (
          'no delete button'
        )}
      </div>
    );
  }
}

export default NewRecipeForm;
