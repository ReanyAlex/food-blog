import React from 'react';
import axios from 'axios';
// styled-components keeped in a seperate file
import { CommentContainer, AuthorHeader, Author, PostDate, Comment } from '../../stylesheets/comments/commentBoxStyled';

export default ({ comments, refreshCommentList }) => {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    localeMatcher: 'best fit'
  };

  const deleteComment = id => {
    const url = `/api/comments/${id}`;
    axios.delete(url).then(refreshCommentList);
  };

  return (
    <div>
      {comments.map(comment => {
        //formatting date to match users location
        let date = new Date(comment.dateCreated).toLocaleDateString('en-US', dateOptions);

        return (
          <CommentContainer key={comment._id}>
            <AuthorHeader>
              <span>From:</span>
              <Author>{comment.author}</Author>
            </AuthorHeader>
            <PostDate>{date}</PostDate>
            <Comment>{comment.comment}</Comment>
            <button onClick={() => deleteComment(comment._id)}>Delete</button>
          </CommentContainer>
        );
      })}
    </div>
  );
};
