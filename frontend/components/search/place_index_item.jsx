import React from 'react';
import { withRouter } from 'react-router';

class PlaceIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const placeId = this.props.place.id;
    this.props.router.push(`places/${placeId}`);
  }

  render() {
    const { host, price_per_night, title, max_guests, stars, property_type, place_images } = this.props.place;

    return (
      <div className="place-index-item"
           onClick={this.handleClick}>

        <div className="index-item-info">
          <div className="place-and-host">
            <img
              className="place-pic"
              src={place_images[0].url}
              />
            <span className="index-item-price">${price_per_night}</span>
            <div className="host-pic">
              <img
                className="host-pic-button"
                src={host.image_url}/>
            </div>
          </div>
          <span className="index-item-title">{title}</span>
          <ul className="place-details">
            <li className="index-item-value">{property_type} &bull;</li>
            <li className="index-item-value">{max_guests} guests &bull;</li>
            <li className="index-item-value">{stars} stars</li>
          </ul>

        </div>
      </div>
    );
  }
}

export default withRouter(PlaceIndexItem);
