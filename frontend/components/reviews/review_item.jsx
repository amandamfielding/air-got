import React from 'react';

const ReviewItem = ({ review, deleteReview }) => {
  const { author_image, author_name } = this.props.review;
  if (review) {
    return (
      <div className="review">
        <ul className="review-details">
          <img className="review-user-pic" src={author_image} />
          <span className="review-author">{author_name}</span>
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
