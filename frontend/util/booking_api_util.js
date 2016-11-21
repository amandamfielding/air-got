export const fetchBookings = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/bookings',
    success
  });
};

export const fetchBooking = (id,success) => {
  $.ajax({
    method: 'GET',
    url: `/api/bookings/${id}`,
    success
  });
};

export const createBooking = (booking, success, error) => {
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
