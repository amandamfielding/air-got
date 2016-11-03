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
    const { stars, description } = this.props.place;

    return (
      <div className="place-index-item"
           onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="index-item-category">Rating: </span>
          <span className="index-item-copy">
            {stars}
          </span>
          <span className="index-item-category">Description: </span>
          <span className="index-item-copy">{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaceIndexItem);
