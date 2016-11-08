import { requestBookings,
         receiveBooking,
         receiveBookings,
         removeBooking,
         receiveBookingErrors,
         REQUEST_BOOKINGS,
         REQUEST_BOOKING,
         CREATE_BOOKING,
         DELETE_BOOKING,
         UPDATE_BOOKING
       } from '../actions/bookings_actions';
 import { fetchBookings, fetchBooking, createBooking,
   deleteBooking, updateBooking } from '../util/booking_api_util';
  import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveBookings(data));
  const fetchSuccess = data => dispatch(receiveBooking(data));
  const createSuccess = data => {
    hashHistory.push('bookings');
    dispatch(receiveBooking(data));
  };

  const successDelete = data => dispatch(removeBooking(data));
  const fetchErrors = data => {
    return dispatch(receiveBookingErrors(data.responseJSON));
  };

  switch(action.type){
    case REQUEST_BOOKINGS:
      fetchBookings(fetchAllSuccess);
      return next(action);
    case REQUEST_BOOKING:
      fetchBooking(action.id, fetchSuccess);
      return next(action);
    case CREATE_BOOKING:
      createBooking(action.booking, createSuccess, fetchErrors);
      return next(action);
    case DELETE_BOOKING:
      deleteBooking(action.id,successDelete);
      return next(action);
    case UPDATE_BOOKING:
      updateBooking(action.booking, fetchSuccess, fetchErrors);
      return next(action);
    default:
      return next(action);
  }
};
