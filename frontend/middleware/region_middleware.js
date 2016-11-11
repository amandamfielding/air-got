import { fetchRegions, searchRegions } from '../util/regions_api_util';
import { FETCH_REGIONS, SEARCH_REGIONS, receiveRegions, receiveSearchRegions } from '../actions/regions_actions';

export default ({getState, dispatch}) => next => action => {
  const successCallback = (data) => dispatch(receiveRegions(data));
  const successSearch = (data) => dispatch(receiveSearchRegions(data));

  switch (action.type) {
    case FETCH_REGIONS:
      fetchRegions(successCallback);
      return next(action);
    case SEARCH_REGIONS:
      searchRegions(action.letters, successSearch);
      return next(action);
    default:
      return next(action);
  }
};
