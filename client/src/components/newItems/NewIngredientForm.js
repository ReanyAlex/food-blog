import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FORMFIELD = [
  { label: 'Name', name: 'name' },
  { label: 'Image', name: 'image' },
  { label: 'Description', name: 'description' }
];

class NewIngredientForm extends Component {
  renderForms() {
    return FORMFIELD.map(form => {
      return (
        <label key={form.label} htmlFor={form.label}>
          <span>{form.label}:</span>
          <input
            type="text"
            name={form.name}
            id={form.name}
            value={this.props.values[form.name]}
            onChange={event => this.props.handleChange(event)}
          />
        </label>
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.renderForms()}
          <button onClick={event => this.props.handleSubmit(event)}>
            {/* Commented out to allow to easily add a bunch of dummy recipes  */}
            {/* <Link to={`/${this.props.values.title}/${this.props.values._id}`}> */}
            {this.props.values.edit ? `Submit Edit` : 'Submit'}
            {/* </Link> */}
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

export default NewIngredientForm;
