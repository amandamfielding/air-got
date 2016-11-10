import React from 'react';
import { withRouter } from 'react-router';
import { createReview } from '../../actions/reviews_actions';
import Stars from 'react-stars';

class ReviewForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      body:"",
      rating:0
    };
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    this.updateStars = this.updateStars.bind(this);
    this.clearReviewForm = this.clearReviewForm.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  updateStars(newValue) {
    this.setState({
      rating: newValue
    });
  }

  clearReviewForm() {
      this.setState({
        body:"",
        rating:0
      });
  }


  handleReviewSubmit(e) {
    e.preventDefault();
    const placeId = parseInt(this.props.params.placeId);
    const review = Object.assign({}, this.state, {
      place_id: placeId
    });
    this.props.createReview(review);
    this.clearReviewForm();
  }

  render() {
    return (
      <div className="review-form">
        <h3>Add a Review</h3>
        <form onSubmit={this.handleReviewSubmit}>
          <div>
            <span id="span-rating">Rating:</span>
            <Stars
              className="stars"
              count={5}
              char={"♛"}
              size={24}
              value={this.state.rating}
              onChange={this.updateStars}
              color1={'white'}
              color2={'#CC1200'} />
          </div>

          <textarea
            className="form-body"
            name={this.body}
            cols='40'
            rows='5'
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Add comment...">
          </textarea>
          <br/>
          <div className="submit-and-cancel">
            <input className="review-submit" type="submit"/>
            <button className="cancel" onClick={this.clearReviewForm}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
