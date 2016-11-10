import React from 'react';
import PlaceIndexItem from './place_index_item';

const PlaceIndex = ({ places, fetchReviews }) => (
  <div className="place-index">
       {places.map(place => (
         <PlaceIndexItem
           place={place}
           key={place.id} />
       ))}
  </div>
);

export default PlaceIndex;
