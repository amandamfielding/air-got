import { RECEIVE_REGIONS } from '../actions/regions_actions';

const RegionsReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_REGIONS:
      return action.regions;
    default:
      return state;
  }
};

export default RegionsReducer;
