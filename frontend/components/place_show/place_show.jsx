import React from 'react';
import { withRouter } from 'react-router';
import ReviewsContainer from '../reviews/reviews_container';


class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place_id: this.props.placeId,
      check_in_date: "",
      check_out_date: "",
      number_of_guests: ""
    };
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillMount() {
    this.props.requestPlace(this.props.params.placeId);
    this.props.fetchReviews(this.props.params.placeId);
  }

  handleProfileClick() {
    const hostId = this.props.place.host.id;
    this.props.router.push(`users/${hostId}`);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleCreateSubmit(e) {
		e.preventDefault();
		const booking = this.state;
		this.props.createBooking(booking);
	}

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return(
        <ul className="booking-errors">
          {this.props.errors.map((error, i) => (
            <li  key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    const { host, description, region, price_per_night, title, max_guests, stars, number_rooms, number_beds, property_type, place_images, house_rules } = this.props.place;

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
                <div className="show-host-pic">
                  <div><img
                    className="show-host-pic-button"
                    src={host.image_url}
                    onClick={this.handleProfileClick}/>
                  </div>
                  <span>{host.name}</span>
                </div>

              <div className="show-place-categories">
                <div className="title-with-rating">
                  <h1 className="show-title">{title}</h1>
                  <span id="show-rating">{"♛".repeat(stars)}</span>
                </div>
                <h3 key={region.id}>{region.name}</h3>

                <ul className="show-place-details">
                  <li>
                    <img src="https://res.cloudinary.com/dbsxgncvx/image/upload/v1478414829/Palace-100_nykmvb.png" />
                    <br/>{property_type}
                    </li>
                  <li>
                    <img src="https://res.cloudinary.com/dbsxgncvx/image/upload/v1478414637/User_Groups-100_wopsm7.png" />
                    <br/>{max_guests} guests</li>
                  <li>
                    <img src="https://res.cloudinary.com/dbsxgncvx/image/upload/v1478414931/Door_Opened-100_i56gbl.png" />
                    <br/>{number_rooms} rooms</li>
                  <li>
                    <img src="https://res.cloudinary.com/dbsxgncvx/image/upload/v1478414482/Bed-100_ijbuj1.png"/>
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
              <ReviewsContainer />
            </div>
          </div>

          <div className="make-booking-box">
            <form onSubmit={this.handleCreateSubmit}>
              {this.renderErrors()}
              <h2 className="booking-price">${price_per_night} per night</h2>
              <div className="dates">
              <label className="booking-category">Check In
                <input
                  onChange={this.update("check_in_date")}
                  className="booking-input"
                  type="date">
                </input>
              </label>
              <label className="booking-category">Check Out
                <input
                  onChange={this.update("check_out_date")}
                  className="booking-input"
                  type="date">
                </input>
              </label>
              </div>
              <label className="num-guests">Guests
                <select
                  onChange={this.update("number_of_guests")}
                  className="booking-input">
                  <option value="" disabled selected>Select guests</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
									<option value="3">3</option>
                  <option value="4">4</option>
									<option value="5">5</option>
                  <option value="6">6</option>
									<option value="7">7</option>
                  <option value="8">8</option>
									<option value="9">9</option>
                  <option value="10">10</option>
									<option value="11">11</option>
                  <option value="12">12</option>
									<option value="13">13</option>
                  <option value="14">14</option>
									<option value="15">15</option>
                  <option value="16">16</option>
									<option value="17">17</option>
                  <option value="18">18</option>
									<option value="19">19</option>
                  <option value="20">20</option>
									<option value="21">21</option>
                  <option value="22">22</option>
									<option value="23">23</option>
                  <option value="24">24</option>
									<option value="25">25</option>
                  <option value="26">26</option>
									<option value="27">27</option>
                  <option value="28">28</option>
									<option value="29">29</option>
                  <option value="30">30</option>
									<option value="31">31</option>
                  <option value="32">32</option>
									<option value="33">33</option>
                  <option value="34">34</option>
									<option value="35">35</option>
                  <option value="36">36</option>
									<option value="37">37</option>
                  <option value="38">38</option>
									<option value="39">39</option>
                  <option value="40">40</option>
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
