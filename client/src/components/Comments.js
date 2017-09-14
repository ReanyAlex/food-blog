import React, { Component } from 'react';

// import '../stylesheets/recipeDetailed.css';

class Comments extends Component {
  state = {
    newCommentForm: false
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  renderCommentForm() {
    if (!this.state.newCommentForm) {
      return (
        <button onClick={() => this.setState({ newCommentForm: true })}>
          {' '}
          Leave a Comment
        </button>
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="author">
            <span>Your Name:</span>
            <input type="text" name="author" id="author" />
          </label>
          <label htmlFor="author">
            <span>Comment:</span>
            <textarea rows="3" cols="20" name="comment" id="comment" />
          </label>
          <button
            onClick={event => {
              event.preventDefault();
              this.setState({ newCommentForm: false });
            }}
          >
            Cancel
          </button>
          <input type="submit" />
        </form>
      </div>
    );
  }

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
      body: JSON.stringify({
        recipeId,
        author,
        comment
      })
    });

    this.setState({ newCommentForm: false });
    this.props.newComment();
  }

  renderComments() {
    return this.props.comments.map(comment => {
      return (
        <div key={comment._id} className="comment-container">
          <h5 className="comment-author">From:{comment.author}</h5>
          <p className="comment-commnet">{comment.comment}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderCommentForm()}
        {this.renderComments()}
      </div>
    );
  }
}

export default Comments;
