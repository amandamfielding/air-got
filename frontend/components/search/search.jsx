import React from 'react';
import PlaceIndex from './place_index';
import FilterForm from './filter_form';
import Map from '../got_map';

const Search = ({places, updateFilter, minPrice, maxPrice }) => (
  <div className="search-pane group">
    <div className="left-half-places">
      <FilterForm
        minPrice={minPrice}
        maxPrice={maxPrice}
        updateFilter={updateFilter} />
      <PlaceIndex places={places} />
    </div>
    <div className="right-half-map">
      <Map
        places={places}
        updateFilter={updateFilter} />
    </div>
  </div>
);

export default Search;
