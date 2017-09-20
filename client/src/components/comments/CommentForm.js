import React, { Component } from 'react';

// styled-components keeped in a seperate file
import {
  Form,
  InputContainer,
  Span,
  AuthorInput,
  CommentInput,
  Label,
  Button,
  SubmitInput
} from '../../stylesheets/comments/commentFormStyled';

class CommentForm extends Component {
  state = {
    newCommentForm: false
  };

  handleSubmit(event) {
    event.preventDefault();
    const recipeId = this.props.recipeId;
    const author = document.querySelector('#author').value;
    const comment = document.querySelector('#comment').value;

    const newComment = { recipeId, author, comment };

    let url = `/api/comments/:${recipeId}`;

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    });

    this.setState({ newCommentForm: false });
    this.props.newComment();
  }

  cancelForm(event) {
    event.preventDefault();
    this.setState({ newCommentForm: false });
  }

  renderCommentForm() {
    if (!this.state.newCommentForm) {
      return (
        <Button left onClick={() => this.setState({ newCommentForm: true })}>
          Leave a Comment
        </Button>
      );
    }

    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <InputContainer>
          <Label htmlFor="author">
            <Span>Your Name:</Span>
            <AuthorInput
              type="text"
              name="author"
              // id="author"
            />
          </Label>
          <Label htmlFor="comment">
            <Span>Comment:</Span>
            <CommentInput
              rows="3"
              cols="20"
              name="comment"
              // id="comment"
            />
          </Label>
        </InputContainer>
        <Button left onClick={event => this.cancelForm(event)}>
          Cancel
        </Button>
        <Button right>
          <SubmitInput type="submit" />
          Submit
        </Button>
      </Form>
    );
  }

  render() {
    return this.renderCommentForm();
  }
}

export default CommentForm;
