import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentBox from './CommentBox';

// import '../../stylesheets/comments.css';
class Comments extends Component {
  state = {
    id: '',
    comments: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ id: nextProps.recipeId });
    this.fetchComment(nextProps.recipeId);
  }

  fetchComment(id) {
    const that = this;
    const url = `/api/comments?id=${id}`;
    fetch(url)
      .then(res => res.json())
      .then(function(json) {
        //derstructed incoming object keys match the state objects
        that.setState({ comments: json });
      });
  }

  /*when a new comment is added this tells the RecipeDetailed component
  that a change has been made to its child and it should update its current information*/
  newComment() {
    this.fetchComment(this.state.id);
  }

  render() {
    return (
      <div>
        <CommentForm newComment={() => this.newComment()} recipeId={this.props.recipeId} />
        <CommentBox comments={this.state.comments} />
      </div>
    );
  }
}

export default Comments;
