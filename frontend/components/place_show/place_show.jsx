import React from 'react';
import { withRouter } from 'react-router';
import ReviewsContainer from '../reviews/reviews_container';

class Place extends React.Component {

  componentDiDMount() {
    this.props.fetchReviews();
  }

  handleProfileClick() {
    const hostId = this.props.place.host.id;
    this.props.router.push(`users/${hostId}`);
  }

  render() {
    const { host, reviews, description, region, price_per_night, title, max_guests, stars, number_rooms, number_beds, property_type, place_images, house_rules } = this.props.place;
    if (host && reviews) {
      return (
        <div className="place-show">
          <div className="pics">
            <ul
              className="place-images">
              {place_images.map(image =>
              <li
                className="place-image-li"
                key={image.id}
                ><img
                className="place-image"
                src={image.url} /></li>
              )}
            </ul>
          </div>
          <div className="text">
            <div className="show-host-info">
              <div className="show-host-pic">
                <img
                  className="show-host-pic-button"
                  src={host.image_url}
                  onClick={this.handleProfileClick}/>
              </div>
              <span>{host.name}</span>
            </div>
            <div className="header-text">

            <div className="show-place-categories">
              <h2 className="show-title">{title}</h2>
              <div className="show-place-details">
                <li key={region.id}>{region.name}</li>
                <li><span id="show-rating">{"⭐️".repeat(stars)}</span></li>
                <div>{max_guests} guests</div>
                <div>{number_rooms} rooms</div>
                <div>{number_beds} beds</div>
              </div>
            </div>
            </div>

            <div className="make-booking-box">
              <form>
                <h3 className="booking-price">${price_per_night} per night</h3>
                <div className="dates">
                <label className="booking-category">Check In
                  <input
                    className="booking-input"
                    type="date">
                  </input>
                </label>
                <label className="booking-category">Check Out
                  <input
                    className="booking-input"
                    type="date">
                  </input>
                </label>
                </div>
                <label className="num-guests">Guests
                  <select
                    className="booking-input">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </label>
                <input
                  className="submit-booking"
                  type="submit"
                  value="Make a Booking" />
              </form>
            </div>

            <div className="show-about">
              <h2>About This Listing</h2>
              <p>{description}</p>
            </div>
            <div className="show-rules">
              <h3>House Rules</h3>
              <p>{house_rules}</p>
            </div>
            <div className="Reviews">
              <h2>Reviews</h2>
              <ReviewsContainer
                reviews={reviews}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default withRouter(Place);
