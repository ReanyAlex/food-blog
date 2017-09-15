import React from 'react';
import CommentForm from './CommentForm';
import ShowComments from './ShowComments';

import '../../stylesheets/comments.css';

export default props => {
  return (
    <div>
      <CommentForm newComment={props.newComment} recipeId={props.recipeId} />
      <ShowComments comments={props.comments} />
    </div>
  );
};
