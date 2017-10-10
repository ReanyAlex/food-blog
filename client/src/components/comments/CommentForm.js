import React, { Component } from 'react';
import axios from 'axios';
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
    newCommentForm: false,
    author: '',
    comment: ''
  };

  handleSubmit(event) {
    event.preventDefault();
    const { recipeId } = this.props;
    const { author, comment } = this.state;
    const newComment = { recipeId, author, comment };

    let url = `/api/comments`;

    axios
      .post(url, newComment)
      .then(() => this.setState({ newCommentForm: false }))
      .then(this.props.refreshCommentList);

    this.setState({ author: '', comment: '' });
  }

  cancelForm(event) {
    event.preventDefault();
    this.setState({ newCommentForm: false });
  }

  renderCommentForm() {
    if (!this.state.newCommentForm) {
      return <Button onClick={() => this.setState({ newCommentForm: true })}>Leave a Comment</Button>;
    }

    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <InputContainer>
          <Label htmlFor="author">
            <Span>Your Name:</Span>
            <AuthorInput
              required
              type="text"
              name="author"
              id="author"
              value={this.state.author}
              onChange={event => this.setState({ author: event.target.value })}
            />
          </Label>
          <Label htmlFor="comment">
            <Span>Comment:</Span>
            <CommentInput
              required
              rows="3"
              cols="20"
              name="comment"
              id="comment"
              value={this.state.comment}
              onChange={event => this.setState({ comment: event.target.value })}
            />
          </Label>
        </InputContainer>
        <Button float="left" onClick={this.cancelForm.bind(this)}>
          Cancel
        </Button>
        <Button float="right">
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
