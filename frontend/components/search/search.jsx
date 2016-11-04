import React from 'react';
import PlaceIndex from './place_index';
import Map from '../map';

const Search = ({places}) => (
  <div className="search-pane group">
    <div className="left-half-places">
      <PlaceIndex places={places} />
    </div>
    <div className="right-half-map">
      <Map places={places} />
    </div>
  </div>
);

export default Search;
