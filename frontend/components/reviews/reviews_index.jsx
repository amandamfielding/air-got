import React from 'react';
import ReviewItem from './review_item';
import ReviewForm from './review_form';

class ReviewsIndex extends React.Component {


  render() {
    if (this.props.reviews) {
      return (
        <div>
            {this.props.reviews.map( review => (
              <ReviewItem
                key={review.id}
                deleteReview={this.props.deleteReview}
                review={review}/>
            ))}
          <ReviewForm createReview={this.props.createReview} />
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ReviewsIndex;
