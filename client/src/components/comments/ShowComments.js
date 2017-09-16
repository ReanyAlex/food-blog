import React from 'react';

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
        let date = new Date(comment.dateCreated);
        date = date.toLocaleDateString('en-US', dateOptions);

        return (
          <div key={comment._id} className="comment-container">
            <h5 className="comment-author">
              <span>From:</span>
              <p className="padding-left">{comment.author}</p>
              <p className="comment-date">{date}</p>
            </h5>
            <p className="comment-comment">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};
