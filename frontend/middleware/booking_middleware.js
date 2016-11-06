import { requestBookings,
         receiveBooking,
         receiveBookings,
         removeBooking,
         REQUEST_BOOKINGS,
         REQUEST_BOOKING,
         CREATE_BOOKING,
         DELETE_BOOKING,
         UPDATE_BOOKING
        } from '../actions/place_actions';

 import { fetchBookings, fetchBooking, createBooking,
   deleteBooking, updateBooking } from '../util/place_api_util';

export default ({ getState, dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveBookings(data));
  const fetchSuccess = data => dispatch(receiveBooking(data));
  const successDelete = data => dispatch(removeBooking(data));

  switch(action.type){
    case REQUEST_BOOKINGS:
      fetchBookings(fetchAllSuccess);
      return next(action);
    case REQUEST_BOOKING:
      fetchBooking(action.id, fetchSuccess);
      return next(action);
    case CREATE_BOOKING:
      dispatch(createBooking(action.booking, fetchSuccess));
      return next(action);
    case DELETE_BOOKING:
      dispatch(deleteBooking(action.id,successDelete));
      return next(action);
    case UPDATE_BOOKING:
      dispatch(updateBooking(action.booking, fetchSuccess));
      return next(action);
    default:
      return next(action);
  }
};
