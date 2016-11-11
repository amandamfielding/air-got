import React from 'react';
import { withRouter } from 'react-router';

class Regions  extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     name: "",
     image_url: "",
   };
   this.navigateToSearch = this.navigateToSearch.bind(this);
 }

  navigateToSearch(lat,lng) {
    this.props.router.push(`search/${lat}/${lng}`);
  }

  render() {
    return (
      <div>
        <h2 id="regions-title">Explore all of Westeros and Essos</h2>
        <h3 id="regions-subtitle">No matter your house name, belong anywhere</h3>
        <ul className="regions group">
        {this.props.regions.map((region) =>
          <button
            className="region-element"
            key={region.id}
            onClick={() => {this.navigateToSearch(region.lat,region.lng);}}>
            <img className="region-pic" src={region.image_url}/>
            <span className="region-name">{region.name}</span>
          </button>
        )}
        </ul>
      </div>
    );
  }
}

export default withRouter(Regions);
