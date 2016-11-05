import React from 'react';
import { withRouter } from 'react-router';

class PlaceIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  handleClick() {
    const placeId = this.props.place.id;
    this.props.router.push(`places/${placeId}`);
  }

  handleProfileClick() {
    const hostId = this.props.place.host.id;
    this.props.router.push(`users/${hostId}`);
  }

  render() {
    const { host, price_per_night, title, max_guests, stars, property_type, place_images } = this.props.place;
    return (
      <div className="place-index-item">
        <div className="index-item-info">
          <div className="place-and-host">
            <img
              className="place-pic"
              src={place_images[0].url}
              onClick={this.handleClick}
              />
            <span className="index-item-price">${price_per_night}</span>
            <div className="host-pic">
              <img
                className="host-pic-button"
                src={host.image_url}
                onClick={this.handleProfileClick}/>
            </div>
          </div>
          <span className="index-item-title">{title}</span>
          <ul className="place-details">
            <li className="index-item-value">{property_type}</li>
            <li className="index-item-value">&bull;</li>
            <li className="index-item-value">{max_guests} guests</li>
            <li className="index-item-value">&bull;</li>
            <li className="index-item-value"><span id="rating">{"⭐️".repeat(stars)}</span></li>
          </ul>

        </div>
      </div>
    );
  }
}

export default withRouter(PlaceIndexItem);
