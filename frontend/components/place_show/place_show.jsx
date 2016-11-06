import React from 'react';
import { withRouter } from 'react-router';
import ReviewsContainer from '../reviews/reviews_container';

class Place extends React.Component {

  handleProfileClick() {
    const hostId = this.props.place.host.id;
    this.props.router.push(`users/${hostId}`);
  }

  render() {
    const { host, reviews, description, region, price_per_night, title, max_guests, stars, number_rooms, number_beds, property_type, place_images, house_rules } = this.props.place;
    if (host) {
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

            <div className="header-text">
              <div className="show-host-info">
                <div className="show-host-pic">
                  <img
                    className="show-host-pic-button"
                    src={host.image_url}
                    onClick={this.handleProfileClick}/>
                </div>
                <span>{host.name}</span>
              </div>

              <div className="show-place-categories">
                <h1 className="show-title">{title}</h1>
                <h3 key={region.id}>{region.name}</h3>
                <span id="show-rating">{"♛".repeat(stars)}</span>
                <ul className="show-place-details">
                  <li>
                    <img src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478414829/Palace-100_nykmvb.png" />
                    <br/>{property_type}
                    </li>
                  <li>
                    <img src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478414637/User_Groups-100_wopsm7.png" />
                    <br/>{max_guests} guests</li>
                  <li>
                    <img src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478414931/Door_Opened-100_i56gbl.png" />
                    <br/>{number_rooms} rooms</li>
                  <li>
                    <img src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478414482/Bed-100_ijbuj1.png"/>
                    <br/>{number_beds} beds</li>
                </ul>
              </div>
            </div>

            <div className="show-about">
              <h2>About This Listing</h2>
              <p>{description}</p>
            </div>
            <div className="show-rules">
              <h3>House Rules</h3>
              <p>{house_rules}</p>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              <ReviewsContainer
                reviews={reviews}/>
            </div>
          </div>

          <div className="make-booking-box">
            <form>
              <h2 className="booking-price">${price_per_night} per night</h2>
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
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default withRouter(Place);
