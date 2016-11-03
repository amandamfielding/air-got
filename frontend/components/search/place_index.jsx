import React from 'react';
import PlaceIndexItem from './place_index_item';

const PlaceIndex = ({ places }) => (
  <div>
    <h1>Listings: </h1>
       {places.map(place => (
         <PlaceIndexItem place={place} key={place.id} />
       ))}
  </div>
);

export default PlaceIndex;
