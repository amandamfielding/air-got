import { RECEIVE_BOOKINGS,
         RECEIVE_BOOKING,
         REMOVE_BOOKING,
         RECEIVE_BOOKING_ERRORS,
        } from '../actions/bookings_actions';
import merge from 'lodash/merge';

const BookingsReducer = (oldState={errors:[]}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return merge({},oldState,action.bookings);
    case RECEIVE_BOOKING:
      let state = merge({},oldState,{[action.booking.id]:action.booking});
      state.errors = [];
      debugger
      return state;
    case REMOVE_BOOKING:
      let newState = merge({},oldState);
      delete newState[action.booking.id];
      return newState;
    case RECEIVE_BOOKING_ERRORS:
      let anotherState = merge({},oldState);
      anotherState.errors = action.errors;
      debugger
      return anotherState;
    default:
      return oldState;
  }
};

export default BookingsReducer;
