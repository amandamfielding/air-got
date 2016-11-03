import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RegionsReducer from './regions_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  regions: RegionsReducer
});

export default RootReducer;
