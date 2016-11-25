import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RegionsReducer from './regions_reducer';
import PlacesReducer from './places_reducer';
import ReviewsReducer from './reviews_reducer';
import BookingsReducer from './bookings_reducer';
import FiltersReducer from './filters_reducer';
import UserReducer from './user_reducer';
import RegionsSearchReducer from './regions_search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  regions: RegionsReducer,
  searchedRegions: RegionsSearchReducer,
  places: PlacesReducer,
  reviews: ReviewsReducer,
  bookings: BookingsReducer,
  filters: FiltersReducer,
  user: UserReducer
});

export default RootReducer;
