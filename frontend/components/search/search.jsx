import React from 'react';
// import PlacesIndex from './places_index';
import Map from '../map';

const Search = () => (
  <div className="user-pane">
    <div className="left-half-places">
    </div>
    <div className="right-half-map">
      <Map />
    </div>
  </div>
);

export default Search;
