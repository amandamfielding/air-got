import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
/* globals google */

class Map extends React.Component {
    componentDidMount() {
      const mapDOMNode = this.refs.map;
      const mapOptions = {
        center: {lat: 37.7758, lng: -122.435}, // this is SF
        zoom: 13
      };
      // wrap the mapDOMNode in a Google Map
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
    }

    render() {
      return <div id="map-container" ref="map">Map</div>;
    }
}

export default withRouter(Map);
