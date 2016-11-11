import { UPDATE_FILTER } from '../actions/filter_actions';
import { requestPlaces,
         receivePlace,
         receivePlaces,
         REQUEST_PLACES,
         REQUEST_PLACE } from '../actions/place_actions';

 import { fetchPlaces, fetchPlace } from '../util/place_api_util';

export default ({ getState, dispatch }) => next => action => {
  const placesSuccess = data => dispatch(receivePlaces(data));
  const placeSuccess = data => dispatch(receivePlace(data));

  switch(action.type){
    case REQUEST_PLACES:
      // debugger
      const filters = getState().filters;
      fetchPlaces(filters, placesSuccess);
      return next(action);
    case REQUEST_PLACE:
      fetchPlace(action.id, placeSuccess);
      return next(action);
    case UPDATE_FILTER:
      next(action);
      dispatch(requestPlaces());
      break;
    default:
      return next(action);
  }
};
