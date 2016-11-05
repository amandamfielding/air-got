import React from 'react';
import ReviewItem from './review_item';
import ReviewFormContainer from './review_form_container';

class ReviewsIndex extends React.Component {

  render() {
    if (this.props.reviews) {
      return (
        <ul>
          {this.props.reviews.map( review => (
            <ReviewItem
              key={review.id}
              deleteReview={this.props.deleteReview}
              review={review}/>
          ))}
        </ul>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default ReviewsIndex;
