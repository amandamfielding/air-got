import React from 'react';
import { withRouter } from 'react-router';
import { createReview } from '../../actions/reviews_actions';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component{
  constructor(props) {
    super(props);
    this.body = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToPlaceShow = this.navigateToPlaceShow.bind(this);
  }


  navigateToPlaceShow() {
    this.props.router.push(`/places/${this.props.params.placeId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const placeId = parseInt(this.props.params.placeId);
    const review = Object.assign({}, this.state, {
      place_id: placeId
    });
    createReview({review});
    this.navigateToPlaceShow();
  }

  render() {

    return (
      <div className="form">
        <h3>Add a Review</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <span id="span-rating">Rating:</span>
            <ReactStars
              className="stars"
              count={5}
              char={"♛"}
              size={24}
              color2={'rgb(160,0,17)'} />
          </div>

          <textarea
            className="form-body"
            name={this.body}
            cols='40'
            rows='5'
            placeholder="Add comment...">
          </textarea>
          <br/>
          <div className="submit-and-cancel">
            <input className="review-submit" type="submit"/>
            <button className="cancel" onClick={this.navigateToPlaceShow}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
