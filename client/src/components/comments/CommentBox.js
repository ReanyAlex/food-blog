import React from 'react';

// styled-components keeped in a seperate file
import { CommentContainer, AuthorHeader, Author, PostDate, Comment } from '../../stylesheets/comments/commentBoxStyled';

export default ({ comments }) => {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    localeMatcher: 'best fit'
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
          </CommentContainer>
        );
      })}
    </div>
  );
};
