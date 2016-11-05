import React from 'react';

const ReviewItem = ({ review, deleteReview }) => {
  if (review) {
    return (
      <ul>
        <li>{review.host}</li>
        <li>{review.number_of_stars}</li>&nbsp
        <li>{review.body}</li>
        <button onClick={() => deleteReview(review.id)}>Delete</button>
      </ul>
    );
  } else {
    return (<div></div>);
  }
};

export default ReviewItem;
