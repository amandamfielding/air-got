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
    maxZoom: 5,
    minZoom: 1,
    radius: 1738000,
    name: "No Labels"
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
      overviewMapControl: true,
      mapTypeControlOptions: {mapTypeIds: ["Labels", "No Labels"]}
    });
    this.map.mapTypes.set('No Labels', nolabelMapType);
    this.map.setMapTypeId('No Labels');
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.singlePlace) {
      this.props.requestPlace(this.props.placeId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.places);
    }
  }

  componentDidUpdate() {
    if(this.props.singlePlace){
      this.MarkerManager.updateMarkers([this.props.places[Object.keys(this.props.places)[0]]]); //grabs only that one place
    } else {
      this.MarkerManager.updateMarkers(this.props.places);
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleMarkerClick(place) {
    this.props.router.push(`places/${place.id}`);
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "places/new",
      query: coords
    });
  }

  render() {
    return <div className="map" ref="map"></div>;
  }
}

export default withRouter(Map);
