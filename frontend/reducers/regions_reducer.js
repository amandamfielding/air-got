import { RECEIVE_REGIONS, RECEIVE_SEARCH_REGIONS } from '../actions/regions_actions';

const RegionsReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_REGIONS:
      return action.regions;
    case RECEIVE_SEARCH_REGIONS:
    console.log(action.regions);
      return action.regions;
    default:
      return state;
  }
};

export default RegionsReducer;
