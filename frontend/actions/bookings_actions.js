export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REQUEST_BOOKINGS = "REQUEST_BOOKINGS";
export const REQUEST_BOOKING = "REQUEST_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const CREATE_BOOKING = "CREATE_BOOKING";
export const UPDATE_BOOKING = "UPDATE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";

export const requestBookings = () => ({
   type: REQUEST_BOOKINGS
});

export const requestBooking = (id) => ({
  type: REQUEST_BOOKING,
  id
});

export const receiveBookings = (bookings) => ({
   type: RECEIVE_BOOKINGS,
   bookings
});

 export const createBooking = (booking) => ({
   type: CREATE_BOOKING,
   booking
});

export const updateBooking = (booking) => ({
   type: UPDATE_BOOKING,
   booking
});

export const receiveBooking = (booking) => ({
   type: RECEIVE_BOOKING,
   booking
});

export const removeBooking = (booking) => ({
   type: REMOVE_BOOKING,
   booking
});

export const deleteBooking = (id) => ({
   type: DELETE_BOOKING,
   id
});

export const receiveBookingErrors = (errors) => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});
