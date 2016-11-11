import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../util/marker_manager';
/* globals google */

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

function getTileCode(a,b) {
  let c=Math.pow(2,b);
  let d=a.x;
  let e=a.y;
  let f="t";
  for(let g=0;g<b;g++){
    c=c/2;
    if(e<c){
      if(d<c){f+="q";}
      else{f+="r";d-=c;}
    }
    else{
      if(d<c){f+="t";e-=c;}
      else{f+="s";d-=c;e-=c;}
    }
  }
  return f;
}

function isOutsideTileRange(coord,zoom) {
  let tileRange = 1 << zoom;
  if (coord.x < 0 || coord.x >= tileRange) return true;
  if (coord.y < 0 || coord.y >= tileRange) return true;
  return false;
}


const nolabelMapType = new google.maps.ImageMapType({
    getTileUrl: function(coord,zoom) {
      if (isOutsideTileRange(coord,zoom)) return null;
      return "assets/fsm/"+getTileCode(coord,zoom)+".jpg";
    },
    tileSize: new google.maps.Size(256, 256),
    maxZoom: 6,
    minZoom: 2,
    radius: 1738000,
    name: "No Labels"
  });

class Map extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   places: []
    // };
    this._registerListeners = this._registerListeners.bind(this);
  }

  componentDidMount() {
    // debugger
    const map = this.refs.map;
    const lat = parseInt(this.props.params.lat);
    const lng = parseInt(this.props.params.lng);
    this.map = new google.maps.Map(map, {
      center: {lat,lng},
      zoom: 4,
      streetViewControl: false,
      overviewMapControl: true,
      mapTypeControl: false
    });
    this.map.mapTypes.set('No Labels', nolabelMapType);
    this.map.setMapTypeId('No Labels');
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.places);
    // this.setState({places: this.props.places});
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState({places: newProps.places});
  // }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.places);
    // this._registerListeners();
  }

  _registerListeners() {
    let lastValidCenter = this.map.getCenter();
         const allowedBounds = new google.maps.LatLngBounds(
           new google.maps.LatLng(-80,-170),
           new google.maps.LatLng(80,170)
         );
     	   google.maps.event.addListener(this.map, 'center_changed', () => {
           if (allowedBounds.contains(this.map.getCenter())) {
             lastValidCenter = this.map.getCenter();
             return;
           }
           this.map.panTo(lastValidCenter);
         });

    google.maps.event.addListener(this.map, 'idle', () => {
      // debugger
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
      // this.setState({places: this.props.places});
    });

    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
    });
  }

  _handleMarkerClick(place) {
    this.props.router.push(`places/${place.id}`);
  }

  render() {
    return <div className="map" ref="map"></div>;
  }
}

export default withRouter(Map);
