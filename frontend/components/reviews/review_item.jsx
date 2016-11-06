import React from 'react';

const ReviewItem = ({ review, deleteReview }) => {
  if (review) {
    return (
      <div className="review">
        <ul className="review-details">
          <img className="review-user-pic" src={review.author.image_url} />
          <span className="review-author">{review.author.name}</span>
          <div className="rating-and-body">
            <li><span id="review-rating">{"♛".repeat(review.rating)}</span></li>
            <li className="review-body">{review.body}</li>
            <button
              className="delete-review-button"
              onClick={() => deleteReview(review.id)}>Delete</button>
          </div>
        </ul>
      </div>
    );
  } else {
    return (<div></div>);
  }
};

export default ReviewItem;
