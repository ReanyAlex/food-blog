import React from 'react';
import CommentForm from './CommentForm';
import CommentBox from './CommentBox';

// import '../../stylesheets/comments.css';

export default props => {
  return (
    <div>
      <CommentForm newComment={props.newComment} recipeId={props.recipeId} />
      <CommentBox comments={props.comments} />
    </div>
  );
};
