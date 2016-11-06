import React from 'react';
import ReviewItem from './review_item';
import ReviewForm from './review_form';

class ReviewsIndex extends React.Component {

  render() {
    return (
      <div>
          {this.props.reviews.map( review => (
            <ReviewItem
              key={review.id}
              deleteReview={this.props.deleteReview}
              review={review}/>
          ))}
        <ReviewForm />
      </div>
    );
  }
}

export default ReviewsIndex;
