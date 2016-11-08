export const fetchBookings = (success,error) => {
  $.ajax({
    method: 'GET',
    url: '/api/bookings',
    success,
    error: console.log(error)
  });
};

export const fetchBooking = (id,success,error) => {
  $.ajax({
    method: 'GET',
    url: `/api/bookings/${id}`,
    success,
    error: console.log(error)
  });
};

export const createBooking = (booking, success, error) => {
  debugger
  $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: {booking: booking},
    success,
    error
  });
};

export const updateBooking = (booking, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/bookings/${booking.id}`,
    data: {booking: booking},
    success,
    error
  });
};

export const deleteBooking = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${id}`,
    success
  });
};
