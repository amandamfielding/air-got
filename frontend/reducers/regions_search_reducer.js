import { RECEIVE_SEARCH_REGIONS } from '../actions/regions_actions';

const RegionsSearchReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_REGIONS:
      return action.searchedRegions;
    default:
      return state;
  }
};

export default RegionsSearchReducer;
