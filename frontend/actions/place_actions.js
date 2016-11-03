export const RECEIVE_PLACES = "RECEIVE_PLACES";
export const RECEIVE_PLACE = "RECEIVE_PLACE";
export const REQUEST_PLACES = "REQUEST_PLACES";
export const REQUEST_PLACE = "REQUEST_PLACE";

export const requestPlaces = () => ({
  type: REQUEST_PLACES
});

export const requestPlace = id => ({
  type: REQUEST_PLACE,
  id
});

export const receivePlaces = places => ({
  type: RECEIVE_PLACES,
  places
});

export const receivePlace = place => ({
  type: RECEIVE_PLACE,
  place
});
