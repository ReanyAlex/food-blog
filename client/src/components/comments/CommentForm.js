import React, { Component } from 'react';

// styled-components keeped in a seperate file
import {
  Form,
  InputContainer,
  AuthorInput,
  CommentInput,
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
        <Button
          // className="comment-button"
          onClick={() => this.setState({ newCommentForm: true })}
        >
          Leave a Comment
        </Button>
      );
    }

    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <InputContainer>
          <label htmlFor="author">
            <span>Your Name:</span>
            <AuthorInput type="text" name="author" id="author" />
          </label>
          <label htmlFor="comment">
            <span>Comment:</span>
            <CommentInput rows="3" cols="20" name="comment" id="comment" />
          </label>
        </InputContainer>
        <Button onClick={event => this.cancelForm(event)}>Cancel</Button>
        <SubmitInput type="submit" />
      </Form>
    );
  }

  render() {
    return this.renderCommentForm();
  }
}

export default CommentForm;
