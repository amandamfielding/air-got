import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RegionsReducer from './regions_reducer';
import PlacesReducer from './places_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  regions: RegionsReducer,
  places: PlacesReducer
});

export default RootReducer;
