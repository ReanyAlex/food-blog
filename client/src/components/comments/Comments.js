import React, { Component } from 'react';
import axios from 'axios';
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

  /*when a new comment is added this tells the RecipeDetailed component
  that a change has been made to its child and it should update its current information*/
  fetchComment(id) {
    const that = this;
    const url = `/api/comments?id=${id}`;
    axios.get(url).then(function(res) {
      //derstructed incoming object keys match the state objects
      that.setState({ comments: res.data });
    });
  }

  render() {
    return (
      <div>
        <CommentForm refreshCommentList={() => this.fetchComment(this.state.id)} recipeId={this.props.recipeId} />
        <CommentBox
          comments={this.state.comments}
          refreshCommentList={() => this.fetchComment(this.state.id)}
          recipeId={this.props.recipeId}
        />
      </div>
    );
  }
}

export default Comments;
