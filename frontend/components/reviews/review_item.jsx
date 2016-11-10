import React from 'react';


class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review
    };
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
      const { author_image, author_name, author_username } = this.props.review;
      if (this.props.review) {
        let canDeleteStatus;
        if (window.currentUser) {
        if (window.currentUser.username === author_username) {
          canDeleteStatus = this.canDeleteReview();
        } else {
          canDeleteStatus = this.cannotDeleteReview();
      }}

      return (
        <div className="review">
          <ul className="review-details">
            <div className="review-author">
              <img className="review-user-pic" src={author_image} />
              <span className="review-author-name">{author_name}</span>
            </div>
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
