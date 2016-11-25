import { searchRegions } from '../util/regions_api_util';
import { SEARCH_REGIONS, receiveSearchRegions } from '../actions/regions_actions';

export default ({getState, dispatch}) => next => action => {
  const successSearch = (data) => dispatch(receiveSearchRegions(data));

  switch (action.type) {
    case SEARCH_REGIONS:
      searchRegions(action.letters, successSearch);
      return next(action);
    default:
      return next(action);
  }
};
