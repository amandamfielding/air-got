export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFromPlace = this._createMarkerFromPlace.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(places){

    this.places = places;
    this._placesToAdd().forEach(this._createMarkerFromPlace);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _placesToAdd() {
    const currentPlaces = this.markers.map( marker => marker.placeId );
    return this.places.filter( place => !currentPlaces.includes(place.id) );
  }

  _markersToRemove(){
    const placeIds = this.places.map( place => place.id );
    return this.markers.filter( marker => !placeIds.includes(marker.placeId) );
  }

  _createMarkerFromPlace(place) {
    const pos = new google.maps.LatLng(place.lat, place.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      placeId: place.id
    });
    marker.addListener('click', () => this.handleClick(place));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    // debugger
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
