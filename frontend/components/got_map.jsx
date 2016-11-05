import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
/* globals google */

function getNormalizedCoord(coord, zoom) {
  var y = coord.y;
  var x = coord.x;

  // tile range in one direction range is dependent on zoom level
  // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
  var tileRange = 1 << zoom;

  // don't repeat across y-axis (vertically)
  if (y < 0 || y >= tileRange) {
    return null;
  }

  // repeat across x-axis
  if (x < 0 || x >= tileRange) {
    x = (x % tileRange + tileRange) % tileRange;
  }

  return {x: x, y: y};
}

const gotMapType = new google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
      let normalizedCoord = getNormalizedCoord(coord, zoom);
      if (!normalizedCoord) {
        return null;
      }
      let bound = Math.pow(2, zoom);
      return '//mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw' +
            '/' + zoom + '/' + normalizedCoord.x + '/' +
            (bound - normalizedCoord.y - 1) + '.jpg';
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 9,
  minZoom: 0,
  radius: 1738000,
  name: 'got'
});



class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, {
      center: {lat: 0, lng: 0},
      zoom: 1,
      streetViewControl: false,
      mapTypeControlOptions: {
        mapTypeIds: ['got']
      }
    });
    this.map.mapTypes.set('got', gotMapType);
    this.map.setMapTypeId('got');
  }

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(Map);
