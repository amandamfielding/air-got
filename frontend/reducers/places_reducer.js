import { RECEIVE_PLACES, RECEIVE_PLACE } from '../actions/place_actions';
import merge from 'lodash/merge';

const PlacesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PLACES:
      return action.places;
    case RECEIVE_PLACE:
      const newPlace = {[action.place.id]: action.place};
      return merge({}, state, newPlace);
    default:
      return state;
  }
};

export default PlacesReducer;
