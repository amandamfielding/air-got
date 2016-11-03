import { fetchRegions } from '../util/regions_api_util';
import { FETCH_REGIONS, receiveRegions } from '../actions/regions_actions';

export default ({getState, dispatch}) => next => action => {
  const successCallback = (data) => dispatch(receiveRegions(data));

  switch (action.type) {
    case FETCH_REGIONS:
      fetchRegions(successCallback);
      return next(action);
    default:
      return next(action);
  }
};
