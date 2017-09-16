import React, { Component } from 'react';

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
        <button
          className="comment-button"
          onClick={() => this.setState({ newCommentForm: true })}
        >
          {' '}
          Leave a Comment
        </button>
      );
    }

    return (
      <div>
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="comment-form-container">
            <label htmlFor="author">
              <span>Your Name:</span>
              <input type="text" name="author" id="author" />
            </label>
            <label htmlFor="comment" className="comment-form-comment">
              <span>Comment:</span>
              <textarea rows="3" cols="20" name="comment" id="comment" />
            </label>
          </div>
          <button
            className="comment-form-button float-left"
            onClick={event => this.cancelForm(event)}
          >
            Cancel
          </button>
          <input className="comment-form-button float-right" type="submit" />
        </form>
      </div>
    );
  }

  render() {
    return this.renderCommentForm();
  }
}

export default CommentForm;
