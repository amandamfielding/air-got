import { RECEIVE_BOOKINGS,
         RECEIVE_BOOKING,
         REMOVE_BOOKING,
         RECEIVE_BOOKING_ERRORS} from '../actions/bookings_actions';
import merge from 'lodash/merge';

const BookingsReducer = (oldState={}, action) => {

  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({},oldState,{[action.booking.id]:action.booking});
    case REMOVE_BOOKING:
      let newState = merge({},oldState);
      delete newState[action.booking.id];
      return newState;
    case RECEIVE_BOOKING_ERRORS:
      return merge({},{errors: []},{errors: action.errors});
    default:
      return oldState;
  }
};

export default BookingsReducer;
