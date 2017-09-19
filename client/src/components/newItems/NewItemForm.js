import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Span, Input, TextArea } from '../../stylesheets/newitems/newItemForm';

const FORMFIELD = {};

FORMFIELD.RECIPES = [
  { label: 'Title', type: 'text', name: 'title' },
  { label: 'Categories', type: 'text', name: 'categories' },
  { label: 'Image', type: 'text', name: 'image' },
  { label: 'Description', type: 'textarea', name: 'description' },
  { label: 'Ingredients', type: 'textarea', name: 'ingredients' },
  { label: 'Detailed Instructions', type: 'textarea', name: 'detailedInstructions' },
  { label: 'Image Instructions', type: 'textarea', name: 'imageInstructions' }
];

FORMFIELD.INGREDIENTS = [
  { label: 'Name', type: 'text', name: 'name' },
  { label: 'Image', type: 'text', name: 'image' },
  { label: 'Description', type: 'text', name: 'description' }
];

class NewRecipeForm extends Component {
  renderForms() {
    let path = this.props.path === 'recipe' ? 'RECIPES' : 'INGREDIENTS';
    return FORMFIELD[path].map(form => {
      if (form.type === 'text') {
        return (
          <Label key={form.label} htmlFor={form.label}>
            <Span>{form.label}:</Span>
            <Input
              type={form.type}
              name={form.name}
              id={form.name}
              value={this.props.values[form.name]}
              onChange={event => this.props.handleChange(event)}
            />
          </Label>
        );
      } else {
        return (
          <Label key={form.label} htmlFor={form.label}>
            <Span>{form.label.split(' ').join('\n')}:</Span>
            <TextArea
              rows="8"
              cols="40"
              name={form.name}
              value={this.props.values[form.name]}
              onChange={event => this.props.handleChange(event)}
            />
          </Label>
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
            <Link to="/">{this.props.values.edit ? `Submit Edit` : 'Submit'}</Link>
          </button>
        </form>
        <a href="/api/logout">Logout</a>
        {this.props.values.edit ? (
          <Button className="btn btn-danger" onClick={this.props.handleDelete}>
            <Link to="/recipes">DELETE</Link>
          </Button>
        ) : (
          'no delete button'
        )}
      </div>
    );
  }
}

export default NewRecipeForm;
