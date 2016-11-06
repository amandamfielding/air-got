import { RECEIVE_BOOKINGS,
         RECEIVE_BOOKING,
         REMOVE_BOOKING } from '../actions/bookings_actions';
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
    default:
      return oldState;
  }
};

export default BookingsReducer;
