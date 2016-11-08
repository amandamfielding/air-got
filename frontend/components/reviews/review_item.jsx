import React from 'react';


class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.canDeleteReview = this.canDeleteReview.bind(this);
    this.cannotDeleteReview = this.cannotDeleteReview.bind(this);
  }

  canDeleteReview() {
    return (
      <button
        className="delete-review-button"
        onClick={() => this.props.deleteReview(this.props.review.id)}>
        Delete
      </button>
    );
  }

  cannotDeleteReview() {
    return (
      <div></div>
    );
  }

    render() {
    if (this.props.review && window.currentUser) {
      let canDeleteStatus;
      if (window.currentUser.username === this.props.review.author.username) {
        canDeleteStatus = this.canDeleteReview();
      } else {
        canDeleteStatus = this.cannotDeleteReview();
      }
      const { author_image, author_name } = this.props.review;
      return (
        <div className="review">
          <ul className="review-details">
            <img className="review-user-pic" src={author_image} />
            <span className="review-author">{author_name}</span>
            <div className="rating-and-body">
              <li><span id="review-rating">{"♛".repeat(this.props.review.rating)}</span></li>
              <li className="review-body">{this.props.review.body}</li>
              {canDeleteStatus}
            </div>
          </ul>
        </div>
      );
    } else {
      return (<div></div>);
    }

  }
}

export default ReviewItem;
